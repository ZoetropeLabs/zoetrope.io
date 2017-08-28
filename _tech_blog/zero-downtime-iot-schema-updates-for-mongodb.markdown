---
title: Zero downtime schema updates for mongodb / mongoengine
date: 2017-03-25 09:35:00 Z
featured: 'true'
assets:
- path: "/uploads/schema_updates_2.png"
  name: schema_updates_2
- path: "/uploads/schema_updates_1.png"
  name: schema_updates_1
tags:
- IoT
- mongodb
- mongoengine
---

In IoT workflows, there is rarely an opportunity to take a system offline whilst updates are applied. In some situations a message queue can be used to hold back a torrent of incoming messages (from MQTT or AMQP), however this can only happen for so long. When your database reaches a cirtain size, the time taken for transforms to datasets can grow out of control.

This post outlines a technique we use at Zoetrope to perform updates without taking systems offline for more than a few seconds.

[mongoengine](https://github.com/MongoEngine/mongoengine) is a neat ORM type layer for mongodb which adds some really nice features for manipulating mongodb documents.

## Context

In mongodb terms, we can load documents without any worries about the structure of that document. We may descibe that a schema in mongoengine as:

<script src="https://gist.github.com/benhowes/8060e9938becb7aa94453b4e86dbc19a.js?file=initial_schemas.py"></script>

Mongoengine automatically adds an `id` field which maps to the `_id` field on mongodb. If we have an IoTDevice as defined above that may look like this when saved:

<script src="https://gist.github.com/benhowes/8060e9938becb7aa94453b4e86dbc19a.js?file=example.bson"></script>

By default, when mongoengine loads a document, it validates that there are no extra fields in the BSON that it wasn't expecting and that all fields it was expecting are correct. It is possible to change this validation, however that is only required for backwards compatibility in our solution.

## Performing an upgrade
If we have a siutation where we want to be able to fetch devices directly from their tags - perhaps we want an index of those tags in mongodb to allow quickly fetching all sensors of a type - then we need to add a new field to the device which fetches from the product table.

In this case, the new schema for the device is:

<script src="https://gist.github.com/benhowes/8060e9938becb7aa94453b4e86dbc19a.js?file=updated_schema.py"></script>

Zoetrope's solution to this problem is a transform which is applied during the loading of documents from the database, before they are passed by mongoengine.

## Transforms

The normal loading process is as follows:

![Loading document from mongodb](/assets/img/pages/schema_updates_1.png)

However, this process can be intercepted in order to perform our schema update as follows:

![Adding schema update](/assets/img/pages/schema_updates_2.png)

The BSON is loaded by pymongo and then we capture it in order to be able to perform our schema changes. The actual schema change is simple:

<script src="https://gist.github.com/benhowes/8060e9938becb7aa94453b4e86dbc19a.js?file=update_delta.py"></script>

In order to facilitate and track this, we need a simple wrapper class around our mongoengine documents to permit this:

<script src="https://gist.github.com/benhowes/8060e9938becb7aa94453b4e86dbc19a.js?file=update_interceptor.py"></script>

This really simple wrapper class will pull updates from a class variable `schema_updates` which are keyed on an integer value representing the schema version to upgrade to.

Putting this all together we end up with:

<script src="https://gist.github.com/benhowes/8060e9938becb7aa94453b4e86dbc19a.js?file=schema_with_update.py"></script>

Now, whenever a document is loaded that has a lower schema number, the simple transform will be applied and the application can use the document as if it's already been upgraded.

Here are a few key observations about the system:

1. In the example given, there will of course be a performance hit since we're loading another document in the upgrade delta - however this is a small price to pay for removing the downtime.
2. The upgrade may be performed several times if the updated document is not saved to disk - this is done so that upgrades do not cause excessive writes to disk.
3. If there are multiple pending updates, they will be applied sequentially on load
4. If there is a need to get the database in a consistent state, it's a simple case of loading and saving all the documents. In our case, we would query for the old schema version in a celery task and loop through loading and saving documents with a delay.
5. This system works even if we need to perform upgrades in dependencies of a document we're loading - we do have to be careful not to introduce loops however! Loops can be avoided by getting the DB consistent before applying a new update.

## And finally!
It's worth noting that we opted to make the transforms part of our application to keep the schema changes tightly coupled with the code base. There are other solutions out there, such as [Midas](https://github.com/EqualExperts/Midas) which allow for a very general purpose transform which is arguably a lot more powerful than the approach outlined in this post. The trade-off is very much one of complexity and we've opted to keep things as simple as possible.

We like this system because it allows dead simple implementation and 'on-demand consistency' when documents need to be used.
