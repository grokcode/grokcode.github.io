---
id: 25
title: The Essential Programming Language Toolbox
date: 2008-06-22T19:41:59+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/25/the-essential-programming-language-toolbox/
permalink: /25/the-essential-programming-language-toolbox/
wp_jd_bitly:
  - http://bit.ly/akQjwc
wp_jd_target:
  - http://grok-code.com/grokcode-dev/25/the-essential-programming-language-toolbox/
jd_tweet_this:
  - 
categories:
  - Programming Languages
tags:
  - languages
---
Everybody has a different idea of which languages are important. And the answer really depends on who you are and what you believe is important. I came to programming through a theoretical computer science route which initially gave me a shallow understanding of a wide breadth of topics. In this school of thought, languages are just a vehicle for learning about the big ideas in computer science. And to get at all of the ideas, you need to use a language that lends itself to the topic.<!--more-->

<img src="http://grokcode.com/wordpress/wp-content/uploads/2008/06/toolbox.jpg" alt="Toolbox" width="160" height="240" class="alignleft" />How would you understand memory management and pointers in Java? How would you learn about data structures in assembly? You can&#8217;t. Thats how. Java hides the details of memory management and pointers so you don&#8217;t have to deal with it, but knowing what is going on under the covers will make you a better programmer. Assembly is so low level that if you use it as a vehicle for implementing a B-tree you will loose most of the big ideas about the data structure and algorithms in a sea of register manipulation and instruction set details. This list is for people who want to get at all the [big ideas](http://en.wikipedia.org/wiki/List_of_basic_computer_science_topics) in computer science, which necessitates learning a wide breadth of languages. It&#8217;s strongly in the language-as-a-vehicle camp, not the language-as-a-career camp.

## Assembly

Assembly will get you right down to the bare metal, working with registers and architecture-specific instruction sets. In short, assembler requires learning the fundamental architectural principles of modern computing equipment, which is essential for writing better higher level code that takes advantage of bare metal. It will also give you a fine appreciation for the dangers of writing spaghetti code.

Usage of assembly today is fairly limited, but encompasses many interesting areas such as reverse engineering, embedded systems, viruses, real-time systems, and compilers. There are a [variety of assembly languages](http://www.ntecs.de/old-hp/uu9r/lang/html/assembler.en.html) out there. MIPs is a good choice for its simple instruction set, and x86 is a good choice for its ubiquity.

Big ideas: bare metal, compilers, optimization, self-modifying code

## C

C is the direct ancestor of some of the most widely used modern languages: C++, Java, C#, and PHP just to name a few. Knowing any one of these languages will allow you to pick up any of the others easily, and to communicate ideas with developers from a variety of backgrounds. In short, C is the lingua franca. Learning C has the added benefit of introducing memory management and pointers &#8211; things that higher languages like Java hide with automatic garbage collection and object references.

C is used all over the place: in every modern non-toy OS, Java VMs, the Ruby interpreter, and the Apache web server.

Big ideas: Memory management, pointers, complexity analysis

## A Lisp Dialect

Lisp will make you think differently. I can think of no better way to put it than that. The language is simply structured in such a way as to make both problems and their solutions look differently. The structure of the languages begs the usage of recursion, maps, and closures &#8211; things that aren&#8217;t seen nearly as often in other languages.

> Lisp is worth learning for&#8230; the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot. <cite>&#8211; Eric Raymond, <a href="http://www.catb.org/~esr/faqs/hacker-howto.html">How to Become a Hacker</a></cite>

Lisp dialects are used heavily in artificial intelligence, and as scripting languages within other applications such as Emacs and AutoCAD. Scheme is a good dialect to learn since it is the language used in [SICP](http://www.amazon.com/gp/product/0262011530?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0262011530) &#8211; one of the [best computer science texts of all time](http://grokcode.com/11/the-top-9-in-a-hackers-bookshelf/). Or learn Emacs Lisp for a foray into dynamic scoping.

Big ideas: recursion, closures, artificial intelligence

## A Scripting Language

[<img src="http://grokcode.com/wordpress/wp-content/uploads/2008/06/coffee.jpg" alt="Hackable coffee maker" width="180" height="180" class="alignleft" />](http://www.amazon.com/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.com%2FJura-Capresso-Impressa-Automatic-Coffee-Espresso%2Fdp%2FB00008I8NT%3Fie%3DUTF8%26s%3Dhome-garden%26qid%3D1214178898%26sr%3D8-2&tag=grok-20&linkCode=ur2&camp=1789&creative=9325 "Hackable coffee maker") 

In an era where we have [hackable](http://www.crunchgear.com/2008/06/19/hack-the-jura-coffee-maker-for-fun-and-profit/) [Coffee Makers](http://www.amazon.com/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.com%2FJura-Capresso-Impressa-Automatic-Coffee-Espresso%2Fdp%2FB00008I8NT%3Fie%3DUTF8%26s%3Dhome-garden%26qid%3D1214178898%26sr%3D8-2&tag=grok-20&linkCode=ur2&camp=1789&creative=9325 "hackable coffee maker") and everything is online, scripting languages are the glue that binds the world together. These higher level languages can be a way of really strutting your stuff and a platform for putting into practice many of the big ideas in computer science &#8211; regular expressions, concurrency, complexity analysis, scalability, architecture, data structures, databases, and so on.

Scripting languages are commonly used for lightweight web applications and are often a good substitute for shell scripting. Pick up one of the P&#8217;s in the LAMP stack (Perl, PHP, Python) or Ruby.

Big ideas: complexity analysis, scalability, architecture, data structures, databases, etc.

The above four categories of languages have enough breadth to get a taste for the vast majority of the big concepts in computer science, after which it is much easier to absorb select topics in-depth, write solid code in any language, and pick up the unique paradigms of any new language you learn.

What programming languages would you put in your own essential toolbox, and why?

<small>Image attribution: </small><img src="http://grokcode.com/wordpress/wp-content/uploads/2008/06/cc_icon_attribution_small.gif" alt="Creative Commons" class="img-noborder inline" /> <small><a href="http://www.flickr.com/photos/kimberlyhurst/">kimberly hurst</a></small>