---
id: 259
title: 'Interview: Lynne Jolitz'
date: 2009-03-17T05:18:23+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/?p=259
permalink: /259/interview-lynne-jolitz/
wp_jd_bitly:
  - http://bit.ly/ar4Z7x
wp_jd_target:
  - http://grok-code.com/grokcode-dev/259/interview-lynne-jolitz/
jd_tweet_this:
  - 
categories:
  - Career
tags:
  - bsd
  - famous programmers
  - interview
  - lynne jolitz
---
This is the second interview in an ongoing series of interviews with [famous programmers](http://grokcode.com/37/famous-programmers-from-adleman-to-zimmermann/ "famous programmers") and authors of books that should be [required reading for any serious developer](http://grokcode.com/11/the-top-9-in-a-hackers-bookshelf/ "Required reading for developers"). Lynne Jolitz is an accomplished author, 386BSD hacker, Silicon Valley entrepreneur, and all-around geek. She has long been a figure in the tech community. Regular readers will remember that she was included in the analysis of famous programmers. Lets get to the interview! <!--more-->

[<img class="alignleft size-full wp-image-262" title="source_code_secrets" src="http://grokcode.com/wordpress/wp-content/uploads/source_code_secrets1.jpg" alt="The Basic Kernel Source Code Secrets" width="184" height="240" />](http://www.amazon.com/gp/product/1573980269?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1573980269 "Source Code Secrets")

## 1. How did you first get involved with programming?

> While a Berkeley physics major, most of my friends were in computer science, so I also got involved with the Computer Science Undergraduate Association (CSUA) and eventually became Treasurer. At that time CS, Math, Physics and EE students often took courses in each other’s department – it was quite social and interdisciplinary. Given the limited resources in the department (an antique IBM 1620 departmental computer), using the more modern PDP 11/70&#8217;s and VAX&#8217;s through the computer center was the only way to do reasonable data analysis / reduction and incorporate it into papers using troff.
> 
> It really came together for me with machine-level programming on the PDP 11/05 in Cory Hall. It was fun to actually toggle in binary instructions with front panel switches and debug the program by gaining access to the machine&#8217;s hardware directly. The ability to sample instruments and capture scientific data with real-time digital signal processing vastly increased the range of laboratory experiments. The axiomatic nature of machine instructions captivated me into programming forever.
> 
> From this start things moved rapidly. I got a student award &#8211; a bottle of champagne &#8211; for writing the most original algorithm (it was based an original fairy tale I wrote, including a flowchart). The Professor cited me for creating an &#8220;oasis in a desert&#8221;. I also created a simulation of a cocktail party, with a variety of characters, whose interactions dynamically changed attributes as they joined the party, mingled and left &#8211; with some interesting pairings and states of inebriation. I learned that simulations can present surprising results.
> 
> At the time I had just read &#8220;The Shockwave Rider&#8221; by Brunner, and through my first programming experiences realized it wasn’t such a fantastical novel – that we were on the edge of a new networked paradigm with amazing social and technological implications. The impact of programming on my life from that point involved me in networks, client/server, and data retrieval systems as they evolved and became omnipresent. If anything, the technology that has actually happened is more fantastic than what the fiction presented.

## 2. What advice would you give to someone who wants to be a successful programmer?

> Think in terms of axioms that can be managed in a concrete manner. It is my experience that the best work is always provable and reducible, while the least useful work stems from poor definition. A poorly defined and scoped project leads to programmer frustration, inconsistent and/or incorrect code that misleads or fails to solve the problem. In our internetworked age, erroneous code can inadvertently propagate before the programmer has the opportunity correct problems.
> 
> It happens to the best of us, so there is no shame in facing this problem head-on. In fact, it presents opportunities for new work. When we were putting together a discussion of the virtual memory system for 386BSD (Volume 2 of [Source Code Secrets](http://www.amazon.com/gp/product/1573980269?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1573980269 "Source Code Secrets")), we found many areas of the code that had not been completed, as if it was just “forgotten”. The Mach virtual memory system is a wonderful subsystem – careful design, methodical and thorough execution – but there were gaps no one noticed. We all presumed it worked, and only found otherwise in writing the book. All work bears reexamination on occasion. As Socrates once said, “The unexamined life is not worth living”.
> 
> It is no longer sufficient to write reams of code that appears to function without taking responsibility for the corner cases. It is difficult but rewarding to assemble collections of axioms as effective programs, where you can prove effectiveness and testable boundary conditions. I have used this technique in a variety of programming environments, from C to Verilog, operating systems to semiconductors, and it serves me well. I have even been granted patents on hardware TCP/IP stack acceleration from such a disciplined framework of axioms.

## 3. What is your greatest achievement?

> I loved 386BSD – the articles, the books, the code, and the releases – and enjoyed pushing the envelope on innovations in design. We did not feel encumbered by corporate demands, and could innovate freely. Work on self-ordered plug and play configuration, tfork(), integrating role based security into an extant Posix model, ring buffers, polymorphic protocols, file I/O clustering, optimized virtual memory efficiency, memory allocation scheme that could defragment 90% of all kernel memory allocation /deallocation allowing for heap management, and symbolic dynamic binding for kernel subsystems, to name only a few.
> 
> In addition, from my experiences in the 1980’s with Unix workstations at Symmetric Computer System, I felt very strongly that installation should be simple and automatic so that non-Unix enthusiasts could participate on an equal footing with Unix experts. To that end, we constructed a fully automated installation mechanism. One part separated the tasks of setting up a system into autonomous activities that would be build, while the human-oriented cognitive process of getting information off occurred in parallel. The latter process was organized to minimize the amount of confusion induced by system setup, so the software took on this burden. It was very slick, and is still a remarkable achievement.
> 
> I’d have to say my greatest achievement in programming, however, was working with hardware engineers to find the ultimate limits of Internet protocol processing. Most computers use TCP/IP protocol stacks implemented in C as programs. I thought this limited the speed of the Internet, and by expressing the operations of the stack in bit synchronous sequential form, I could create a dataflow architecture which would evaluate / generate protocol packets as instructions themselves, and view the information exchange as a kind of program itself.
> 
> I&#8217;m a physicist first, and Einstein often dreamed of what it would be like to travel on a beam of light. In like kind, I wondered what it would be like to travel on a packet. Think about it – the packet comes into existence bit by bit, travels across the network, and bit by bit enters its destination host. All this time it is processed continually by the entire Internet, as if it is actually one enormous machine like the Multivac of Isaac Asimov&#8217;s Robot series.
> 
> It is the clear understanding and application of axioms that make it possible to achieve this. The benefit is that once done, the complexity of the system of axioms can be refined using other programs, and the power per bit can be reduced by a billion, such that the speed / power product that limits the economics of the Internet can be vastly enhanced. This was proven at [InterProphet](http://www.interprophet.com). It’s rare one is given the opportunity to build a team and pioneer a whole new field. The fact I’ve been able to do it twice, with 386BSD and at InterProphet, is something for which I am most grateful.

## 4. What hobbies do you have outside of software development?

> I’ve been writing music and singing since I was a teenager, and it’s one of my favorite hobbies. I’ve dabbled in digital recording as well. I’m also a big science fiction fan – I love the old scifi stories from the “Golden Age” of science fiction, because they were so innovative for the time. One of my “family” projects was the development of an Internet video server with a browser “controller” accessible from any laptop containing all of our favorite videos from Star Trek to Blade Runner – we recently watched all the Babylon 5 episodes and movies together and had fun comparing Bester and the Psi Corp with Chekov and the Federation. And since everyone in my household has his or her own telescope, we like to go as a family to help out at school star parties.

## 5. What are some of your recent projects?

> I am an adviser to [CoolClip Network](http://coolclip.net), a stealth-mode GenY Internet startup that utilizes a unique server-based video production engine I originally designed and tested at Berkeley. CoolClip was a semifinalist in the Women2.0 2008 Silicon Valley business plan competition. It is in beta (invite-only) at UCLA, works great and is very fun to use. I expect great things from this startup.
> 
> I believe we can make a difference in our world for the better if we strive to achieve it, and work with many in Silicon Valley to that end assisting in furthering their projects. 386BSD, for example, was thought impossible to do at the time because of the resource required. It took years of constant 24/7 hard-fought victories with frequent setbacks and disappointments. Through the enthusiasm and support of champions at Dr. Dobbs Journal and in the Unix community, we saw it through and watched it change how the world viewed open source. Now open source is considered mundane, but in 1990 nobody believed it would be a viable alternative to proprietary systems. The businessmen and cynics bet against it – and lost. Kuhn in his book [The Structure of Scientific Revolutions](http://www.amazon.com/gp/product/0226458083?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0226458083) distinguished between normal science and paradigm shift. Silicon Valley is all about paradigm shift – innovation and change. Programmers provide the valuable contribution to paradigm shift, and should be proud of their profession and relentless in the rigor of their work.

For more info on Lynne, have look at [her blog](http://lynnesblog.telemuse.net/).