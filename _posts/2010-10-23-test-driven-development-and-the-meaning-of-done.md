---
id: 439
title: Test Driven Development and the Meaning of Done
date: 2010-10-23T23:17:24+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/?p=439
permalink: /439/test-driven-development-and-the-meaning-of-done/
jd_tweet_this:
  - 
categories:
  - 'Tips &amp; Tutorials'
tags:
  - Coders at Work
  - no silver bullet
  - TDD
  - Test Driven Development
---
There is quite a bit of disagreement on how Test Driven Development affects development speed and code quality. As with any programming methodology, the success of TDD depends on many variables, but research suggests that the most critical factor in the success of TDD projects is the definition of done. Case studies of projects developed at IBM and Microsoft bring a bit of empirical evidence to a debate that has been dominated mainly by anecdotes and opinion.<!--more-->

Just a quick refresher, TDD looks like this:

  1. Create a test
  2. Run all tests, making sure the new test fails
  3. Write the minimum amount of code to make the test pass
  4. Run all of the tests to ensure they pass
  5. Refactor the code, making sure that the tests still pass
  6. Repeat for each new code module being developed

TDD has strong supporters and detractors. At one extreme, agile consultants like Robert Martin (Uncle Bob) fiercely advocate a TDD process in all cases, asserting that unit testing saves time during development. On the other side, grey beards like Knuth talk about using a large up front design process with absolutely no testing until the end of a project. These are the outliers though &#8211; not many of us make our living as an Agile consultant and author, nor are we writing [the definitive text on Computer Science](http://grokcode.com/484/knuths-taocp-vol-4a-now-available-for-preorder/).

[<img class="alignleft size-full wp-image-451" title="Coders At Work" src="{{ site.baseimgurl }}codersatwork1.jpg" alt="Coders At Work" width="166" height="240" />](http://www.amazon.com/gp/product/1430219483?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1430219483 "Coders At Work")Peter Seibel used excepts of his book, [Coders at Work](http://www.amazon.com/gp/product/1430219483?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1430219483 "Coders At Work"), to put together a nice [synopsis of both sides of the TDD debate](http://gigamonkeys.com/blog/2009/10/05/coders-unit-testing.html). The central criticism of TDD is that it slows developers down, while TDD proponents claim that unit testing does not slow a project down, and that in cases TDD actually speeds things up. So who is right here?

[Research done by IBM and Microsoft](http://research.microsoft.com/en-us/projects/esm/nagappan_tdd.pdf "TDD Research") indicates that TDD teams took 15-35% longer than teams using more traditional development practices. However, the bug density of projects developed using TDD decreased 40-90% relative to similar projects that did not practice TDD. There is nothing here to support the claim that Test Driven Development is faster, but the study leaves an important question unanswered.

If we control for defect rate, is TDD faster? Could the non-TDD teams have produced code with a similar defect rate if they had used as much development time as the TDD teams? I would be willing to bet that they could. So why didn&#8217;t the non-TDD teams take more time in order to reduce their defect rate? Why did they declare the project done and ship with so many outstanding bugs?

The IBM-Microsoft research used case studies of real projects developed in a professional setting. Accordingly, these projects experienced the same schedule pressures and race-to-the-finish bug fixing sessions that professional programmers are all too familiar with. TDD developers iterate rapidly between test and code. Since testing is such an integral part of the development methodology, they are unlikely to skimp on test coverage even when deadlines loom. However non-TDD teams are more likely to back load testing, which allows them to met unrealistic deadlines by sacrificing testing time. Anecdotal evidence certainly supports this scenario.

> There’s bound to be stuff where this would have gone faster if we’d had unit tests or smaller modules or whatever. That all sounds great in principle. Given a leisurely development pace, that’s certainly the way to go. But when you’re looking at, “We’ve got to go from zero to done in six weeks,” well, I can’t do that unless I cut something out. And what I’m going to cut out is the stuff that’s not absolutely critical. And unit tests are not critical.<cite>-Jamie Zawinski in <a href="http://www.amazon.com/gp/product/1430219483?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1430219483">Coders at Work</a></cite>

Shunting the testing phase off until the end of a project makes it particularly vulnerable to schedule pressure, because the code is in some sense done when all of the features have been implemented. Even though the code is buggy, there is in fact a shippable product. It may be very tempting to just ship it, especially if the project has already experienced scheduling delays. In contrast, the same application developed with TDD won&#8217;t be nearly as vulnerable to schedule pressure because the test-up-front methodology delays the point where there is a shippable product.

So perhaps the most valuable effect of TDD is just a side effect of upfront unit testing: it relieves schedule pressure and allows teams to delay the point at which code can be called done.
