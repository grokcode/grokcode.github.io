---
id: 167
title: Building a Ubuntu Box
date: 2009-04-27T20:25:51+00:00
author: Jess Johnson
excerpt: "I've been in need of new workstation for a while, and finally plunked down the cash for it.  I built  a mid range workstation and installed the latest long term release of Ubuntu (Hardy Heron) 64 bit."
layout: post
guid: http://grok-code.com/?p=167
permalink: /167/building-a-ubuntu-box/
wp_jd_bitly:
  - http://bit.ly/9OQnC6
wp_jd_target:
  - http://grok-code.com/grokcode-dev/167/building-a-ubuntu-box/
jd_tweet_this:
  - 
categories:
  - 'Books &amp; Tools'
tags:
  - computer
  - hardware
  - install
  - ubuntu
---
I&#8217;ve been in need of new workstation for a while, and finally plunked down the cash for it. I built a mid range workstation and installed the latest long term release of Ubuntu (Hardy Heron) 64 bit. The install was remarkably painless, and all of the hardware was auto-magically detected and works great in Ubuntu. Hardware support is much improved in the recent Ubuntu releases, but if you are looking for a rock solid build that just works with Ubuntu, give these specs a try.<!--more-->

<img class="size-full wp-image-322" title="ubuntu-screenshot" src="{{ site.baseimgurl }}ubuntu-screenshot.png" alt="Ubuntu Desktop" width="600" height="375" />

Specs:

  * [Intel Extreme Series DX48BT2 Motherboard](http://www.amazon.com/gp/product/B0016JVOLS?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B0016JVOLS "Intel Motherboard")
  * [Intel Core 2 Quad 2.33GHz 1333MHz Processor](http://www.amazon.com/gp/product/B001DEYRDI?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B001DEYRDI "Intel processor")
  * 4 x [Kingston 2GB 1333MHz DDR3 RAM](http://www.amazon.com/gp/product/B001LP4YW8?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B001LP4YW8 "Kingston 2GB RAM")
  * [XFX Nvidia GeForce 8500GT Graphics Card](http://www.amazon.com/gp/product/B00166Z5QG?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B00166Z5QG "Graphics Card")
  * [LG SATA 24X DVDRW](http://www.amazon.com/gp/product/B002WZAC4K?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B002WZAC4K)
  * [Seagate 320GB SATA 7200RPM Hard Drive](http://www.amazon.com/gp/product/B00272NHP4?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B00272NHP4)
  * [Foxconn Mid Tower Black case](http://www.amazon.com/gp/product/B00381ER3O?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B00381ER3O "Foxconn Black Case")
  * [AOC 22&#8243; 2216Sw LCD Monitor](http://www.amazon.com/gp/product/B000YQA0Q4?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B000YQA0Q4 "AOC Monitor")

Plus some other things I had laying around:

  * NEC 19&#8243; Monitor
  * XTech USB Keyboard
  * Genius USB Mouse
  * Logitech USB Speakers

## The Workstation

All in all a very nice workstation, and I finally have more than enough RAM to run NetBeans and Firefox simultaneously! I&#8217;m extremely happy with the new system &#8211; the box is amazingly more responsive than the last one I had.

The DVD drive can sound a bit like a small airplane taking off, and it would be nice if the monitor had a steadier base on it. (I have an older version of the base than the one shown in the link, hopefully this has been fixed in the new models.) These are both small quibbles though.

An SSD drive would have been ideal, but I decided to wait on that until the price comes down for the larger drives.

## Installing Ubuntu

Installing 64 bit Ubuntu 8.0.4.1 (Hardy Heron) was pleasantly surprising because of how smoothly everything went. For the last few years I have shied away from installing Linux myself due to nightmares of failed X configs and kernel recompilation blowups with deadlines looming, when I desperately needed a system that would just allow me to _get to work_. This semi-irrational fear of installing Linux along with a decreasing desire to tinker with my OS instead of doing &#8220;real work&#8221; did have its upside though &#8211; I was able to give some business to the great folks at [Pogo Linux](http://www.pogolinux.com/ "Pogo Linux").

Linux&#8217;s ease of installation has progressed dramatically since then. Obviously a sample size of one isn&#8217;t very telling, but the above system just works™ with Ubuntu. After getting a stable Linux install, everything pretty much continues to plug away just fine until the hardware fails. The whole problem is getting that stable install in the first place.

Straight out of the box, Ubuntu recognized and configured all of my hardware. If you are looking to build your own Ubuntu box, the above configuration worked beautifully for me. Granted, the speakers didn&#8217;t work with all applications &#8211; some apps insisted on using the built in sound card. Thanks to some PulseAudio tutorials, that&#8217;s sorted out now except for a few lingering issues. I also need to take some time to get Firefox&#8217;s flash support working, which is apparently a bit dicey on 64 bit. Besides those two issues, the install was remarkably easy, and I&#8217;m busy hacking away.

Much thanks go out to the Ubuntu folks who made the install process so quick and painless.
