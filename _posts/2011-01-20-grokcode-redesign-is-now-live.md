---
id: 667
title: 'Meta: The Anatomy of the GrokCode Redesign'
date: 2011-01-20T16:57:00+00:00
author: Jess Johnson
layout: post
guid: http://grokcode.com/dev/?p=667
permalink: /667/grokcode-redesign-is-now-live/
categories:
  - Extras
tags:
  - CSS3
  - grokcode
  - HTML5
  - redesign
---
The grokcode.com redesign is now live. GrokCode is built on WordPress, and uses a custom theme. It is valid HTML5 and CSS3. Here is a quick overview of what&#8217;s new, what&#8217;s changed, and what&#8217;s still broken. Also a few notes on browser and operating system compatibility.<!--more-->

This is the third design since GrokCode went live in 2007. Unfortunately I don&#8217;t have a screenshot of the first design, but it was ugly enough that perhaps it is better off forgotten.

<img class="alignleft wp-image-682" src="http://grokcode.com/wordpress/wp-content/uploads/grokcode1.png" alt="GrokCode before" width="340px" height="180px" /><img class="wp-image-681" src="http://grokcode.com/wordpress/wp-content/uploads/grokcode2.png" alt="GrokCode after" width="340px" height="180px" />

## What&#8217;s different?

There are quite a few changes, but they all tie back to 3 main goals: keep the emphasis on the articles, include more information for prospective clients, and try not to be so ugly.

### Emphasize the articles

The programming and software development articles are the heart of GrokCode, and I wanted that to be obvious. The article pages are now less cluttered and there are fewer distractions.

GrokCode has never been ad-heavy, and the new design further reduces the number of ads. Many pages are add-free, and there is never more than one ad per page. If you would like to support the continued creation of new articles, you can buy yourself a few [computer science and programming books](http://grokcode.com/11/the-top-9-in-a-hackers-bookshelf/) (or anything else) from [Amazon](http://www.amazon.com/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.com%2F&tag=grok-20&linkCode=ur2&camp=1789&creative=390957).

Other tweaks to improve readability and keep the layout neat include cleaning up the sidebar, moving comments to their own page, and switching to a fixed-width layout.

### Meet new clients

The old design had virtually no information for prospective clients. There was a portfolio of work, but no information about how I work, what I do, and nothing to even really suggest that I am taking new projects. The new design remedies this with new information on [working with me](http://grokcode.com/hire/), a better [about page](http://grokcode.com/about/), and an [updated portfolio](http://grokcode.com/programmer-portfolio/). The idea is to make this info accessible and obvious, but not in-your-face.

### Don&#8217;t be ugly

Even though I am not a designer or a frontend developer, I do all of the GrokCode designs myself from scratch to get a peek into how the other half lives. I was aiming for a beautiful, minimalist, and a slightly retro look, and I spent quite a bit of time reading and learning about logo design, color selection, typography, copy writing, etc. In the end I&#8217;m satisfied that it&#8217;s not ugly.

Design critiques are welcome in the comments.

## What&#8217;s broken?

The switch went off without too many problems. Other than a problem with the feeds, all of the remaining issues that I am aware of are all &#8220;won&#8217;t fixes&#8221; or &#8220;can&#8217;t fixes.&#8221;

### Feeds

The only lingering issue that I have on my list to fix is that the feeds aren&#8217;t working quite right yet. If you are subscribed to the feed via RSS or email, you probably saw that a bunch of old articles were marked as new and resent. You may also be seeing an excerpted feed. Sorry about that. If you haven&#8217;t yet subscribed to the feed, you can [subscribe here](http://grokcode.com/feed/); things will be back to normal shortly.

### Details

A few of the details are &#8220;broken by design,&#8221; which is to say that some of the nice extras degrade gracefully on older browsers and some browsers don&#8217;t properly render valid HTML5. Since this is a personal site, I have the luxury of saying that I don&#8217;t care too much if things are a little wonky on browsers that don&#8217;t comply with standards.

<img class="alignleft size-full wp-image-686" title="firefox" src="http://grokcode.com/wordpress/wp-content/uploads/firefox.png" alt="" width="180" height="139" /><img class="alignleft size-full wp-image-689" title="ie" src="http://grokcode.com/wordpress/wp-content/uploads/ie.png" alt="" width="180" height="139" />If you are one of the 17% of GrokCode visitors using an outdated or non-standards compliant browser (\*cough\* IE) things just won&#8217;t look as nice. Have a look at Firefox 3.5 vs. IE 8.

The retro style is a bit spoiled by the boxy links, and the some of the finer details like rounded corners and transparency are lost.

### Fonts

Again, the fonts aren&#8217;t exactly broken, but some people will have a better experience than others.

<img class="alignleft size-full wp-image-687" title="font-ubuntu" src="http://grokcode.com/wordpress/wp-content/uploads/font-ubuntu.png" alt="" width="180" height="280" /><img class="alignleft size-full wp-image-688" title="font-windowsxp" src="http://grokcode.com/wordpress/wp-content/uploads/font-windowsxp.png" alt="" width="180" height="280" />If you are one of the 32% of GrokCode readers on Windows XP, the fonts will be rendered poorly. This isn&#8217;t just a problem with GrokCode or web pages in general &#8211; Windows XP is just bad at fonts. I had no idea that the problem was this bad until doing cross-browser testing, and I used to use XP quite often. I had to modify the original design so that it would be readable on XP (I believe Vista and 7 are better).

Have a look at the side by side of Ubuntu and Windows XP. You are looking at the difference between aliased and anti-aliased text.

Other than that, I think everything is working fine. If you see anything strange or something doesn&#8217;t seem to be working, please let me know via comments or [email](mailto:jess@grokcode.com). Friendly advice and constructive criticism on the redesign are also welcome.