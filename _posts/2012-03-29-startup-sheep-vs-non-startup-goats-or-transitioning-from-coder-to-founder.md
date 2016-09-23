---
id: 741
title: Startup Sheep Vs. Non-Startup Goats (Or Transitioning From Coder to Founder)
date: 2012-03-29T12:23:32+00:00
author: Jess Johnson
layout: post
description: >
  Turning a weekend project into a product isn't easy. A story of sheep, goats, launch paralysis, failure, and successes.
permalink: /741/startup-sheep-vs-non-startup-goats-or-transitioning-from-coder-to-founder/
categories:
  - Career
tags:
  - coder
  - founder
  - launching
  - programmer
  - startups
---
There is some [famous research](http://www.eis.mdx.ac.uk/research/PhDArea/saeed/), by Saeed Dehnadi and Richard Bornat, about &#8220;programming sheep and non-programming goats.&#8221; The gist is that educators find that there are two populations of students, those who can program, and those who can&#8217;t. Each population has it&#8217;s own independent bell curve. This &#8220;double hump&#8221; persists despite variations in programming language, application type, IDE, and student motivation.<!--more-->

So, there are natural born programmers. And there are natural born non-programmers.

Most natural born programmers notice this at some point (consciously or not), but often the conclusion they draw from it is overly general. Coders who can code may naively expect to found startups that, ermm, start. Or they may expect to be naturally good at other things that are only tangentially related to coding.

Lets take the example of a founder working on a software startup. Our founder is a programmer, at the top end of the programming bell curve. He is a really smart guy, he has done some reading on startups, but he hasn&#8217;t launched anything before, and he is entirely unaware that he has developed a severe case of [shit&#8217;s easy syndrome](http://steve-yegge.blogspot.com/2009_04_01_archive.html) regarding the non-programming tasks that need to get done before launch.

As programmers, we learn to be [obsesively paranoid with our requirements analysis, timelines, and code](http://grokcode.com/722/be-a-paranoid-pessimistic-programmer/) otherwise the project will run off the rails. But we don&#8217;t apply that same rigor for business tasks, because well, that shit&#8217;s easy, right?

## Turning a project into a product &#8211; that shit&#8217;s not easy

Packaging a programming project into a product that can be sold is a complex process. Assuming that the programming side is a beautiful finely-tuned instrument ticking along perfectly, there are still a behemothic number of things that need to be done to get it into the hands of paying customers, and each decision that needs to be made opens up into a fractally expanding rabbit hole leading to an infinite number of other decisions.

It starts off innocently enough: OK I need a website to sell this thing. How about a site with a free theme plus some marketing copy explaining the product tied into a simple shopping cart so customers can buy the product.

Which quickly turns into: How about a site with a free theme (which themes are optimized for SEO, which are optimized for conversions, how about some A/B testing, hey why is my site full of spam[1](#footnote_0_741 " Why you should never search for free WordPress themes "){#identifier_0_741.footnote-link.footnote-identifier-link} &#8230;) plus some marketing copy explaining the product (what kind of copy sells, OK &#8220;benefits&#8221; are better than &#8220;features&#8221;, but now what are the product&#8217;s benefits&#8230;) tied into a simple shopping cart (secure digital delivery, payment processing, cart software, should I write some of this myself, will this stack work with an affiliate program&#8230;) so customers (who exactly are my customers, what &#8220;tribe&#8221; are they in, how do I find them, should I try advertising, where&#8230;) can buy the product. And spirals out of control from there.

It&#8217;s becoming obvious how &#8220;hello world hooked up to a random number generator&#8221; requires a super-smart, full-time guy doing the business tasks.[2](#footnote_1_741 "This is in reference to Patrick McKenzie&lsquo;s Bingo Card Creator software, which is technically pretty unsophisticated itself, but is supported by complex mechanisms for A/B testing, scalable content generation, conversion tracking, and various other types of optimization."){#identifier_1_741.footnote-link.footnote-identifier-link}

Meanwhile, all of the startup guru expert guys are in my head screaming, &#8220;JUST LAUNCH! Iterate later,&#8221; but at this point I have lost all sense of what is absolutely necessary to prevent everything from blowing up in my face, what will just make me look stupid if it breaks, and what I can launch without and add later.

This launch paralysis is a problem for startups on down to micro-startups and coders that are just trying to make a bit of side money off of a weekend project. Programmers are probably more susceptible to launch paralysis because we are used to just naturally &#8216;getting it&#8217; (remember, we have our own bell curve), and when confronted with mushy tasks like research or copywriting that don&#8217;t require the rigor of programming, we tend to fall into the shit&#8217;s easy trap.

## A Tiny Example

My idea was to launch a weekend project, and use the experience to identify problems and iron out glitches in my workflow before tackling something bigger. I uncovered more than just glitches. Everything took drastically longer than expected, and some things I didn&#8217;t plan for at all. 

<img src="{{ site.baseimgurl }}time-to-launch-actual-vs-estimated.png" alt="Time to Launch: Planned vs. Actual" width="615" height="375" class="aligncenter size-full wp-image-743" />

The graph above is data from a tiny project that makes some head-smackingly simple changes to Amazon links so that WordPress blogs earn worldwide commissions instead of just US commissions. I assumed it would be easy to sell since the purchase is so easy to justify &#8211; once a blog has a certain threshold of earnings from amazon.com, the plugin is pretty much guaranteed to pay for itself. If you are interested, <del datetime="2014-07-31T16:34:08+00:00">click here to see how the plugin increases earnings</del>. Now defunct.

This wasn&#8217;t a startup. Calling it a micro-startup would be generous. It&#8217;s a WordPress plugin. We&#8217;re talking 700 lines of code, tops. But it still took 5 months to launch it. I was only working on it part time, but still, the number of hours spent getting ready to launch such a simple project is staggering.

Much of that time was spent researching different tools, not actually integrating them. Luckily, most of that knowledge will transfer to future projects. Now I have a standard toolchain that handles design, digital delivery, payment processing, A/B testing, etc. I will be able to put this type of site together much faster in the future.

## So, it finally launched. Sheep or goat?

Sales so far have been lower than expected, and certainly less than spectacular. At times it feels a lot like a big goat failure. But there are still some sheep to be found. After [stepping back for a bit of perspective](http://www.jasonshen.com/2011/getting-your-groove-back/), I remember that this little failure created some big wins. First, all of that research gave me a standard toolchain for launching mini software startups ([see my toolchain here](http://grokcode.com/732/launch-faster-the-tools-to-do-it-without-looking-like-a-fool/)). Next time things will move much faster. Second, even though the plugin hasn&#8217;t earned much through sales, having it installed on my own sites has given a nice bump to passive income.

The launch isn&#8217;t really the end of the story. After launch comes a whole new rabbit hole of customer acquisition and iterating the product. It&#8217;s a bit too early to make a success or failure call. Everyone says that an overnight success takes years.

**Edit:** This project now defunct. I still use the plugin on my own sites where it has increased earnings a fair amount, but the support and website maintenance overhead associated with selling the plugin to others was not worth my time.

<ol class="footnotes">
  <li id="footnote_0_741" class="footnote">
    <a href="http://wpmu.org/why-you-should-never-search-for-free-wordpress-themes-in-google-or-anywhere-else/">Why you should never search for free WordPress themes</a> [<a href="#identifier_0_741" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_1_741" class="footnote">
    This is in reference to <a href="http://www.kalzumeus.com/">Patrick McKenzie</a>&#8216;s Bingo Card Creator software, which is technically pretty unsophisticated itself, but is supported by complex mechanisms for A/B testing, scalable content generation, conversion tracking, and various other types of optimization. [<a href="#identifier_1_741" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
</ol>
