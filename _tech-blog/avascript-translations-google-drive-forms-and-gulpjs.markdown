---
title: Javascript translations with google drive forms and gulp.js
author: richwebb
date: 2016-03-23 21:38:00 Z
tags:
- i18n
- javascript
---

We worked hard to keep the Zoetrope Engage™ Viewer (ZEV) embeddable widget as independent of language as possible. Most users find interacting with the widget very simple and require no help at all, however we wanted to ensure that it’s obvious that the image is interactive in words too. As a result, there are a grand total of 25 english words in 7 strings in the zoetrope viewer. Since some of our clients retail internationally, we needed a really simple solution to adding language variations to the Zoetrope Engage Viewer. There are a great many solutions for internationalizing applications, however we really wanted to strip this back to basics, which we will describe here.

### Representing Languages

Each language has a dictionary object like the following for English (which is also the default): To translate, we simply need to create a dictionary object for each language and key them on something useful.

### Calling in a favour

Between the zoetrope team, we know people who can speak 12 distinct languages - more than enough to get going! The easiest way to gather all this data was via a google docs form.

![](http://i.imgur.com/Ng2AdqV.png)

We then asked our contacts to take a look and fill out the form if they could, giving us a spread sheet keyed on the forms question titles.

### Building languages in

We use [gulp.js](http://gulpjs.com/) as the taskrunner for building the ZEV, so there was definite scope for fetching the data automatically. By making the response spreadsheet publicly readable, we are able to find its url (which is the url you get from going `File -> Download As -> CSV (current sheet)`. The following gulpfile deals with the rest for us: Which makes a file which defines langStrings as something like this: The dictionary can be used in the browser like this: The dictionary file is then combined with the other sources, uglified, gzipped and uploaded to the Zoetrope hosting, providing a really easy way to add more languages to the viewer!

### Conclusion

This is not currently being done as part of the default build process as we need to ensure the quality of the languages if there have been any changes made, but we are running the task when we know that languages need updating. By making a file which we check in to git, we are able to spot any changes in the languages in the dev branch before they get merged into production.
