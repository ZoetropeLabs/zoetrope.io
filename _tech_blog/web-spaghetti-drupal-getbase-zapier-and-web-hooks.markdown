---
title: Web spaghetti - @drupal, @getbase, @zapier and web hooks
date: 2016-03-23 21:43:00 Z
tags:
- automation
---

At Zoetrope, we keep very close ties between engineering and sales (we're still all in the same room after all!). As part of this we attempt to reduce the number of copy-paste type tasks.

On the Zoetrope homepage you may have seen this Demo registration form:

![Homepage demo form](https://i.imgur.com/20AgEUW.png)

This form pings off a message to a special room on Slack (Die email, die!!) and optionally adds the person to the mailchimp mailing list. Mailchimp has an excellent module for drupal, so we were able to hook into that with no complications.

### CRM Integration

We recently switched to [Base CRM](https://getbase.com/) which exposes an API which they've very kindly integrated with [Zapier](https://zapier.com/). At first it seemed that the lack of a drupal module was going to make integrating a pain, until we found Zapiers webhooks!

At it's most simple, all you need to do is HTTP POST a JSON object from Drupal to a Zapier generated url, like this:

We then got it set up in Zapier:

![Zapier reaction creation](https://i.imgur.com/GH94sEo.png)

The really cool part is that with a simple test hook POST, Zapier works out all the keys in the object, such as `name` and `email` like this:

![Zapier field detection](http://i.imgur.com/pAGSuK3.png)

Zapier then prompts you to test that setup by performing the task with the test data and that's it, you're done!

### Work smart

There's nothing here which couldn't have been done with just the basic API, however this has taken what would've been a day long task of getting authentication sorted out, a basic API wrapper and all the normal teething problems and turned it into a 20 minute task.

The only downside is that we use a single `name` field on the website, whereas the Base new lead action wanted first and last name. We opted to just put the whole name in the last name field for now and we can update them if we turn those leads into customers.

We've made the 'Zap' public as a template to get you started:

I've often been left feeling like actions in Zapier are rather underpowered, but this one has really saved me a lot of time and hence won me over!
