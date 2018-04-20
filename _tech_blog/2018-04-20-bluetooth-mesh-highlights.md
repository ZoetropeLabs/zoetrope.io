---

title: Bluetooth Mesh - the Highlights
author: benhowes
header_background: /assets/img/tech-blog/ble-mesh-web.jpg

---

At Zoetrope labs, we're really excited about the potential that Bluetooth mesh offers and we've already started to use it on several projects.

In a nutshell - Bluetooth mesh expands on BLE (Bluetooth Low Energy) to allow each Bluetooth device to connect to more than one other Bluetooth device. With the meshing component, this also means that devices can forward data to other devices allowing for data to propagate over longer distances than a single connection can manage. It's worth noting that Bluetooth mesh **is not** inter-operable with BLE. At least not directly.

In this post we're going to look at some more of the highlights of this spec and why we're using Bluetooth Mesh at Zoetrope. Here goes:

## Relaying

Bluetooth mesh introduces a concept of optional roles, which allow devices on the network to perform additional functions based on their abilities. Crucially, this allows devices which are powered to be able to perform additional duties on the network, such as forwarding data to other devices.

Best of all, this means that regular functioning devices can also forward data to 'the hinterlands' of your network. For example, if we have a network of doors, each of those doors will be mains powered so we'd be happy for them to act as relay nodes to move data through the network.

![Relaying data with Bluetooth mesh relays](/assets/img/tech-blog/ble-mesh-relay-nodes.png)

In the example above, the distance between the gateway (to the internet) on the right and the door which we want to get data from are 100m apart, which is unlikely to be achieved in a single link indoors. However, if we happen have another door in between, this means we can forward data to the gateway with no additional infrastructure!

If you were to have a situation where there was not enough density of devices to forward all the data, the worst case is that some devices can be added purely to act as relay nodes. We expect that these will be off-the-shelf hardware before too long.

## Sleepy devices

A sleepy device is a power constrained device, normally powered by a coin cell or other battery which is intended to last for well over a year. Due to the small amount of power available the device needs to spend most of it's time using very little power. Unfortunately that means having the Bluetooth mesh connection turned off most of the time since that's a big drain on power. This may mean that for example a sleepy device has the radio turned off 99% of the time, but turns on occasionally to send and receive data.

In this situation, another optional role is to be a 'friend' to sleepy devices. A friend device is inherently not sleepy, since it needs to be able to capture all messages which are bound to the sleepy device.

The sleepy device can now poll it's 'friend' for messages which have been saved for it and it can catch up with all missed

## Simple gateways

In Thread/6lowpan/zigbee and some other more complex mesh networks, it's necessary to have a full IPv6 router, which generally requires one or more (normally) linux based edge nodes which means more powerful and expensive units to act as the gateways to the outside network.

With Bluetooth mesh, the key difference is that the internal network does not have routing as such, but relies on "flooding" to ensure that messages are delivered to the nodes which need to receive them. In a flooding mesh network messages are transmitted from an origin point, then re-transmitted by all the devices which receive that message. There are mechanisms to ensure that the same message does not get re-transmitted multiple times by the same device.

With this setup, there is no need to store routes to devices or have coordination from a central router. The trade off is that relay nodes have to transmit more data, which reduces the overall throughput of the network. In the vast majority of use-cases this will not be a problem.

In Zoetrope labs' current projects, we've opted to add GSM and Ethernet interfaces to a node on the mesh which acts as a bridge to our MQTT services. All of this can be powered from an ARM cortex M4 micro-controller in a very simple system compared to a full embedded linux machine.

## Add IoT to legacy devices
With the BLE mesh, it's possible to have some mesh devices act as proxy nodes, which connect to older BLE type devices - this means that it's possible to expose the data and control of BLE devices on a BLE mesh. As an example of this, a Bluetooth button, or some BLE scales can be connected to a Bluetooth mesh network in order to allow new uses of that existing hardware.

Bluetooth mesh uses a similar means of representing the state of the device as is available in BLE (the GATT profile), which simplifies the process of using a proxy node to expose it on the network.

We hope that this will allow better use of off-the-shelf hardware in Bluetooth mesh systems!

## Security
Bluetooth mesh introduces a great and scalable security model allowing users of Bluetooth mesh to set up networks which secure the traffic on their network, as well as allowing OEMs to secure their applications within that network. This is done through the use of network keys for securing the network and application keys for securing the application.

In addition to that model, each device has a device key to secure the provisioning process, however we'll get in to more detail about provisioning another time.

Finally, Bluetooth mesh protects against eavesdropping with encrypted headers and replay attacks with `SEQ` numbers.

# Conclusion
We're really enjoying using Bluetooth mesh so far on the Nordic NRF52 chips and we've got several new projects spec'd up to use Bluetooth mesh. We're connecting up devices to our ZConnect suite and the first products using this stack will be in the market later this year.

In many ways it's a shame that most of the publicly known Bluetooth Mesh examples are in the lighting space, because it has a lot of potential in non-lighting use cases. We will be able to publish case-studies about this in due course!

If you're looking to build a product with Bluetooth mesh, [get in touch](/contact)!

(Photo by michael podger on Unsplash)