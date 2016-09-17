---
id: 538
title: 'Java Build Systems: A Sad State of Affairs'
date: 2010-10-04T05:00:53+00:00
author: Jess Johnson
layout: post
description: >
  The evolution from Make, to Ant, and then to Maven has done little to improve Java build tools. Your team is better served using a less popular alternative.
permalink: /538/java-build-systems-a-sad-state-of-affairs/
categories:
  - 'Books &amp; Tools'
tags:
  - ant
  - build tools
  - buildr
  - gradle
  - Java
  - make
  - maven
  - rake
---
The evolution from Make, to Ant, and then to Maven has done precious little to advance the state of Java build tools. Developers are still stuck with poorly thought-out tools that force us to violate DRY and write XML tag soup. Your team may be better served using a less popular alternative.<!--more-->

## In the beginning there was Make.

But Makefiles aren&#8217;t natively compatible with Windows, nor are they inherently portable across Unixes. For a platform-independent language like Java, this was a big problem. Even for applications that did not require platform independence, Makefiles were perhaps an overly complex solution for Java builds.

## Then there was Ant.

Ant stepped in and did a good job of addressing the major problems with Make for Java builds. Since Ant itself is written in Java and it abstracts away many of the details of the underlying OS, build files are for the most part platform-independent. Ant was also written specifically to work with Java, so it has some built in assumptions about the build process which reduce the number of things that need to be stated explicitly.

So Ant was an improvement over Make in some ways, but it introduced its own set of problems.

### XML and the angle bracket tax.

