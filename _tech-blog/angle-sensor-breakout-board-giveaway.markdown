---
title: Angle Sensor Breakout Board Giveaway
date: 2016-03-23 21:43:00 Z
author: richwebb
tags:
- AS5048A
- angle sensor
- electronics
- PCB
---

<h1>Giveaway!</h1>
<p>Edit: Thanks for all the comments, some brilliant ideas. If we could send one to everyone we would but unfortunately we only have three. We'll be sending them out soon.</p>
<p>We’ve recently made up a batch of the angle sensor boards described below, leave a comment if you’d like one of them. We’ll send a few populated boards to whoever has the best use for them. We’ll even include a magnet or two.</p>
<div class="zoetrope">
<img src="https://d34tuy4jppw3dn.cloudfront.net/544e1b24c24f285182562781/500/0.jpg" class="zoe-engage-image" data-zoe-site="51b909a4-f5d7-4627-9cad-cfeb69efc83a" data-zoe-image="544e1b24c24f285182562781" data-zoe-gallery-images="null" data-zoe-start-position="0" data-zoe-loadspin="true"><script>!function(z,o,e,t,r,o_,p,e_){var a=z.querySelector,f=(p==z.location.protocol?p:o_)+r;if(typeof a=="undefined")return;var l,c,j=z.getElementsByTagName(o)[0];if(!z.getElementById(t)){l=z.createElement(o);l.id=t;l.src=f+"/"+e_+"/js/zoe-widget.js";j.parentNode.insertBefore(l,j);c=z.createElement(e);c.rel="stylesheet";c.href=f+"/"+e_+"/css/zoetrope.jquery.min.css";j.parentNode.insertBefore(c,j)}}(document,"script","link","zoetrope-wjs","//s3-eu-west-1.amazonaws.com/zoetrope-alpha","http:","https:","v3")</script>
</div>
<h1>Introduction</h1>
<p>When dealing with motors or actuators it’s often useful to have some sort of rotational feedback. This is usually accomplished by mounting a rotary encoder on the motor, either an absolute or incremental encoder. We wanted a very accurate absolute encoder to use in our system and ended up with the <a href="http://www.ams.com/eng/Products/Position-Sensors/Magnetic-Rotary-Position-Sensors/AS5048A">AS5048 angle sensor</a>.</p>
<p>The AS5048 is a chip from Austria Microsystems (AMS) which can sense angular position using a magnet. This means that by mounting a small magnet on the end of a shaft it’s possible to get a precise measurement of the current shaft angle. Although AMS produces a range of these sensors, we’re currently using the version with 14-bit resolution giving an absolute accuracy of around 0.05 degrees!</p>
<p>Our library for interfacing with the SPI chip is available on our <a href="https://github.com/ZoetropeImaging/AS5048A-Arduino">github</a>.</p>
<h1>The Problem</h1>
<p>The chip is provided in a TSSOP package which needs to be mounted close to the magnet and aligned fairly carefully. To make this easier, we designed a break-out board that also includes some LEDs to allow for simpler alignment.</p>
<p>To avoid having to set up the control system (Arduino in our case) before mounting the sensor, there’s an ATTiny micro included on the board. When the switch is set to debug mode and power is applied, the AVR queries the angle sensor and checks error conditions, lighting the corresponding LEDs if the sensor is too close to the magnet, too far away from the magnet and if a magnetic field is detected. This allows you to position the sensor correctly without worrying about programming new firmware etc.</p>
<h1>The PCB</h1>
<p>The board also includes a header breaking out the chip’s SPI pins so the sensor can be used as a normal SPI sensor too.</p>
<p>After a couple of prototypes everything was working well so we sent the designs off to <a href="http://dirtypcbs.com/">dirty PCBs</a> in China. A few weeks later we received our boards and soldered a few together. It’s somewhat difficult to evaluate the quality of the boards with a black soldermask but they seem to all be fairly well produced. The silkscreen is a little hard to read in places but given the size of the text we can’t really complain. Here’s a photo of what we received from China:</p>
<p><a href="https://imgur.com/NKcUFlq.jpg"><img src="https://i.imgur.com/NKcUFlq.jpg" title="source: imgur.com"/></a>
They’re working nicely now! You can see an assembled version at the top.</p>
<p>The board is open source, kicad files are available on our <a href="https://github.com/ZoetropeImaging/as5048A-breakout-board">github</a> along with the arduino code being used on the ATtiny44. There is a jumper on the board to select a 3.3V supply, this won’t be populated on the boards we send out so remember to throw a 0 Ohm resistor in there if you’re using 3.3V. The schematic is shown below:
<a href="https://i.imgur.com/RPOL0LE.png"><img src="https://i.imgur.com/RPOL0LE.png" title="source: imgur.com"/></a></p>
<h1>Conclusion</h1>
<p>The PCB is very handy when aligning your sensors and is useful purely as a breakout board if your sensor can't be directly next to your microcontroller. Hopefully others will find them as useful as us!</p>
<h1>Download</h1>
<ul>
<li><a href="https://github.com/ZoetropeImaging/as5048A-breakout-board">Breakout Board Kicad Files and Firmware</a></li>
<li><a href="https://github.com/ZoetropeImaging/AS5048A-Arduino">AS5048A Arduino SPI Library</a>.</li>
</ul>
