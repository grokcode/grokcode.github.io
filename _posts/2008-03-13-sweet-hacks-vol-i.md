---
id: 14
title: 'Sweet Hacks &#8211; Vol I'
date: 2008-03-13T21:00:26+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/14/sweet-hacks-vol-i/
permalink: /14/sweet-hacks-vol-i/
wp_jd_bitly:
  - http://bit.ly/d69sTa
wp_jd_target:
  - http://grok-code.com/grokcode-dev/14/sweet-hacks-vol-i/
jd_tweet_this:
  - 
categories:
  - Sweet Hacks
tags:
  - development
  - Sweet Hacks
---
A sweet hack can be a clever piece of code, an innovative way of solving a technical problem, or just a cool use of technology. I put together a list of 5 hacks that I think are really sweet.

I am making Sweet Hacks a regular series here at GrokCode, turning it into a blog carnival that runs every three months. If you would like to nominate your own sweet hack for the next issue, send an email to jess [AT] grokcode.com with a short description of the hack and a link. Or if you are a del.icio.us user, tag the page &#8220;for:grokcode&#8221; to put it into my &#8220;links for you section.&#8221;<!--more-->

  1. Shamus Young shows us how to create random cartoon-like faces in PHP. It works by using the GD library to fill an image with a random hue for the background, then randomly chooses and inserts a face shape, eyes, mouth, and other facial features into the image. Here is the [full description of the image creation process](http://www.shamusyoung.com/twentysidedtale/?p=1463 "image creation process"). The resulting images are used to create avatars used in the WordPress Wavatars plugin.
  2. Next up is [codepad](http://codepad.org/ "codepad") by Steven Hazel which allows you to paste code in 10 different languages including C, Perl, Ruby, and Scheme. Codepad then compiles and executes your code under ptrace in a chroot jail inside a virtual machine. Steven also describes how he was able to scale codepad after a 1000x increase in traffic on his blog [hackerdashery](http://www.hackerdashery.com/2008/03/scaling-at-2am-with-ec2.html "hackerdashery").
  3. Simon Willison shows us how to combine semantically marked html with the jQuery JavaScript library and Google Maps to create one of those new-fangled web 2.0 mashups. Have a look at his [great code walkthough](http://24ways.org/2007/unobtrusively-mapping-microformats-with-jquery "code walkthrough") to view the results &#8211; a map of restaurants in Brighton.
  4. Ever had to hack something together that ran faster than grep? James Hicks has. And he lived to tell about it on his blog [isnerd.net](http://isnerd.net/2008/02/26/faster-than-grep/ "isnerd.net"). James uses some interesting properties of the data he is matching to write a lighting fast matching program in C.
  5. Last up is a shameless plug for my [Joke Generator written in Common Lisp](http://grokcode.com/12/how-to-write-original-jokes-or-have-a-computer-do-it-for-you/ "Common Lisp joke generator"). You seed it with a vocabulary and it tries to use this knowledge to create jokes of the form &#8220;What do you get when you cross X with Y.&#8221; Hilarity ensues! Although sometimes its more the &#8220;What?!?&#8221; kind of hilarity than the ha ha kind.

Well thats it for this installment of Sweet Hacks. Don&#8217;t forget to let me know about your own hacks.
