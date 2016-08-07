---
id: 5
title: Using Axis to Generate Java Files From WSDLs
date: 2007-12-29T21:43:41+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/?p=5
permalink: /5/using-axis-to-generate-java-files-from-wsdls/
wp_jd_bitly:
  - http://bit.ly/cctYwg
wp_jd_target:
  - http://grok-code.com/grokcode-dev/5/using-axis-to-generate-java-files-from-wsdls/
jd_tweet_this:
  - 
categories:
  - 'Tips &amp; Tutorials'
tags:
  - Axis
  - EWS
  - Java
  - SOAP
  - Yahoo
---
Apache Axis is an implementation of the SOAP protocol. It is a framework for constructing SOAP clients and servers. A Java client application is able to use a Web Service by calling Java stub classes created from WSDL files. These WSDL files are made availible by the SOAP server application. As an example, we will go through the process of creating a jar file from WSDLs using the Yahoo&#8217;s Enterprise Web Services (EWS). The EWS platform makes Yahoo&#8217;s Search Marketing API available.<!--more-->

EWS allows access to Yahoo search marketing data. To use EWS, you must have a Yahoo pay per click advertising account, and then sign up for a license key. EWS provides tools to do keyword research, create ads and keywords, generate reports on the performance of your pay per click ads, and more. We want to create a jar file of the services EWS provides so that we can use it in a client application.

First, download and Apache Axis 1.2. A list of mirrors can be found here: [http://www.apache.org/dyn/closer.cgi/ws/axis/1\_2\_](http://www.apache.org/dyn/closer.cgi/ws/axis/1_2_1)1 Since we are developing a SOAP client, there is no need to integrate Axis into our application. Just get the Axis source and compile it. Be sure the classpath includes the jar files in the axis-1_2/lib/ directory.

The Axis WSDL2Java command will generate the Java files from the EWS WSDLs. Here is a simple shell script that shows how to do it.

<pre><code class="language-bash">#!/usr/bin/bash
version=3   # Yahoo API version number
clpath="SET THIS TO AXIS'S CLASSPATH"

# List of wsdls to include in the jar
wsdls=(AccountService?wsdl AdGroupService?wsdl AdService?wsdl BasicReportService?wsdl BidInformationService?wsdl \
BudgetingService?wsdl CampaignService?wsdl CompanyService?wsdl ExcludedWordsService?wsdl ForecastService?wsdl \
KeywordResearchService?wsdl KeywordService?wsdl LocationService?wsdl MasterAccountService?wsdl \
UpgradeService?wsdl UserManagementService?wsdl VaultService?wsdl)
for wsdl in ${wsdls[@]}
do
    echo "Processing "${wsdl}
    java -classpath ${clpath} org.apache.axis.wsdl.WSDL2Java --NStoPkg http://marketing.ews.yahooapis.com/V${version}=com.yahoo.sm.ws.client \
-T 1.3 https://global.marketing.ews.yahooapis.com/services/V${version}/${wsdl}
done

# Compile the files and create javadoc
javac -classpath ${clpath} com/yahoo/sm/ws/client/*.java
javadoc -quiet -classpath $clpath -d ./doc/ com.yahoo.sm.ws.client
jar -cf yahoo-api.jar com/yahoo/sm/ws/client/*.class</code></pre>

The first thing we do is create a list of all the WSDLs in EWS. Then we use the Axis&#8217;s WSDL2Java tools to generate a java file for each of the WSDLs. The &#8211;NStoPkg flag maps the namespace http://marketing.ews.yahooapis.com/V${version} to the package com.yahoo.sm.ws.client. The -T flag specifies the SOAP type mapping version. 1.3 is the value recommended by Yahoo, so we stick with that.

Now that we have the java stub files, we compile them, generate the javadocs, and jar up the class files for use in our application. If you would rather just download the jar file than go through the process yourself, you can get it here [yahoo-api.jar](http://grokcode.com/downloads/yahoo-api.jar).

References:
  
[Axis Userguide](http://ws.apache.org/axis/java/user-guide.html "Axis Userguide")
  
[Yahoo EWS Documentation](http://searchmarketing.yahoo.com/developer/docs/index.php "Yahoo EWS Documentation")