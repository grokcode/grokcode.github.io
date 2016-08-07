---
id: 9
title: J2EE Application Environment Optimization Checklist
date: 2008-02-15T23:18:03+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/9/j2ee-application-environment-optimization-checklist/
permalink: /9/j2ee-application-environment-optimization-checklist/
wp_jd_bitly:
  - http://bit.ly/b451zu
wp_jd_target:
  - http://grok-code.com/grokcode-dev/9/j2ee-application-environment-optimization-checklist/
jd_tweet_this:
  - 
categories:
  - 'Tips &amp; Tutorials'
tags:
  - J2EE
  - Java
  - optimize
---
Optimizing J2EE applications is hard. Even if all of your algorithms have been analyzed in big-O notation and finely tuned, you can have abysmal performance due to a poorly configured environment. J2EE applications depend on many lower layers which all must be properly optimized in order to give good overall performance. This page gives a checklist of optimization tips organized by layer. It includes optimizations for the HTTP Server, Application Server, Java frameworks, database, and the application itself. This page isn&#8217;t intended to be a comprehensive optimization guide; it is a checklist of the most effective optimizations I have found that can be applied in most situations. This checklist is a good place to start before more focused optimizations &#8211; and you may even find that nothing more is required.<!--more-->

<img src="http://grokcode.com/images/tech-stack.jpg" alt="Java Tech Stack" class="alignright" />

Before starting to optimize, you should have a specific goal. This could be something like &#8220;50% speedup across all pages,&#8221; or &#8220;less than 2 second load time for all pages with 50 concurrent users.&#8221; Also define the context in which you will measure your results: What connection speed will you test on? How will you model typical user actions in your tests?

You can use Firefox with the Firebug extension to measure individual page load times, or for more sophisticated reporting, take a look at Apache JMeter.

Once you have your initial measurements and your goal, you can start optimizing. After each optimization, run your benchmarks again to determine what the results where. This is a useful step, because in certain environments, some optimizations negatively impact performance. Conditions that may cause a degradation of performance instead of an improvement have been noted in the checklist.

Since significant optimizations at higher levels can be hidden by poorly optimized lower levels, starting at the bottom and working up is a good strategy.

## HTTP Server Optimizations

A poorly configured HTTP Server can significantly impact the responsiveness of your application. Users on a low bandwidth connections will have the biggest gains from optimizations here, but users of all connection speeds will benefit.

If you are using your Application Server as the Http Server, you can apply the optimizations in this section directly to the Application Server.

### Enable compression

Make sure that GZip compression is enabled for browsers that support it. Use the Firebug extension for Firefox to have a look at the response headers being sent. Content-encoding should be set to gzip. If it isn&#8217;t, enable it on Apache by adding the following lines to your `conf/httpd.conf` file:

<pre><code class="language-xml">LoadModule deflate_module modules/mod_deflate.so
AddOutputFilterByType DEFLATE text/html text/plain text/xml</code></pre>

In IIS 6.0, enable compression in IIS Manager. Have a look at the different options to see which work best with your configuration. The best gains occur for static files. There is the possibility that compressing dynamic content will result in a performance drop on servers with very high processor usage.

### Move JavaScript and CSS to include files

This keeps page size small, and makes caching work more effectively. Since JavaScript and CSS are generally shared among many different pages, putting them into a separate file that can be cached saves bandwidth. As a bonus, this is a good search engine optimization practice because search engine spiders may have difficulty crawling JavaScript.

### Enable caching

All static resources such as JavaScript, CSS, and images should be cached to prevent them from being requested multiple times. Once again, Firebug will help determine what is going on. Response headers to look at are `Last-Modified`, `Cache-Control`, `Expires`, and `ETag`. If you are using the Application Server to serve static files you will need to configure it there.

## Application Server Optimizations

There are additional optimizations that can be performed at the Application Server level.

### Remove extra characters from the generated HTML

Html generated from JSP often includes a lot of extraneous characters such as newlines, spaces, and tabs. Removing these characters from the html can reduce filesize by as much as 50%. Have a look at the html source to determine how big your savings will be before implementing. Three possible solutions are to use JSP documents, a buildtime task that will strip out characters in the JSP, or a runtime filter that will strip characters from the generated html. A Java runtime filter generally results in smaller filesize, but it is also more resource intensive than the buildtime solution since it is one more step that must be taken when a page is requested. If you are using Tomcat 5.5.x, you can just turn on the `trimSpaces` flag. This page is a good resource for [removing whitespace](http://raibledesigns.com/rd/entry/trim_spaces_in_your_jsp "removing whitespace").

### Minimize logging

Logging causes I/O which can be a performance bottleneck. Set the logging level to only log critical errors, or disable it all together if you don&#8217;t need it.

### Application Server specific options

Each Application Server will have different configuration options. Follow recommended configuration guidelines for a production server. Here are recommended configurations for [Tomcat](http://tomcat.apache.org/tomcat-5.5-doc/jasper-howto.html#Production%20Configuration) and [JBoss](http://www.redhat.com/docs/manuals/jboss/jboss-eap-4.2/doc/Server_Configuration_Guide/ch02s02s01.html "JBoss").

## Framework Optimizations

The types of improvements you can make at this level are very much dependent on the framework that you are using. Do a bit of research on your framework to determine what the recommended configuration is for a production server. For example, with Apache Trinidad it is recommended that the styleclass name compression option be turned on in `web.xml`. Other frameworks will have their own unique options.

## Application Optimizations

I tend to find that optimizing Java code actually gives the worst results in terms of the ratio of time spent to performance improvement. That said, after the rest of your environment is running smoothly, the application will become the performance bottleneck and you will finally get to put your big-O analysis skills to work. Aside from strict algorithm analysis, there are a few things to be aware of in the Java code.

### Avoid WTF code

Basically this means avoid the types of mistakes you see on the [The Daily WTF](http://thedailywtf.com "The daily wtf").

### Avoid creating many temporary objects

Garbage collection is expensive. Avoid creating temporary objects if possible. Temporary objects are especially dangerous within loops. Beware of `String`s, especially when you are concatenating or doing other potentially expensive operations. Also try to reuse expensive objects like database connections.

## Database Optimizations

Having a good database design and well-optimized queries are important. This is a whole topic onto itself, and there are many books and online resources dedicated to good database design. I won&#8217;t go into any of that here, except to mention one often overlooked database optimization technique.

### Choose a good database driver

Changing database drivers can offer _huge_ improvements. I inherited a J2EE application that had been outsourced and was using Sun&#8217;s JDBC-ODBC bridge driver (Sun specifically says this driver shouldn&#8217;t be used in production). Switching to a the jTDS driver gave me a 25% speedup on total application performance.

To choose a driver that is a good fit for your needs, first decide if you need a Type I, Type II, Type III, or Type IV driver (here is [Sun&#8217;s description](http://java.sun.com/products/jdbc/driverdesc.html "DB driver types") of the different types.) Then have a look at different benchmarks, and choose which driver meets your criterion. jTDS has posted [benchmark results](http://jtds.sourceforge.net/benchTest.html "benchmark results") on their site, and also provides links to other benchmarks you can download and test with different drivers, in case you don&#8217;t trust a jTDS benchmark that (surprise) shows that jTDS has the best performance.

What optimization techniques have you found to be successful? Leave a comment below.