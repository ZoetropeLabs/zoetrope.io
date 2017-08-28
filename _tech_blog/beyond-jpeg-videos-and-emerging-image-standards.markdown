---
title: 'Beyond JPEG: Videos and emerging image standards'
date: 2016-03-23 21:40:00 Z
tags:
- API
- webp
- x264
- video
---

We’ve recently been investigating file formats to allow our animated 3D product photography to be optimised for different use cases, rather than just on the web. Currently our viewer loads 108 JPEGs of various sizes depending on the user's device. In some situations, a javascript environment may not be available so we wanted to investigate alternative options.

We’ve done an analysis of some popular formats which may be better suited to different applications.

We’re really keen to hear prospective clients thoughts on this, please leave a comment if you want to see any other formats included or have an interesting use case you’d like to talk about.

### Formats

GIF is the first format that springs to mind, but unfortunately, file sizes are huge for 36 frame images. While compression can be performed prior to GIF encoding, the format itself isn’t wonderful for a few other reasons. GIF doesn’t commonly allow for keyframes which makes seeking something of a problem in large images, and colour support is poor compared to modern formats.

[Animated WebP](https://developers.google.com/speed/webp/) is Google’s take on the problems inherent in GIF, the format does seem to offer a lot of advantages including 24-bit colour and 8-bit alpha along with real keyframe support allowing for good seeking performance.

We also looked at x264 and [Google’s WebM](http://www.webmproject.org/) video formats.

### Encoding:

All our examples were generated from 108 frames at both 500x500px and 1000x1000px resolutions. Encoding commands were as follows:

The WebM encoding settings were chosen to roughly replicate the quality of lossy x264.

### Results:

<table class="table table-rounded table-striped">

<tbody>

<tr>

<th>108 JPEG</th>

<th>GIF</th>

<th>WebP Lossless</th>

<th>WebP Lossy</th>

<th>x264 Lossy</th>

<th>x264 Lossless</th>

<th>WebM</th>

</tr>

<tr>

<td>500px</td>

<td>2.3M</td>

<td>7.6M</td>

<td>6.5M</td>

<td>1.1M</td>

<td>1.1M</td>

<td>5.2M</td>

<td>1.4M</td>

</tr>

<tr>

<td>1000px</td>

<td>6.8M</td>

<td>27.8M</td>

<td>26M</td>

<td>3.3M</td>

<td>3.6M</td>

<td>17.2M</td>

<td>2.4M</td>

</tr>

</tbody>

</table>

In both cases, GIF lost by a fair margin in terms of filesize, likely due to the simplistic compression scheme used (LZW). WebP is clearly a better format for lossless animations, with a reduction in filesize of 19% compared to GIF. GIF also uses a limited colour palette (256 colours) so colour reproduction will be better in WebP.

x264 also performed fairly well, even with minimal tweaking of encoding settings. There is very little visual difference between x264 and lossless WebP although the filesize of x264 was smaller than WebP.

Comparing lossy encodings, WebP and x264 were both roughly similar in filesize, giving around an 88% reduction compared to GIF. Interestingly, WebM was larger for the 500px version and smaller for 1000px.

Here are a few links to the output files if you’d like to compare. WebP versions are currently only supported by Chrome and Opera.

### Analysis:

To compare these formats, a reasonably objective scoring system is employed.

Scored on:

1.  Browser/device support: +1 per platform supported out of Android, iOS, Chrome, Firefox and IE. 10 points for universal support.

2.  Perceived Quality 0 - 5, relative to original JPEGs.

3.  File size +/- 5, relative to original JPEGs.

4.  Decoding performance, +/- 5 (approximate) relative to original JPEGs. These were analysed using ffmpeg decoders.

<table class="table table-rounded table-striped">

<tbody>

<tr>

<th>108 JPEG</th>

<th>GIF</th>

<th>WebP Lossless</th>

<th>WebP Lossy</th>

<th>x264 Lossy</th>

<th>x264 Near Lossless</th>

<th>WebM</th>

</tr>

<tr>

<td>Browser Support</td>

<td>10</td>

<td>10</td>

<td>2</td>

<td>2</td>

<td>10</td>

<td>10</td>

<td>3</td>

</tr>

<tr>

<td>Perceived Quality</td>

<td>5</td>

<td>4</td>

<td>5</td>

<td>4</td>

<td>4</td>

<td>5</td>

<td>4</td>

</tr>

<tr>

<td>File Size</td>

<td>5</td>

<td>0</td>

<td>1</td>

<td>6</td>

<td>6</td>

<td>2</td>

<td>6</td>

</tr>

<tr>

<td>Decoding</td>

<td>5</td>

<td>4</td>

<td>3*</td>

<td>2*</td>

<td>4</td>

<td>0</td>

<td>4</td>

</tr>

<tr>

<td>Score</td>

<td>25</td>

<td>18</td>

<td>11</td>

<td>14</td>

<td>24</td>

<td>17</td>

<td>17</td>

</tr>

</tbody>

</table>

_* Calculated using statistics from [Google](https://developers.google.com/speed/webp/faq#why_should_i_use_animated_webp) since ffmpeg’s WebP decoder doesn’t support animation._

Lossy x264 came out very well in this analysis, mainly due to universal support and small files of good quality. One other advantage is that x264 commonly enjoys hardware support on mobile platforms making decoding much faster.

At present we’re going to be sticking with JPEG since it forms a good balance between all measures whilst maintaining the critical universal browser compatibility which few of the others enjoy. Despite this, there are cases such as use in apps or producing video renders where it would be very useful to access the content in a more compressed format.

### Coming Soon:

We’ll be rolling out some of these encoding schemes for Zoetrope Images in the near future, giving our customers a great choice of formats to use wherever they need. All of this and more will be available via our image API. We’re working on a very flexible platform to support all your 3D and 2D imaging websites and apps. If this is of interest to you, our developers mailing list signup form is below the comments.
