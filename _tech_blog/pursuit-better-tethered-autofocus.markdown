---
title: In Pursuit of Better Tethered Autofocus
date: 2016-03-23 21:34:00 Z
---

Getting our images looking perfect is a huge priority at Zoetrope, and to help with this we developed a small utility providing a web interface to DSLR cameras. One issue we have is that using autofocus on our products is sometimes difficult - the small screens on cameras make it difficult to see clearly and since both the product and our camera are fixed, we need to be able to move the focus point. While this is possible on Canon DSLRs, the granularity is not always high enough for our application.

### Streaming images with mjpeg

Interfacing with DSLRs is fairly simple these days - the [libgphoto2](http://www.gphoto.org/proj/libgphoto2/) library supports a huge range of cameras and standardises the protocol for both Nikon and Canon cameras. Most of our stack is written in Python and this app is no exception. [RTIAcquire](https://github.com/jcupitt/rtiacquire) contains a nice set of python bindings for libgphoto2, so that’s what we used here. Getting an image from a camera is very easy: Pretty simple right? So creating an mjpeg stream that we can view in the browser shouldn’t be too tough. We used a simple mjpeg python [example](https://gist.github.com/n3wtron/4624820) as a base: That gives a nice (relatively low latency) view from the camera which we can easily incorporate into our existing web apps.

### Manual Focus

What we need now is a way to change the focus point of the camera programmatically. While this is physically possible on the camera, there’s no way to do it through libgphoto2. The RTLAcquire library doesn’t actually include any focus functionality however libgphoto2 supports a method of manually driving the focus motor. On Canon cameras, the ‘manualfocusdrive’ parameter allows you to drive the focus to a relative position.

This function can be repeatedly called with the corresponding list index for the desired focus point. There doesn’t seem to be any way to check if motor has completed an operation, so it’s prudent to add a delay between calls.

### Focusing Algorithms

Normally, autofocus on a DSLR is performed using phase detection sensors. These sensors cannot be used in liveview mode since the mirror is up. Contrast based autofocus is the standard method of focusing without phase detection - this is how smartphone cameras focus. Although slower, it does have one advantage in that the focus point can be precisely defined. We used a simple function to return a number based on the contrast of an image region (the focus point). This gives us an estimate of how well focused that section of the image is.

A graph of the values returned by this function as the focus point changes is shown below:

![](http://i.imgur.com/btt5yvM.png)

Adding a simple state machine, we can move from one end of the focus range to the other and estimate the focus for each frame. After finding the peak value in that range, we move around that point in smaller steps until the maximum peak is found. This should give us a well focused image. Here’s a quick video of the focus routine in action:

<iframe src="//player.vimeo.com/video/93068084" width="500" height="332" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>

You can see all the code [here](https://gist.github.com/bitdivision/11367287)

### Future Work

We will likely keep working on this over time and hope to release it back to the community. The current algorithm for focusing is not all that robust but will be improved soon. We’d also like to add a websockets interface allowing focus points to be changed and expose more of the camera’s functionality. We’ll update you when we can.
