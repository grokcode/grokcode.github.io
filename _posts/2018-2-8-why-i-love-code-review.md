---
title: I ❤ Code Review
author: Jess Johnson
layout: post
img: busfactor1.png
description: >
  Code review has the proven benefit of reducing bugs, but there are so many more reasons to love code review. It is also a great way to improve code clarity, avoid the "hit by a bus" problem, learn new things, and solidify the team.
categories:
  - 'Tips &amp; Tutorials'
---

Code review has the proven benefit of reducing bugs, but there are so many more reasons to love code review. It is also a great way to improve code clarity, avoid the "hit by a bus" problem, learn new things, and solidify the team.<!-- more -->


## Find bugs

Catching bugs early is probably the most talked about benefit of code review. The sooner bugs are found, the easier, faster, and cheaper it is to fix them. So the best place to catch bugs is in automated testing, and the next best place is during code review while the code is likely still fresh in your mind. Once defects move into staging or production and are caught by QA or real users, chances are you have long since moved on to developing something else and have to task switch back in and refresh your memory on how that particular area of the code works.

There are a lot of statistics out there on the effectiveness of code review for detecting bugs. Here's what Steve McConnell says in  [Code Complete](http://amzn.to/2BhlCCf).

> The average defect detection rate is only 25 percent for unit testing, 35 percent for function testing, and 45 percent for integration testing. In contrast, the average effectiveness of design and code inspections are 55 and 60 percent.

Squashing bugs is important, but code review can do a lot more than that.


## Improve clarity

<img class="alignleft" src="{{ absolute_url }}{{ site.baseimgurl }}miracle.jpg" alt="Encourage comments during code review"/>

Code review can do a lot to improve the clarity and general quality of the codebase. Sometimes code is unnecessarily complex and another set of eyes will see a way to simplify it. Other times the code resists all attempts at complexity reduction. If the reviewer is having trouble understanding it and complexity can't be reduced, it is probably a sign that there should be more comments.

Another way clarity can be improved during code review is by communicating and enforcing coding standards. Most of these issues can be caught before the code review stage by using a linter as part of an automated test suite. This can catch a lot of different issues like misuse of whitespace, unused imports, malformed variables names, excessive line length, etc, but other coding standards are harder check for in an automated way.

![Enforce code style during code review]({{ "/assets/img/code-review-style.png" | absolute_url }})

## Increase the "bus factor"

The "bus factor" is the minimum number of team members that have to suddenly disappear from a project before the project stalls due to lack of knowledge.

Having one person own a particular part of the codebase can be problematic if they aren't available to help with modifications or bugfixes. Code review improves the bus factor because more team members have the opportunity to put eyes on each part of the code, ask questions, and think through how everything works during code review.

![Bus factor]({{ "/assets/img/busfactor1.png" | absolute_url }})

<p class="img-attr" markdown='1'>Image attribution: [Adam Prescott](https://adamprescott.net/)</p>

## Learn new things

I've learned *tons* of new things by having my code reviewed by other developers. Getting specific feedback or seeing examples of better ways to organize code, increase performance, or simplify logic is helpful when honing your craft.

There is research showing that having someone critique your work is a valuable tool when working to become an expert. Anders Ericsson, a researcher who studies expert performance in all kinds of different domains, writes about the importance having someone who "understands and can demonstrate the proper way to perform various skills" and "who can provide useful feedback". [Peak: Secrets from the New Science of Expertise](http://amzn.to/2C6vwmR) is full of Ericsson's research-backed insight into becoming an expert.

On the flip side, It's OK to stretch the definition of "review" so that reviewers can learn too.

> ### re·view
> 1. a formal assessment or examination of something with the possibility or intention of instituting change if necessary.

Not every part of the review needs to be suggesting a change; asking questions is a good thing. Oftentimes the best way to learn is to ask. It could be general questions about the codebase, asking for more info on a particular library or tool, clarifying the need for a particular approach, or anything else.

With the philosophy that no question is out of bounds when giving a code review, it is easier to spread knowledge around and level up everybody's skills. It also has the awesome side-effect of making code reviews less confrontational and more collaborative.


![Share knowledge during code review]({{ "/assets/img/code-review-share-knowledge.png" | absolute_url }})


## Praise the awesome

Code reviews are a great venue for showing appreciation for all of your awesome team members. Super elegant solution? Refactor that removed a whole bunch of cruft? Particularly gnarly bug squashed? Perfect test coverage? Code review is a great place to share the love with a shoutout or a sprinkling of emojis that show how you feel about a changeset.

![Give credit during a code review]({{ "/assets/img/code-review-praise.png" | absolute_url }})

## Reviews for everyone, everywhere

With the widespread availability of excellent code review tools, there is really no reason *not* to do them. For people already using GitHub, pull requests are an easy, lightweight way to incorporate code reviews into the development process. But there are plenty of other tools out there that work with different types of source control.

Review everything, it's worth it. ❤

