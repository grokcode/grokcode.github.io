---
id: 80
title: Programming Syntax Brain Teasers
date: 2008-10-05T16:23:29+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/80/programming-syntax-brain-teasers/
permalink: /80/programming-syntax-brain-teasers/
wp_jd_bitly:
  - http://bit.ly/aXDdQZ
wp_jd_target:
  - http://grok-code.com/grokcode-dev/80/programming-syntax-brain-teasers/
jd_tweet_this:
  - 
categories:
  - Programming Languages
tags:
  - brain teasers
  - c puzzle book
  - C++
  - Java
  - java puzzlers
  - obfuscated c contest
  - programming
---
This is a collection of 4 programming brain teasers in C and Java. Some require a sudden flash of insight or knowledge of good coding style to solve, others demand intimate knowledge of the compilation process. The problems range from easy to insanely tricky. The C brain teasers come from [The C Puzzle Book](http://www.amazon.com/gp/product/0201604612?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0201604612 "The C Puzzle Book") and the Obfuscated C Contest. The Java problems are from the [Java Puzzlers](http://www.amazon.com/gp/product/032133678X?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=032133678X "Java Puzzlers") book. Answers to all problems are at the bottom of the page.<!--more-->

### 1. Magic Java URLs

Why does the following Java code compile?

<pre><code class="language-java">public class Oddity {
    public static void main(String[] args) {
        http://grokcode.com
        System.out.println("Why is the URL allowed above?");
    }
}</code></pre>

source: [New Adventures in Software](http://blog.uncommons.org/2008/08/24/a-java-syntax-quirk/ "New Adventures in Software")

### 2. WTF Coding Style In C

Improve the following C code fragment. The new fragment should be easier to [grok](http://grokcode.com/95/definition-and-origin-of-grok/ "grok") and use principles of good coding style.

<pre><code class="language-c">if (A)
    if(B)
        if(C) D;
        else;
    else;
else
    if (B)
        if(C) E;
        else F;
    else;</code></pre>

source: [The C Puzzle Book](http://www.amazon.com/gp/product/0201604612?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0201604612 "The C Puzzle Book")

### 3. Tricky Linefeeds in Java

On Windows a line separator is a CR followed by an LF. On *nix it is an LF character. What does the following code print on both platforms?

<pre><code class="language-java">public class LinePrinter {
    public static void main(String[] args) {
        // Note: \u000A is Unicode representation of linefeed (LF)
        char c = 0x000A;
        System.out.println(c);
    }
}</code></pre>

source: [Java Puzzlers](http://www.amazon.com/gp/product/032133678X?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=032133678X "Java Puzzlers")

### 4. The Impossible C One Liner

What does the following C code print? This one of the best one line submissions ever entered in the Obfuscated C Contest. It was written by David Korn, and won the Best One Liner in 1987. Very few people can determine the output by visual inspection. It should be compiled on Unix or Cygwin.

<pre><code class="language-c">main() { printf(&unix["\021%six\012\0"],(unix)["have"]+"fun"-0x60);}</code></pre>

source: [Obfuscated C Code Contest](http://www.ioccc.org/years.html#1987_korn "Obfuscated C Code Contest")

* * *

## Answers

### 1. Magic Java URLs

The syntax highlighting might have made this one pretty clear. The `http:` is parsed as a label, which is followed by the comment `//grokcode.com`, so the compiler won&#8217;t choke on the code snippet.

### 2. WTF Coding Style In C

Deeply nested statements are against the principles of code good design. The code should be rewritten to collapse the nesting of the `if` statements. Here is one possible solution that fully qualifies the conditions required to execute each statement:

<pre><code class="language-c">if (A && B && C) D;
else if (!A && B && C) E;
else if (!A && B && !C) F;</code></pre>

Here is another good solution that uses some nesting in order to shorten the conditions in the `if` statements:

<pre><code class="language-c">if (B) {
    if (A && C) D;
    else if (!A && C) E;
    else if (!A && !C) F;
}</code></pre>

### 3. Tricky Linefeeds in Java

OK this was a bit of a trick question. The code snippet won&#8217;t even compile. The problem is that the compiler translates Unicode escapes into their equivalents before parsing the code into tokens, and before stripping comments and whitespace. So the program is translated into this:

<pre><code class="language-java">public class LinePrinter {
    public static void main(String[] args) {
        // Note:
 is Unicode representation of linefeed (LF)
        char c = 0x000A;
        System.out.println(c);
    }
}</code></pre>

Which we can see isn&#8217;t going to compile.

So what if the comment is removed? Is the result platform dependent? It turns out that on *nix two complete line separators are printed, and on Windows only one is printed.

### 4. The Impossible C One Liner

Did you get this one? If so you did better than the vast majority of C programmers. It prints &#8220;unix&#8221;. But why? Here is an [explanation by David Ireland](http://www.di-mgt.com.au/src/korn_ioccc.txt). He uses 109 lines to explain 1 line of code. Thats obfuscation for you.