---
title: Really simple MQTT IoT logging with Keen IO
date: 2016-03-23 21:49:00 Z
featured: 'true'
---

<script src="//cdn.jsdelivr.net/keen.js/3.2.6/keen.min.js" type="text/javascript"></script>
<script>
			var client = new Keen({
				projectId: "55a91de259949a3c75dc9c0e",       // String (required)
				readKey: "c55740186956f7f34c32326b6d57a3cfcd2718ddcf03de684ffe9c138236f35b8b2ccaf0ac8af8550f3d28cd19afd6be5622112743c6f64c5f233e14caf4e3c7600e2f3534969ab1ca85a1ec86dcfd247e29227a7cddb049a5f9761d4ca3c59445d9d728f798e13d6f850df23104575c",   // String (required for querying data)
				protocol: "https",                  // String (optional: https | http | auto)
				host: "api.keen.io/3.0",            // String (optional)
				requestType: "jsonp"                // String (optional: jsonp, xhr, beacon)
			});
			Keen.ready(function(){
				var temp = new Keen.Query("average", {
				  eventCollection: "temperatureSensor",
				  targetProperty: "sensor_value",
				  timeframe: "this_1_day",
				  interval: "minutely"
				});
				client.draw(temp, document.getElementById("bristol-temp-24"), {
				  chartType: "linechart",
				  title: "Bristol Temperature (24 Hours)"
				});
var average = new Keen.Query("average", {
    eventCollection: "temperatureSensor",
    targetProperty: "sensor_value",
    timezone: "UTC"
  });
  
  client.draw(average, document.getElementById("bristol-average"), {
    // Custom configuration here
title:"Bristol Average temperature"
  });
			});
</script>

_We’ve [blogged about Keen IO](https://zoetrope.io/tech-blog/replaying-user-interactions-keen-io-data) before, and love using MQTT in our IoT projects. So we decided to combine the two!_

### Announcing KeenMQTT.

MQTT is perfect for distributing and acting on near realtime data, but there isn’t much in the way of historical data access. That’s where [KeenIO](http://keen.io) comes in.

We've recently created and open sourced a library/CLI app which we're calling `KeenMQTT`

### Architecture

Imagine you have a bunch of temperature sensors that are used in an existing system to control your home heating. A good approach to networking those sensors would be MQTT. Each sensor posts to a particular topic and the boiler controller subscribes to those topics.

Now, you’d probably want a dashboard, and it’s easy enough to get the current temperature data via MQTT: just subscribe to the temperature topics using your client library of choice. But what about historical temperatures? For that we need some kind of data storage. KeenIO is a nice choice with easy data analysis APIs and fancy looking graphs.

So the overall system would look something like this:

![Keen MQTT System](https://i.imgur.com/jZkL9mq.png)

To hook up the MQTT server, the KeenMQTT adapter needs to subscribe to some relevant topics and map those onto a KeenIO collection. You can do this through the `config.yaml` file e.g.

    collection_mappings:    ‘temperature/+’ : temperature

### Live Example

To give you an idea of how this works in practice we’ve hooked up a temperature sensor to our MQTT broker.

Here is a graph of temperature over the last 24 hours. This is pulled directly from KeenIO, using their visualisations library to display it as a line graph

<script>
    client.draw(temp, document.getElementById("bristol-temp-24"), {
      chartType: "linechart",
      title: "Bristol Temperature (24 Hours)"
    });
</script>
<div id="bristol-temp-24" style="min-height: 400px"></div>
<pre><code><span class="hljs-attribute">client</span>.<span class="hljs-function">draw</span>(temp, document.<span class="hljs-function">getElementById</span>(<span class="hljs-string">"bristol-temp-24"</span>), {
  <span class="hljs-attribute">chartType</span>: <span class="hljs-string">"linechart"</span>,
  <span class="hljs-attribute">title</span>: <span class="hljs-string">"Bristol Temperature (24 Hours)"</span>
});
</code></pre>

And here's the computed average temperature in Bristol from our data points:

<div id="bristol-average" style="min-height: 200px"></div>
### Using the adapter

The adapter is extremely extensible and customisable. The [code](https://github.com/ZoetropeLabs/keenmqtt) is well documented on [Read The Docs](http://keenmqtt.readthedocs.org/en/latest/keenmqtt.html#module-keenmqtt.keenmqtt) and there is a [pypi module](https://pypi.python.org/pypi/keenmqtt/0.0.9) available. Payloads can be customised very easily and the package can be run standalone from the command line or through python.

### Conclusion

[KeenMQTT](https://github.com/ZoetropeLabs/keenmqtt) should be useful for anyone who wants to get up and running with an IoT application using MQTT. Often you don't want or need the complexity of a full fledged IoT platform, and this can help bridge that gap.

We hope you find it useful, and we'd love to hear about it if you find an interesting application for it.

At Zoetrope we use MQTT a lot in our internet of things development, do get in touch to find out more about our consulting services.
