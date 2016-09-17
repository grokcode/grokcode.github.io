---
id: 722
title: Be a Paranoid Pessimistic Programmer
date: 2011-11-22T06:04:34+00:00
author: Jess Johnson
layout: post
description: >
  Cultivating a healthy paranoia and a heavily pessimistic attitude is the path to becoming a better programmer, because those traits prevent bugs.
permalink: /722/be-a-paranoid-pessimistic-programmer/
categories:
  - Career
tags:
  - best practices
  - paranoia
  - pessimism
  - programmer
  - programming
  - programming advice
  - the pragmatic programmer
---
We aren&#8217;t copy writers or social media experts; we&#8217;re programmers. We need to constantly foresee and prevent problems before they happen. Cultivating a healthy paranoia and a heavily pessimistic attitude is the path to becoming a better programmer.<!--more-->

## Why Be Paranoid and Pessimistic

Being paranoid and pessimistic will save your ass constantly. Before even talking about actual code &#8211; backups, debuggers, [source control](http://grokcode.com/717/how-to-use-source-control-effectively/), error logging, automated deployment scripts, and almost all tools of the programming trade are predicated on the pessimistic idea that stuff goes wrong often, and there must be procedures in place to identify, correct, and prevent errors.

Another side effect of being paranoid is coding defensively. No matter if you are coding against libraries, code written by other developers on your team, or code written by yourself, it is important to code defensively, because everybody and everything is fallible.

Defensive code makes fewer assumptions and carefully handles error cases instead of failing silently or producing undefined behavior. This leads to code that is easier to maintain and less prone to bugs.

Libraries are updated, frameworks evolve, requirements change. Programmers are [constantly fighting against entropy](http://www.kalzumeus.com/2011/11/17/i-saw-an-extremely-subtle-bug-today-and-i-just-have-to-tell-someone/). Defensive programming guards against the effects of software entropy by reducing the possibility that changes in one part of a system will cause subtle bugs somewhere else.

It is important to expect the unexpected in all things. 

> It seems that there&#8217;s a mantra that every programmer must memorize early in his or her career. It is a fundamental tenet of computing, a core belief that we learn to apply to requirements, designs, code, comments, just about everything we do. It goes
> 
> THIS CAN NEVER HAPPEN&#8230;
> 
> <cite>&#8211; <a href="http://www.amazon.com/gp/product/020161622X?ie=UTF8&#038;tag=grok-20&#038;linkCode=as2&#038;camp=1789&#038;creative=9325&#038;creativeASIN=020161622X">The Pragmatic Programmer</a> by Andrew Hunt & David Thomas</cite>

Embracing paranoia and pessimism will automatically lead to wonderful things like:

  * Explicitly stating preconditions, postconditions, and invariants
  * If it can&#8217;t happen, using assertions to ensure that it won&#8217;t
  * Always using source control
  * Crashing early &#8211; a dead program normally does a lot less damage than a crippled one

All of the above are widely considered good practice, and techniques recommended in [The Pragmatic Programmer](http://www.amazon.com/gp/product/020161622X?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=020161622X).

## When to stop being paranoid and pessimistic

You should never stop being paranoid or pessimistic, but when interacting with non-technical people, you should probably change your game face.

Let&#8217;s say you get a phone call from your boss who is a search engine optimization guy. He is wondering if you can build a tool to check how a website ranks in the search engines for various keywords. 

You are a good programmer. A paranoid programmer. A pessimistic programmer. You immediately start thinking about the most significant challenges involved. That to do this project right, you will need to account for differences in search results across geographic areas. That means a distributed architecture of some kind, and most likely reports with combined rankings plus rankings broken out by geographic area. Now, if we use too many geographic areas and check them too often, we will significantly change the search volume for a particular term, which can have indirect effects on rankings. Plus scraping results is probably against Google&#8217;s ToS&#8230;

_Swallow those words._

Your boss is a marketer at heart. He is an optimist. He needs to be an optimist in order to sell stuff. He doesn&#8217;t want to hear about worst case scenarios or most significant challenges. He needs to know about them, but wrap them up in a language he is better equipped to understand. 

&#8220;Hrmmm. There are already similar tools out there, so I&#8217;m sure this is something we can do. However, I don&#8217;t think creating this tool will be as simple as it first appears. The most straightforward way to collect the data is to do some searches programmatically and then scrape the page to get rankings, but I think this is against Google&#8217;s ToS, and could get us in hot water with Google. We will also have to account for things like geographical rankings differences. I&#8217;m sure there are ways around these issues, but I&#8217;m not sure what the solution will look like yet without doing a bit more research.&#8221;

See the difference? Instead of your boss getting what sounds to him like a litany of problems, he is now getting some reassurance that it can be done, it just isn&#8217;t as easy as he probably thinks it is, and will take some thought to get everything right.

The only problem with pessimistic problem solving is that it is often misunderstood by optimists (read: management, sales, marketing, etc.). You don&#8217;t want to be known as the person who spits out a list of problems at every new idea. It is better to be known as the person who solves problems before anyone else realizes that a problem exists.

So unless you are communicating with optimists, go forth and spread paranoia and pessimism.
