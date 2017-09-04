---
title: WiFi Connected Button Streamlines online tasks
date: 2016-03-20 10:27:00 Z
header_background: "/assets/img/pages/smart-button.jpg"
---

Kazendi came to Zoetrope with a great product vision inspired by the need of one of their clients. The vision? A whole new way to interact with the web, making the web more physical than ever.

The product was to be a unit which would seamlessly perform a user configurable action on the web at the touch of a button.

Some of the initial use-case ideas included:

*   Adding items to a shopping list (like washing powder, or shampoo)
*   Setting IM status
*   Sending a notification to caretaker or hotel staff

### Zoetrope’s solution

Zoetrope quickly set about developing a proof of concept device, allowing us to see how people would react to the product and what other use cases could be found. In less than a day the following rather rough and ready (but importantly working!) proof-of-concept was up and running:



The guys at Kazendi loved the prototype and were keen to see what Zoetrope could do to further develop the project though to a more polished prototype product.

### Design Goals

The specification for the prototype was as follows:

*   A wifi-connected (b/g/n) button that can be easily configured via a user’s mobile phone.
*   As small as possible while still having a battery life of at least six months.
*   Rechargeable using a micro USB connection.
*   Feedback through LEDs when the button is pushed.
*   Really simple and broadly compatible set-up process.
*   Integration with Zapier to implement internet functionality.

Based on the proof-of-concept, we sketched out some ideas for a more polished product including a case, and after liaising with Kazendi decided on a hexagonal design with lights around the edges to provide feedback.

### Software and Hardware

Meeting the goal of six months battery life required careful design of both software and hardware to minimize quiescent power consumption. We used a Lithium polymer battery to minimize volume while providing a high power budget. Safety is paramount when designing Lithium cell based hardware and as such protection circuits were designed into the device.

The setup process was reduced to a very simple web-page based set-up. When the user first turns the button on, it creates a WiFi access point which the user can connect to through their smartphone. All they need to do is enter their wi-fi details and hit ‘go’, allowing the button to connect to their wi-fi network and start taking actions when the button is pressed.

### Integration

To configure the button, we integrated it with Zapier, giving users a huge range of apps to choose from and making the device as flexible as possible. We also worked with Kazendi to come up with a number of new use cases that could use to market the device including:

*   Sending a Yo! messsage
*   Setting timers and alarms
*   Setting home heating controls using Hive or Nest thermostats
*   Controlling your lighting using home automation such as Lifx
*   Ordering food through APIs like Dominos
*   Silencing all notifications for a set period of time.
*   Starting and stopping a time tracking system

In a few days we had designed the PCB for the electronics and sent off the CAD files for manufacture while also getting started on a 3D printed case.

### The Outcome

Zoetrope delivered a polished prototype ready for Kazendi to test the product with clients and market the idea to a wider audience. With our help they went from a rough idea to a fully functional product. We used rapid prototyping tools to keep costs to a minimum. Zoetrope will continue to work with Kazendi to further develop this prototype to be used with clients.