Ant build files are pure XML. The unavoidable verbosity of XML compared to flat files, JSON, YAML, or virtually anything else is a clear violation of DRY (Don&#8217;t Repeat Yourself). This verbosity is expensive in terms of readability, clarity, and ultimately the time it takes humans to parse and extract the precious few bits of information hidden amongst the garbage. I won&#8217;t go into this too much as it has already been discussed to death.[1](#footnote_0_538 "See Jeff Atwood&rsquo;s XML: The Angle Bracket Tax and a rebuttal by Norman Walsh Defending the Tax for a nice overview of the discussion."){#identifier_0_538.footnote-link.footnote-identifier-link}

I&#8217;m sure some will say that nobody should be mucking about in the build files anyway. In this day and age, the IDE should handle all of that ickiness. Fair enough. Until Netbeans creates a build file that can&#8217;t be read by the next Netbeans version, or until my team switches IDEs, or until I decide I want to use Emacs instead, or until I want to set up a continuous integration server and have to add some custom targets not handled by the IDE. Eventually something will happen and you will need to <del datetime="2011-01-12T16:06:51+00:00">peak</del> peek under the covers.

And build files created by IDEs are not pretty. They work nicely when they work, but they are far more complicated than they need to be since they are designed to be general enough to support all kinds of crap.

The reality is that build files need to be hand-crafted for all but the simplest use cases, and the angle bracket tax must be paid.

### XML as programming language

XML isn&#8217;t a language, it is a way of marking up documents. It is completely inappropriate for a build system where you often need the flexibility of a programming language. Lets look at conditionals as an example. Sure, there are ways of faking conditionals in XML markup, but which would you rather read?

A conditional in any sane language (here we use Ruby):

<pre><code class="language-ruby">if prop1 and prop2 and not prop3
    print "Doing stuff\n"
end</code></pre>

Or a pseudo conditional in Ant:

    <target name="cond" depends="cond-if"/>
    
    <target name="check-cond">
      <condition property="cond-is-true">
        <and>
          <not>
            <equals arg1="${prop1}" arg2="$${prop1}" />
          </not>
          <not>
            <equals arg1="${prop2}" arg2="$${prop2}" />
          </not>
          <equals arg1="${prop3}" arg2="$${prop3}" />
        </and>
      </condition>
    </target>
    
    <target name="cond-if" depends="check-cond" if="cond-is-true">
      <echo message="Doing stuff"/>
    </target>

The above example is straight out of the official Ant FAQ. Yuck.

Or maybe you want to loop through a set of files and perform a set of operations on them. XML (and by extension Ant) is not the tool of choice for this. We really want a simple Turing-complete language, not an ad hoc set of XML tag soup for a build system. A complex build process is a dynamic series of operations; it is unwieldy to shoehorn this into the XML syntax which was intended for a different purpose.

### Ant&#8217;s implementation

Even ignoring for a moment the gross inappropriateness of XML, Ant&#8217;s implementation leaves much to be desired.

Take as an example a problem I ran into recently: use a set of jar files in the classpath, and then copy the jars and package them up with an application. Seems fairly simple right? Wrong. I could set up the classpath as a property, but Ant&#8217;s copy task requires a `FileSet`. OK. But creating a `FileSet` requires a base directory containing all of my jars. Some of my jars live with my project, and others are part of Tomcat on the machine I am using to build. So now what? Use root as the base directory? That seems ugly. Surely there must be a way to convert my classpath property to a `FilesSet`? Or to use Ant&#8217;s `Path` which can contain multiple files. Nope. If there is a way, it is well hidden. Maybe I could just shell out and use copy on the local machine. In that case I loose the platform independence Ant gives me; why didn&#8217;t I stick with Makefiles? So in the end the solution is to list the files twice: once in a format that I can use in a classpath, and again in a format that can be used for copy. So now I&#8217;m violating DRY again, but on a whole different level.

Ant doesn&#8217;t just encourage the creation of unmaintainable copypasta, it requires it.

We need something better.

## Along comes Maven.

Maven&#8217;s philosophy is convention over configuration. So far so good. But Maven uses XML too, so it comes with all of the problems inherent in that choice. In fact, Maven completely ignores all of the pain points created by Ant, and aims to solve a completely different problem.

Maven&#8217;s &#8220;killer feature&#8221; is that it will check your project dependencies and pull new versions from upstream. Its design encourages you to ride the upgrade treadmill. Maybe I don&#8217;t want to put my application at risk of breaking every time upstream does something clever. Some applications don&#8217;t need shiny features, they need stability. This is something Java people should understand; the whole Java ecosystem revolves around an excellent set of standard libraries that are well tested and solid.

But even more troubling is that Maven introduces non-determinism into the build process.

> You have no control over, and limited visibility into, the dependencies specified by your dependencies. Builds _will_ break because different copies of Maven _will_ download different artifacts at different times; your local build _will_ break again in the future when the dependencies of your dependencies accidentally release new, non-backwards compatible changes without remembering to bump their version number. Those are just the innocent failures, too; the far more likely scenario is your project depends on a specific version of some other project which in turn depends on the LATEST version of some other project, so you still get hosed even when downstream providers _do_ remember to bump versions! Every release of every dependency’s dependencies becomes a new opportunity to waste several hours tracking down strange build failures.
> 
> But Maven is even worse than that: not only does Maven automatically resolve your project’s dependencies, it automatically resolves its own plugins’ dependencies, too! So now not only do you have to worry about separate instances of Maven accidentally downloading incompatible artifacts (or the same instance downloading incompatible artifacts at different times), you also have to worry about your build tool itself behaving differently across different machines at different times! <cite>-Kent R. Spillner on <a href="http://kent.spillner.org/blog/work/2009/11/14/java-build-tools.html">Ant vs. Maven</a></cite>

## We still need something better.

So whats next?

There aren&#8217;t any clear successors to Maven; certainly there is nothing on the horizon that looks like it is on the way to attracting the level of popularity currently enjoyed by Ant or Maven.

One interesting option comes full circle: [Rake](http://rake.rubyforge.org/) &#8211; Ruby Make. Rake looks quite promising; it uses Ruby syntax, not XML, and comes with a library of prepackaged tasks to make build files simpler. Other tools to investigate are [Make in Java &#8211; JMK](http://jmk.sourceforge.net/edu/neu/ccs/jmk/index.html) and [APB](http://java-source.net/open-source/build-systems/apb).

**Update:** Several people in the comments are recommending [Buildr](http://buildr.apache.org/) or [Gradle](http://gradle.org).

<ol class="footnotes">
  <li id="footnote_0_538" class="footnote">
    See Jeff Atwood&#8217;s <a href="http://www.codinghorror.com/blog/2008/05/xml-the-angle-bracket-tax.html">XML: The Angle Bracket Tax</a> and a rebuttal by Norman Walsh <a href="http://norman.walsh.name/2008/05/13/thetax">Defending the Tax</a> for a nice overview of the discussion. [<a href="#identifier_0_538" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
</ol>
