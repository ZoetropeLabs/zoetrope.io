---
title: A Serial Communication Library for Arduinos
date: 2016-03-23 21:55:00 Z
featured: 'true'
author: richwebb
tags:
- arduino
- serial
- modbus
---

Recently, we’ve been working on a large internet connected machine. This involves quite a large amount of electronics to drive all it’s motors, actuators and sensors. In a recent upgrade we redesigned the electronics and ended up using a system distributed across multiple arduinos, necessitating a communication protocol which could be used on an RS-485 topology.

## <a id="Availbale_Arduino_Libraries_4"></a>Availbale Arduino Libraries

So what’s the best serial communication library available on the arduino?

To start with, there are already some libraries in existence, most notably modbus. Modbus is used in a lot of industrial electronics and is almost the de facto communication protocol in that environment. Unfortunately, the [modbus implementation](http://playground.arduino.cc/Code/ModbusMaster) on arduino is fairly complex and it’s not immediately obvious how to use it best (edit: the library has actually been refactored and now looks much cleaner). It’s very much written to interface with existing modbus equipment and not to build new devices.Obviously that would be the library of choice if we needed Modbus compatibility but given the freedom we had, there had to be a more modern, simpler option.

Perusing github shows relatively little in the way of arduino -> arduino communcation libraries, especially libraries tailored for RS-485 and hardened for reliability. [ICSC](https://github.com/MajenkoLibraries/ICSC) is one option and the packet format was the inspiration for our library, but it wasn’t quite what we wanted. So we decided to pull the best parts of a few libraries together and roll them into something slightly more user friendly and modern.

## <a id="The_SuperSerial_Library_12"></a>The SuperSerial Library

So, what kind of topology should be used? In our case, we had a very obvious master / slave layout: one arduino was connected to our server and would receive commands via the internet, all the other arduinos would be controlling some sensors and actuators and would need to run commands in parallel, responding to the master device when necessary.

![Block Diagram of Master Slave Architecture](http://i.imgur.com/rm4vDok.png "Architecture Block Diagram")

Now, the RS-485 chips we are using ([MAX 489](http://datasheets.maximintegrated.com/en/ds/MAX1487-MAX491.pdf)) operate with a RX / TX enable. The limitation is that two slaves cannot send data at exactly the same time, so a host or master based architecture is the most obvious mode of operation. The master polls each slave and won’t send another poll out until it receives a response or times out. For lengthy operations, this can happen repeatedly until the slave finishes the operation, and multiple slaves can be polled in quick succession to give the illusion of parallelism.

### <a id="Packet_Structure_19"></a>Packet Structure

<table class="“table" table-striped”="">

<tbody>

<tr>

<th>Field  
</th>

<th>Length</th>

</tr>

<tr>

<td>SOH (Start Of Header)  
</td>

<td>5  
</td>

</tr>

<tr>

<td>Destination Address  
</td>

<td>1</td>

</tr>

<tr>

<td>Sender Address  
</td>

<td>1</td>

</tr>

<tr>

<td>Command</td>

<td>1</td>

</tr>

<tr>

<td>Data Length in Bytes  
</td>

<td>1  
</td>

</tr>

<tr>

<td>Packet Type  
</td>

<td>1  
</td>

</tr>

<tr>

<td>STX (Start Text)  
</td>

<td>1</td>

</tr>

<tr>

<td>Data</td>

<td>X</td>

</tr>

<tr>

<td>ETX (End Text)  
</td>

<td>1</td>

</tr>

<tr>

<td>Checksum</td>

<td>1</td>

</tr>

<tr>

<td>EOT (End Of Transmission)  
</td>

<td>1</td>

</tr>

</tbody>

</table>

The table above shows the basic structure of packets. ASCII characters `SOH`, `STX`, `ETX` and `EOT` are used as packet / header / data delimiters. The structure is fairly generic and should allow for a variety of uses, the `type` field is currently used with the following options:

*   Command - Initiates an operation on a slave. Slaves should always respond with a response packet as soon as possible
*   Response - Acts as an ACK for a command, can include progress or data
*   Complete - When a command has completed, slaves should send this packet with any necessary data
*   Broadcast - Used to indicate a broadcast packet, slaves should _NOT_ respond to this packet
*   Ping - Utility type to initiate a ping/pong exchange
*   Pong - Utility type
*   None - Other

The checksum is currently fairly simplistic, it consists of the sum of all packet fields (excluding delimiters) mod 255.

### <a id="Hardware_83"></a>Hardware

We developed this library using an Arduino Leonardo. It is currently untested on Arduino Mega / Uno / Due etc. Porting it to these boards shouldn’t be much of an issue, if you happen to do so, please file a pull request on github!

The library assumes that you have a hardware serial port (untested with softwareserial) which is used as the RS485 bus, RE and DE (Receiver Enable / Driver Enable) are also configurable.

### <a id="Example_88"></a>Example

The best way to understand this library is probably through an example. Here’s a simple example where a master device echo’s all incoming characters on the Serial port onto the RS485 bus (Serial1). <script src="[https://gist.github.com/bitdivision/fc5d2732d27a1a276c6e.js](https://gist.github.com/bitdivision/fc5d2732d27a1a276c6e.js)"></script>

There’s a little boilerplate here since this code is used on both the master and thiiie slave but the communication is very simple: The master uses `send(...)` to push the packet over to the slave. The slave sits in a loop calling `process()` and when a packet is received, the callback fires, printing the character on it’s serial port.

##### <a id="Long_Running_processes_on_slaves_95"></a>Long Running processes on slaves

When a slave needs to perform an operation which may take some time (e.g moving an actuator to a specific position) multiple poll commands can be sent:

<script src="[https://gist.github.com/bitdivision/0f261d32c11000c93b9b.js](https://gist.github.com/bitdivision/0f261d32c11000c93b9b.js)"></script>

The first function `runSingleSlaveProcess()` sends a command to a slave by calling the `pollUntilComplete(...)` function. This function will block (and continually send packets) until a `COMMAND_COMPLETE` packet is received or it’s timeout is reached.

For multiple slaves, a different approach is used, `runMultipleSlaveProcesses()` will poll each slave in turn every 200ms until both slaves have responded with `COMMAND_COMPLETE` or the timeout criteria is reached. Responses are stored in `ACKResponse_t` structs.

This method allows the master to get status updates periodically from the slaves and act accordingly.

### <a id="Extras_107"></a>Extras

The library also contains an `error_stats` struct which holds the cumulative error statistics. If you have a bad link you’ll start to see bad_checksums ramping up. `printErrorStats()` and `printPacket()` can both be useful if you’re trying to diagnose issues on the line.

## <a id="Conclusion_110"></a>Conclusion

The library is currently fairly low level and it would of course be possible to wrap it into a more friendly library for your specific implementation, but the main pieces are there. Please let us know through github if you have any problems with the library or there are any missing features!

We currently have a few things on the todo list:

*   Automatic network enumeration (to discover slaves automatically),
*   A more friendly wrapper around poll for parallel operations
*   Device compatibility (We’ve only tested this on an Arduino Micro (Leonardo Architecture))
