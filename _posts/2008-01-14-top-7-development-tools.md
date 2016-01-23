---
id: 6
title: Top 7 Development Tools
date: 2008-01-14T23:14:40+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/6/top-7-development-tools/
permalink: /6/top-7-development-tools/
wp_jd_bitly:
  - http://bit.ly/cyeG5n
wp_jd_target:
  - http://grok-code.com/grokcode-dev/6/top-7-development-tools/
jd_tweet_this:
  - 
categories:
  - 'Books &amp; Tools'
tags:
  - development
  - tools
---
Every developer should have a collection of tools at their disposal to facilitate project planning stages, speed development, automate testing and building, organize code versions, and otherwise make life easier. Here is a list of the standard tools in my toolbox that make me more productive. Almost all of them are F/OSS and multi-platform. This list has a slight Java slant, but most of these tools are language independent.<!--more-->

Happy hacking!

[<img class="alignleft" src="http://grokcode.com/images/svn.jpg" alt="svn" width="360" height="182" />](http://subversion.tigris.org/)<span class="h2"><a href="http://subversion.tigris.org/">SVN / Subversion</a></span>

Every team needs a version control system to coordinate changes by multiple people, and even working solo its invaluable to have a way of managing different releases and viewing change history. My version control system of choice is SVN, which was created to be an improvement over CVS. If you already know CVS, the transition to SVN is cake. SVN has everything that makes a version control system good: branching, tagging, commit history, atomic commits, efficiency. And the basic operations are dead easy to use. Setting up and administering repositories can be tricky the first time, but there is tons of documentation online that will walk you through it. There a variety of graphical front ends available for SVN, but real men use the command line right? It also integrates with a few different IDEs including Netbeans, Eclipse, and JDeveloper.

[<img class="alignleft" src="http://grokcode.com/images/jmeter.JPG" alt="jmeter" width="360" height="218" />](http://jakarta.apache.org/jmeter/)<span class="h2"><a href="http://jakarta.apache.org/jmeter/" >Apache JMeter</a></span>

JMeter is load and performance tester. It was originally developed for testing web applications, but it also tests databases, web services, and FTP servers. It is multi-threaded, and multiple remote JMeter engines can be controlled from one instance in order to test even higher loads. It can also create a variety of graphs from the data it collects. For example, you can create median response time graphs for an application before and after optimization. Bosses really dig these.

To use it, you create what is called a test plan. A test plan can have many different types of elements: thread groups to control the number of threads and the number of loops the threads should do, controllers that dictate the order to send requests, samplers to specify the requests, timers specifying how long to wait between requests, listeners that gather data and display it in different ways, assertions to test the response, and more. JMeter can create both simple test plans with only a few elements, and more complicated plans for extensive stress or performance testing.

[<img class="alignleft" src="http://grokcode.com/images/casestudio2.JPG" alt="case studio 2" />](http://www.casestudio.com/enu/ "Case Logic")<span class="h2"><a href="http://www.casestudio.com/enu/">Case Studio 2</a></span>

This is the bomb when it comes to data base modeling. It can automatically generate models of existing databases when given the connection string, it has an easy to use interface for creating your own models, and it generates the SQL code for creating the database. Plus it has a lot of small features that really make Case Studio a joy to use &#8211; you can change color schemes, add notes to remind you of usage or not yet implemented parts of the design, and add project stamps that give author name, creation and modified dates, etc. Almost any database you are likely to encounter is supported. It is the only non F/OSS application in the list, but until recently it was priced around $25 and well worth the cost.

Unfortunately, Charon Ware, the maker of Case Studio, has been bought out by Quest Software, the makers of Toad Data Modeler. Case Studio Lite, which is the demo version is still available <a title="case studio" href="http://www.casestudio.com/enu/download.aspx" target="_blank">on the site</a> (scroll to the bottom), but I doubt that will last long since Quest is suggesting the Toad demo download. I haven&#8217;t actually used Toad yet &#8211; the price for the full version is prohibitive.

[<img class="alignleft" src="http://grokcode.com/images/firebug2.jpg" alt="firebug" />](http://www.mozilla.com/en-US/firefox/)<span class="h2"><a title="Firefox" href="http://www.mozilla.com/en-US/firefox/" >Firefox</a> with <a  href="http://www.getfirebug.com/" >Firebug extension</a></span>

No serious web developer or designer should be without this combo. Firebug has the ability to break down network activity by file &#8211; showing file size, file load times, and response and request headers, which is very helpful when troubleshooting server or caching problems. It comes with a JavaScript debugger, profiler, and logger. It allows real time CSS and HTML editing so you can change the page on the fly. Hovering over an element in the source code pane will highlight the part of the page contained within that element so its easy to see exactly what is going on with the layout. It also contains a DOM inspector, which I haven&#8217;t found cause to use yet.

Before firebug, I ended up fixing a lot of layouts gone crazy by half random guesswork. It also helped me discover that due to a quirk of Tomcat, many of my files weren&#8217;t been cached properly.

[<img class="alignleft" src="http://grokcode.com/images/emacs.jpg" alt="emacs" width="360" height="219" />](http://www.gnu.org/software/emacs/)<span class="h2"><a href="http://www.gnu.org/software/emacs/">GNU Emacs</a></span>

This is the mother of all text editors. There are modes available for all common programming languages, which provide syntax highlighting and menu options specific to that language. The learning curve is not steep, but it is long. I&#8217;ve been using it pretty consistently for 6 years, and I&#8217;m still finding new features. It is highly customizable and extensible through the Emacs Lisp Language, which is a dynamically scoped Lisp dialect. You can do pretty much anything with it, and basically everything is configurable. You can create key bindings, spell check, do advanced search and replace with regular expressions, compile and debug programs, create macros, do code folding, read and send email, view a calendar, play Tetris, and more all within Emacs. Oh yeah, need a psychiatrist? Emacs has it. Seriously.

I don&#8217;t really play with a lot of that stuff &#8211; despite all of it features, emacs has a very simple interface. One of my favorite features is the ability to set the colors used for syntax highlighting and background. If I&#8217;m going to spend a lot of time staring at the computer screen, I want to a scheme that is easy on the eyes and conveys useful information.

[<img class="alignleft" src="http://grokcode.com/images/yjp.JPG" alt="yjp" />](http://www.yourkit.com/)<span class="h2"><a href="http://www.yourkit.com/" >YourKit Java Profiler (YJP)</a></span>

YJP isn&#8217;t F/OSS, but they do have licensing options for academic and open source projects. YourKit makes a .NET profiler as well.

This is the best Java memory profiler I have come across so far. I haven&#8217;t found it to be all that helpful debugging JSP applications unless I already have a pretty good idea of what I am looking for. It does work a bit better for straight Java applications where you don&#8217;t have to worry about the whole technology stack.

It exports stack traces as HTML so you can compare them later, and creates some pretty nifty graphs. It also has the option to capture a memory dump on out of memory error, but you need to be using a newer JVM for this to work. YJP integrates with the Eclipse and NetBeans IDEs.

[<img class="alignleft" src="http://grokcode.com/images/cygwin.jpg" alt="cygwin" width="360" height="182" />](http://www.cygwin.com/ "cygwin")<span class="h2"><a title="cygwin" href="http://www.cygwin.com/" >Cygwin</a></span>

I&#8217;ve been finding myself developing on Windows more and more lately, but without a \*nix shell I don&#8217;t have any of the command line tools that I have become used to. Cygwin provides ports of the GNU development tools. Pretty much everything you would expect to see on a \*nix command line, Cygwin will give you: grep, find, sed, more, man, ssh, cron, chmod, etc. So developing on a Windows box doesn&#8217;t need to be a PITA.

This tool is an absolute essential if you find yourself on a Windows box.