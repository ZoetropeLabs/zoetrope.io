---
title: A Brief, but Practical Introduction to the MQTT Protocol and its Application
  to IoT
date: 2016-03-23 21:47:00 Z
featured: 'true'
author: richwebb
tags:
- MQTT
---

MQTT is a [standardised](https://www.oasis-open.org/news/announcements/mqtt-version-3-1-1-becomes-an-oasis-standard) publish/subscribe messaging protocol. It was designed in 1999 for use on satellites and as such is very light-weight with low bandwidth requirements making it ideal for M2M or IoT applications. As such, it has become one of the most common protocols for those situations.

What follows is a brief introduction to the protocol and some examples of its use. It is not intended to be a comprehensive reference on MQTT, but it should give enough information to get developers up and running. If you’re looking for a more complete discussion of the protocol, HiveMQ have published a series of articles available [here](http://www.hivemq.com/mqtt-essentials-wrap-up/).

### Publish / Subscribe

The publish / subscribe (often called pub-sub) pattern lies at the heart of MQTT. It’s based around a message broker, with other nodes arranged around the broker in a star topology. This is a very different model to the standard client/server approach, and at first it might seem a little strange, but the decoupling it provides is a huge advantage in many situations.

Clients can publish or subscribe to particular _topics_ which are somewhat like message subjects. They are used by the broker to decide who will receive a message. Topics in MQTT have a particular syntax. They are arranged in a hierarchy using the slash character (/) as a separator, much like the path in a URL. So a temperature sensor in your kitchen might publish to a topic like ‘sensors/temperature/home/kitchen’.

Let’s look at an example: Imagine a weather service which has a network of internet connected temperature sensors all over the world. All of these sensors maintain a connection to a broker and every ten minutes, they report the current temperature. They publish to a particular topic based on their location in the following format:

    sensors/temperature/{country}/{city}/{street name}

So a sensor on Baker Street in London would publish to ‘sensors/temperature/uk/london/baker_street’ with a message containing the current temperature.

![Example MQTT topology](http://i.imgur.com/ytrBtqe.png “Example MQTT Topology”)

The weather service wants to keep an up to date database of historical temperatures so it creates a database service which can subscribe to an MQTT topic. The database service will then be notified when a new temperature is received. There is a problem here though, the database service needs to know about all temperature sensors around the world and it would be a huge pain to subscribe to individual topics for every sensor. Luckily MQTT has a solution: wildcards.

### Wildcards

There are two wildcard characters which can be used in MQTT, **+** and **#**. **+** matches any topics on a single hierarchical level, and **#** matches any number of levels. So the global temperature database might subscribe to _sensors/temperature/#_ and it would receive temperature readings from every sensor in the world. If however the UK government wanted to use the data for their own weather service, they could just subscribe to _sensors/temperature/uk/#_, thereby limiting the sensor readings to those within the UK. And if a service wanted to get data from all sensor types in a particular location, it could use something like this: _sensors/+/uk/london/baker_street_.

As you can see, this is a wonderfully modular system. Adding new sensors and databases is a simple matter. It’s also very performant. MQTT brokers can be highly parallelized and event-driven making a single broker easily scaleable to tens of thousands of messages per second.

### QoS

MQTT is designed to work well on unreliable networks and as such provides three levels of Quality of Service for different situations. These allow clients to specify the reliability they desire.

#### QoS Level 0:

The simplest level of QoS, it requires no acknowledgment from the client and the reliability will be the same as that of the underlying network layer, TCP/IP.

#### QoS Level 1:

This ensures that the message is delivered to the client at least once, but it could be delivered more than once. It relies on the client sending an ACK packet when it receives a packet. This is commonly used for guaranteed delivery however developers must make sure that their systems can handle duplicate packets.

#### QoS Level 2:

This is the least common QoS, and ensures that a message is delivered once and only once. This method requires an exchange of four packets, and will decrease performance of the broker. This level is also often left out of MQTT implementations due to its relative complexity. Make sure you check this before choosing a library or broker. ![QoS Levels in MQTT](http://i.imgur.com/7sC1vzn.png)

### Last Will and Testament

The protocol provides a method for detecting when clients close their connections improperly by using keep-alive packets. So when a client runs out of battery, crashes or it’s network goes down, the broker can take action.

Clients can send a Last Will and Testament (LWT) message to the broker at any point. When the broker detects the client has gone offline (without closing their connection), it will send out the saved LWT message on a specified topic, thus letting other clients know that a node has gone offline unexpectedly.

### Security

Security for MQTT (and IoT devices in general) is a fairly big topic, one which we’ll be writing about further in the future, but for now, there are two main security features, authentication and encryption.

Authentication is provided by sending a username and password with the MQTT connect packet. Almost all brokers and client implementations will support this however it is vulnerable to interception. To avoid this, TLS should be used if possible.

The protocol itself provides no encryption functionality but since MQTT runs on top of TCP, we can fairly easily use TLS and thus provide an encrypted connection. This does however increase the computational complexity of sending and receiving messages, which can be a problem on constrained systems and will also impact broker performance. We’ll be writing more about this particular problem later on.

### Broker Software

There are a number of different broker implementations available. I’ll list the most popular systems here:

*   [Mosquitto](http://mosquitto.org/) - One of the earliest production ready brokers, Mosquitto is written in C and offers high performance with a lot of configurability.
*   [Mosca](https://github.com/mcollina/mosca) - Written in Node.js, this can be embedded in a Node application or run as a standalone executable. This is our favourite broker due to its easy configuration and extensibility. Its also very performant.
*   [RSMB](https://www.ibm.com/developerworks/community/groups/service/html/communityview?communityUuid=d5bedadd-e46f-4c97-af89-22d65ffee070) - IBM’s implementation of the MQTT protocol. This is one of the less popular options but is a mature system, written in C.
*   [HiveMQ](http://www.hivemq.com/) - HiveMQ is a relatively new player, and is oriented towards enterprise environments. They have a lot of great information about MQTT on their [blog](http://www.hivemq.com/blog/).

### Client Libraries

Client libraries are available in almost all popular languages now. The [Paho project](https://eclipse.org/paho/) is your best resource here. Part of Eclipse, this project aims to provide reference implementations of MQTT clients in as many languages as possible. It is a great resource, with clients available for C, Java, Python, Javascript and many more.

### Conclusion

MQTT is a fantastic protocol and its applications to IoT and M2M communications are endless. If you’re looking for a very lightweight messaging system, it’s a great choice and is likely to become very popular over the next few years. Hopefully this article will be enough to get you up and running.

At Zoetrope we use MQTT a lot in our internet of things development, do get in touch to find out more about our consulting services.
