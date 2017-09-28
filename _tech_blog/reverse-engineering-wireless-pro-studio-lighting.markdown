---
title: Reverse Engineering Wireless Pro Studio Lighting
date: 2016-03-23 21:41:00 Z
tags:
- Flashes
- Reverse Engineering
- SPI
author: richwebb
---

### Introduction

At Zoetrope we always want to make sure our photos look as good as possible, this means ensuring the lighting is perfect for every shot. We currently use a number of [Lencarta UltraPro 300](http://www.lencarta.com/ultrapro-300-compact-flash-head_99) studio strobes to light our photos but in some cases, the power of the flashes needs to be adjusted on the fly to improve the lighting on a particular object. Fortunately, there's a wireless remote which works with our flashes to adjust their power (amongst other things). Since we try to automate as much as possible, we decided to see if we could reverse engineer the remote and control the flashes from our hardware.

The remote allows a number of parameters to be adjusted, and individual flash heads can be adjusted by setting the ID and Group to match those displayed on the head itself. You can see the display of the remote here:

![Image showing the remote's display](https://i.imgur.com/n7bmlpM.jpg "The display used on the Remote")

### The Radio

First thing's first. Let's have a look at what chip they're using to communicate (ignore the extra wires for now).

<div class="zoetrope">![](http://d34tuy4jppw3dn.cloudfront.net/542bc7f0c24f2874f0dd52a7/500/0.jpg)<script>!function(z,o,e,t,r,o_,p,e_){var a=z.querySelector,f=(p==z.location.protocol?p:o_)+r;if(typeof a=="undefined")return;var l,c,j=z.getElementsByTagName(o)[0];if(!z.getElementById(t)){l=z.createElement(o);l.id=t;l.src=f+"/"+e_+"/js/zoe-widget.js";j.parentNode.insertBefore(l,j);c=z.createElement(e);c.rel="stylesheet";c.href=f+"/"+e_+"/css/zoetrope.jquery.min.css";j.parentNode.insertBefore(c,j)}}(document,"script","link","zoetrope-wjs","//s3-eu-west-1.amazonaws.com/zoetrope-alpha","http:","https:","v3")</script></div>

The chip surrounded by passives sprouting a PCB antenna turned out to be the famous nRF24L01+. Luckily I happened to pick up a few of these from China some time ago while browsing cheap electronics on eBay. Thinking I could just hook one up and listen to the remote promiscuously, I flipped through the datasheet only to find that these chips are addressed using a 40 bit address and can only listen to 6 addresses at a time. That's 183251937963 (at most) button pushes to find the correct address. Not particularly practical. On top of that the chip can work on any one of 128 channels! A different approach was needed.

### SPI Protocol

The nRF24L01+ communicates with it's master via an SPI bus. This consists of 4 pins: Chip Select (CSn), Clock (CLK), MISO (Master In Slave Out), and MOSI (Master Out Slave In). I needed to find the address and channel being used to send packets to the flashes, with that information I could easily listen to the transmissions through another nRF24L01+. Given that the chip has no memory, the microcontroller in the remote must send the address and channel over the SPI bus, which we can listen to using some sort of logic analyser. In this case I used the [Open Bench Logic Sniffer](http://dangerousprototypes.com/docs/Open_Bench_Logic_Sniffer) and soldered some wires onto the microcontroller's SPI pins. Sniffing the bus at 5MHz and triggering on CSn I obtained a capture showing quite a few packets being sent to the nRF24L01+ on startup. Analysing this capture with [Open Logic Sniffer](http://dangerousprototypes.com/open-logic-sniffer/) I obtained the following (truncated for clarity, full capture available [here](https://dl.dropboxusercontent.com/u/8513299/Startup_SPI_Capture.pdf)):

<table class="table table-striped">

<tbody>

<tr>

<th>Time</th>

<th>MOSI (Hex)</th>

<th>MOSI (Binary)</th>

<th>MISO (Hex)</th>

<th>MISO (Binary)</th>

</tr>

<tr>

<td>1.40 μs</td>

<td>0x30</td>

<td>0b00110000</td>

<td>0x1c</td>

<td>0b00011100</td>

</tr>

<tr>

<td>12.00 μs</td>

<td>0x01</td>

<td>0b00000001</td>

<td>0x00</td>

<td>0b00000000</td>

</tr>

<tr>

<td>22.80 μs</td>

<td>0x22</td>

<td>0b00100010</td>

<td>0x00</td>

<td>0b00000000</td>

</tr>

<tr>

<td>33.60 μs</td>

<td>0x33</td>

<td>0b00110011</td>

<td>0x00</td>

<td>0b00000000</td>

</tr>

<tr>

<td>44.20 μs</td>

<td>0x44</td>

<td>0b01000100</td>

<td>0x00</td>

<td>0b00000000</td>

</tr>

<tr>

<td>55.00 μs</td>

<td>0x55</td>

<td>0b01010101</td>

<td>0x00</td>

<td>0b00000000</td>

</tr>

<tr>

<td>65.40 μs</td>

<td>0x25</td>

<td>0b00100101</td>

<td>0x1c</td>

<td>0b00011100</td>

</tr>

<tr>

<td>74.40 μs</td>

<td>0x26</td>

<td>0b00100110</td>

<td>0x00</td>

<td>0b00000000</td>

</tr>

</tbody>

</table>

### Analysing The Protocol

If you've never looked at SPI before this might seem somewhat confusing but really it's fairly simple. The green shaded row marks the boundary between packets, where the CSn line was pulled high. Each other row represents one byte of data, sent from the microcontroller to the radio (MOSI) or from the radio to the microcontroller (MISO). We're mostly interested in MOSI since that's where the address and channel will be found. Taking a look at the data sheet, there's a table of commands which correspond to the first byte in every SPI packet. The two most relevant commands are 0b000XXXXX (read register) and 0b001XXXXX (write register).

Looking at the first packet we can see it is writing to register 0b10000 (0x10) which corresponds to the TX address register. So the rest of the packet will be the address the remote is transmitting to, least significant byte first, in this case 0x5544332200\. The next packet is also a write command, this time to register 0b00101 (0x5), the channel. So we now know that the remote is transmitting to address 0x5544332200 on channel 0x26.

Going back to my Arduino I hooked up the radio on a breakout board and wrote a short piece of code to listen on the specified channel and address using the handy [RF24 library](https://github.com/TMRh20/RF24):

Unfortunately, nothing came through when I started pressing buttons on the remote. Assuming there was something else being done to setup the radio which I hadn't seen, I went back to the packet capture. I found a few more important registers being written to. I won't go through their registers (you can view the whole capture [here](https://dl.dropboxusercontent.com/u/8513299/Startup_SPI_Capture.pdf)) but in summary, the chip is using the Enhanced Shockburst™ functionality to enable auto acknowledgment and retransmission. It also sets the payload size to 10 bytes and the data rate to 250Kbps. At first I didn't realise that setting payload size and auto acknowledgment were necessary to receive the packet but it turns out that the radio will filter packets that it puts in the FIFO based on these parameters.

Be aware that the nRF24L01+ breakout boards may not be perfect. I struggled with one board which wouldn't receive anything for some time before realising it was the fault of the board. Also the power supply should be carefully decoupled. Using the Arduino's 3.3V supply directly gave me very intermittent results.

Setting the above parameters in my arduino sketch still didn't show any packets when the remote was used. As it turns out, the address was being changed before any packets were actually transmitted hence I never received any on the original address. The nRF24L01+ has a CE pin which is used to determine when the chip should transmit a packet. Triggering on this pin gave me a payload to be transmitted but didn't show the actual address it was transmitting on.

The remote has an ID setting on it which allows you to address different strobes individually. By modifying this value and sniffing the SPI bus again I found the actual address being used to send packets. 0x5544332201 for ID 1, 0x5544332202 for ID 2 and so on. With this address, the arduino finally started capturing some packets. The rest of the process was a simple matter of pressing each of the buttons on the remote and recording the transmitted payload until I had the protocol worked out. Here's the code I used to listen to the packets:

Obviously the above code will work only for a single ID and group (channel) set on the flash head, the difference however is fairly simple. The radio's channel is the group + 0x23 and the address, as noted above, is the ID + 0x5544332200.

### Commands

The commands are structured as follows: Each payload consists of 10 bytes. All functions of the remote (except loading all settings) can be acheived using only the 2 least significant bytes. Byte 0 is the command and byte 1 is the parameter (if any). The following table shows the commands and their parameters:

<table class="table table-striped">

<tbody>

<tr>

<th>Command</th>

<th>Byte 10 (LSb)</th>

<th>Byte 9</th>

</tr>

<tr>

<td>Fire Flash</td>

<td>0x01</td>

<td>N/A</td>

</tr>

<tr>

<td>Flash Power</td>

<td>0x06</td>

<td>Power (0x0 to 0x32)</td>

</tr>

<tr>

<td>Lamp State</td>

<td>0x07</td>

<td>0x0 (Off), 0x1 (Dim), 0x2 (On), 0x3 (On with set power)</td>

</tr>

<tr>

<td>Lamp Power</td>

<td>0x08</td>

<td>Power (0x0 to 0x32)</td>

</tr>

<tr>

<td>Sound</td>

<td>0x09</td>

<td>0x0 (Off), 0x1 (On)</td>

</tr>

<tr>

<td>Optical Slave</td>

<td>0x0A</td>

<td>0x0 (Off), 0x1 (On)</td>

</tr>

</tbody>

</table>

### Arduino Library

After testing these commands I wrapped them in a library. This wraps the RF24 [library](https://github.com/TMRh20/RF24) with some simple methods to address flashes. The following gist shows an example of setting some parameters on a flash and firing the bulb:

You can find our library on [github](https://github.com/ZoetropeImaging/Lencarta-Ultrapro-Arduino).

### Conclusion

We'll be using this library to setup our flashes automatically for different lighting scenarios. Hopefully it will also be of use to anyone else using Lencarta Ultrapros or messing around with nRF24L01+ radios.
