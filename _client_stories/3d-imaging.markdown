---
title: Interactive 3D Imaging for Ecommerce
date: 2017-03-24 17:52:00 Z
header_background: "/assets/img/pages/zoetrope_twitter_header.png"
---

Product photography on ecommerce websites is often not what it could be - product images are too small and not consistent accross different product ranges on the same website. A lot of this owes to ecommerce stores use of manufacturer supplied images. This in turn is caused in part by the up-front cost of ecommerce stores generating their own imagery and in part due to time pressures experienced by ecommerce operators.

Zoetrope has worked with Magpie to create an automated 3D photography solution which generates 3D images as a service (reducing time pressures) and at a low cost.

This customer story is about what we did to create our 3D photography system with Magpie.

## Solution

Zoetrope designed and developed a full-stack IoT solution for the capture, processing, uploading and display of the images. The solution needed to minimise the amount of human input required to generate interactive 3D images throughout the processes.

![Zoetrope photography IoT system diagram](https://i.imgur.com/hDwFct7.png)

### The hardware

The core of our solution is a giant, 3m tall photography rig, custom designed in house. it comprises of 3 DSLR cameras, a network of electronics to control the cameras positions and zooms and several studio flashes.

**Frame/Rig**
The entire frame is custom designed and constructed from a combination of aluminium extrusion and laser cut brackets.

![Zoetrope machine CAD model](https://i.imgur.com/JjDZ2ix.png)

**Control**
All functions of the rig are controled by a host computer over USB. There are 5 microprocessors on the machine which have a basic serial network linking them up. We’ve open sourced the code for this as “super serial”, see the bottom of the page.

**Flashes**
We [reverse engineered the flash wireless protocols](https://zoetrope.io/tech-blog/reverse-engineering-wireless-pro-studio-lighting) in order to be able to configure our cameras from the main software. As a result we’re able to set up the flashes for different item types, for example light items can be washed out by bright flashes, however darker items appear black with the same settings.

**Cameras**
All the SLR’s have a micro processor and some actuators which allow control of the zoom, focus and the direction the camera points.

**Studio set up**
The frame and the flashes form a room sized set up, which is completed with a white studio background (covering most of the floor too) and white drapes which help to diffuse and more evenly light items placed in the rig.

### The Software

Our whole system is internet connected - it’s controlled over a web interface and automatically processes and uploads all the image data.

**Control panel**
The control pannel is intended to be used on a computer or portable device near the photography machine. It allows adding new items to the pipeline of items to process, as well as editing existing items and manually performing tweaks to the image processing when required. The control panel is also where we perform a quality check on all the images before they’re uploaded to the web for customer proofing.

For quicker importing, we are able to import a manifest excel file provided by our clients which means we can automatically populate the SKU. We’ve experimentally supported barcode scanner integration too.

**Image Processing**
All items are automatically cropped, background removed (to white) and centered so that the middle remains in the middle when one rotates a Zoetrope image. This part is the most procesing intense and we built a job scheduling system which allows us to use a small cluster of servers to speed up this process.

**Image Uploading**
After internal QA, images are uploaded to Amazon S3 and synced with the imaging website, which allows access for clients to log in and review images they’ve recieved for issues. When approved clients are able to edit details about the images, download any of the 108 frames, or get a code snippet to embed.

![Zoetrope machine CAD model](https://i.imgur.com/SZ4zRcN.png)

**Image Display**
We’ve created a standalone/jQuery plugin module which is a responsive image viewer for Zoetrope images in pure HTML/JS. This open source code forms about the most complete 3D image viewer available with smoothing, inertia, zoom and responsive resizing. See the footer for a link to the code.

**Ecommerce Integration**
Zoetrope created modules for the Magento and Drupal Commerce ecommerce platforms. These modules allow for automatic syncing of images (based on SKU) saving ecommerce store owners copy-pasting time

## Outcome

Zoetrope’s optimised end-to-end solution allows for 100 items to be photographed in full 3D per 8 hour day with 2 people - an extremely high throughput. There are virtually no barriers to using the machine - anyone can use it. We’ve been running this as a service for ecommerce stores for around a year now.

Zoetrope has helped Magpie Jewellers experiment with photographing items for several clients, including [Rex International’s dotcomgiftshop](http://www.dotcomgiftshop.com/rusty-fox-jumbo-storage-bag) and [Rexel stationary](http://www.rexeleurope.com/en/gb/6494/rexel-auto-80x-360).

![kurt geiger double 45](https://d34tuy4jppw3dn.cloudfront.net/54ec686bc24f2808b14e4c27/500/0.jpg)<script>!function(z,o,e,t,r,o_,p,e_){var a=z.querySelector,f=(p==z.location.protocol?p:o_)+r;if(typeof a=="undefined")return;var l,c,j=z.getElementsByTagName(o)[0];if(!z.getElementById(t)){l=z.createElement(o);l.id=t;l.src=f+"/"+e_+"/js/zoe-widget.js";j.parentNode.insertBefore(l,j);c=z.createElement(e);c.rel="stylesheet";c.href=f+"/"+e_+"/css/zoetrope.jquery.min.css";j.parentNode.insertBefore(c,j)}}(document,"script","link","zoetrope-wjs","//s3-eu-west-1.amazonaws.com/zoetrope-alpha","http:","https:","v3")</script>

The photography system has been spun out in to its own business - Zoetrope-imaging, which is currently exploring new pastures, such as generating high quality assets for games. See [https://zoetrope-imaging.co.uk](https://zoetrope-imaging.co.uk).

## Open Source Code

Zoetrope is glad to have been able to release a good portion of the code for this project as open source code.

*   [jQuery image viewer](https://github.com/ZoetropeLabs/zoetrope-jquery)
*   [Drupal module](https://github.com/ZoetropeLabs/zoetrope_drupal)
*   [Studio flash control](https://github.com/ZoetropeLabs/Lencarta-Ultrapro-Arduino)
*   [Super Serial Arudiuno library](https://github.com/ZoetropeLabs/Arduino-SuperSerial)
*   [Magento module](https://github.com/ZoetropeLabs/zoetrope_magento)
