---
id: 732
title: Launching Downloadable Products Quickly
date: 2012-03-27T15:35:33+00:00
author: Jess Johnson
layout: post
guid: http://grokcode.com/?p=732
permalink: /732/launch-faster-the-tools-to-do-it-without-looking-like-a-fool/
categories:
  - 'Books &amp; Tools'
tags:
  - a/b testing
  - affiliate programs
  - fetchapp
  - fivvr
  - freshbooks
  - launching
  - sales
  - startups
  - stripe
  - themeforest
---
My intent is to give recommendations that will be of use to other programmers who are trying to quickly turn a side project into a professional product that they can sell.<!--more-->

Assuming you already have a working side project or product (no small feat in itself, but not difficult for a coder to put together), the biggest missing piece is a website for getting that project into the hands of customers. It&#8217;s easy to underestimate how much work it takes to do this part well if you have never done it before &#8211; design, conversion optimization, payment processing, secure digital product delivery, analytics, affiliate programs&#8230; 

Researching this stuff is a _huge_ time suck. Here are the tools I recommend for getting a professional site done quickly. This setup has no monthly fees and low per transaction fees, but does require some glue code to get working. 

[<img src="http://grokcode.com/wordpress/wp-content/uploads/themeforest.jpg" alt="themeforest screenshot" width="360" height="209" class="alignleft size-full" />](http://themeforest.net?ref=grokcode)[ThemeForest](http://themeforest.net?ref=grokcode) is an online marketplace for site templates and themes.

Even if you plan on moving to a custom design later, using a pre-built theme at first will save time and let you launch sooner. Plus the initial feedback from customers who bought the product on the themed site will help to guide the custom design.

I prefer ThemeForest because all themes are manually reviewed by the ThemeForest staff before being added to the store &#8211; this means no secret spam links or malicious code embedded in your themes. (This is a huge problem with free themes.)

Professional looking themes typically sell for between $8 and $15, which is a pittance for the time it will save if you were to code it yourself. [Browse themes here.](http://themeforest.net?ref=grokcode)

A stock theme will still need some customization. For custom graphics, try [Fivvr](http://fiverr.com/).

I add a few extra pages to the theme to handle checkout: a payment page, a verify purchase page, and a thank-you or payment received page. These pages contain a bit of custom glue code to use my preferred payment processor, digital delivery method, and affiliate program tracker. The other benefit of handling these pages myself, instead of passing control off to an external cart or payment processor, is that it allows more control over the checkout process. This is valuable for gathering data about cart abandonment rates, providing opportunities for upselling, and optimizing these pages for conversion. 

[<img src="http://grokcode.com/wordpress/wp-content/uploads/stripe.jpg" alt="stripe screenshot" width="360" height="209" class="alignleft size-full" />](https://stripe.com/)Previously, writing or hosting those pages yourself would be a huge security risk and a PCI compliance nightmare, but with [Stripe](http://stripe.com) to do the heavy lifting it&#8217;s a secure option.

Stripe makes it easy to accept credit cards on the web.

Payments take place through `stripe.js`, so your customers never leave your site during the checkout process, and you skip most PCI requirements since the transaction itself happens on Stripe&#8217;s servers, not yours.

The API is a joy to work with, and there are Stripe employees hanging out in the Campfire room at all hours of the day and night who can answer integration questions.

Cost is 2.9% plus $0.30 per successful charge. There are no hidden fees. Earnings are transferred to your account an a 7 day rolling basis.

Unlike most forms of accepting online payments, the sign up process is painless, and you can start with the test API right away. [Sign up for Stripe.](https://stripe.com/)

[<img src="http://grokcode.com/wordpress/wp-content/uploads/fetch.jpg" alt="fetch screenshot" width="360" height="209" class="alignleft size-full" />](http://fetchapp.com/)Once payment has been processed, [FetchApp](http://fetchapp.com/) provides secure delivery of digital files.

Each purchase triggers the creation of a unique download link. You can configure the length of time the link is valid and the number of times it can be used.

There is a simple online interface and an equally slick API to manage products, orders, and customers. The feature set includes the ability to send free trials and notify customers when a new version of a product is available.

FetchApp integrates with a number of shopping carts and payment providers out of the box, but my setup uses the API.

Pricing is based on amount of storage required, not number of sales. The free plan covers up to 1MB. [FetchApp sign up page.](http://app.fetchapp.com/signup?ref=r5bf) 

The above services mixed with some good marketing copy will get you up and running, but you will certainly want to set up a few extras like analytics, A/B testing, and possibly an affiliate program.

[Google analytics](http://www.google.com/analytics/) is the standard choice for analytics &#8211; it is easy to setup and provides tons of useful information.

[<img src="http://grokcode.com/wordpress/wp-content/uploads/google-website-optimizer.jpg" alt="google website optimizer screenshot" width="360" height="209" class="alignleft size-full" />](http://www.google.com/websiteoptimizer)[Google Website Optimizer](http://www.google.com/websiteoptimizer) provides A/B and Multivariate Testing.

There are a number of different options for this type of testing. I prefer GWO because it is easy to setup and the reports are simple to understand.

Another avenue for increasing sales is to set up an affiliate program, giving people who promote your product a cut of the sales. Companies like [Commission Junction](http://www.cj.com/) and [ClickBank](http://www.clickbank.com/index.html) will handle this &#8211; they help affiliates find your program and track their sales. 

However I don&#8217;t recommend either of those programs. Their fee structures are too complicated, and affiliates are often hit with hidden fees. Also, they use &#8220;hop links&#8221; to track purchases. These &#8220;hop links&#8221; don&#8217;t provide SEO value and look suspicious to customers (a typical link will look something like http://chdxsld.com/kdkd2002kdk before the customer is redirected to your site).

A self-hosted affiliate program will avoid those problems &#8211; you can customize the payout percent and affiliate links will look something like http://example.com/ref=ID, but the drawback is you need to publicize the program yourself and handle the affiliate payments. 

I have yet to find a good affiliate solution, self-hosted or otherwise. Anyone have recommendations?

[<img src="http://grokcode.com/wordpress/wp-content/uploads/freshbooks.jpg" alt="freshbooks screenshot" width="360" height="209" class="alignleft size-full" />](http://www.freshbooks.com/)Bonus recommendation: if you intend to support a fledgling startup with contract work on the side, or if charging for support is part of your revenue model, [Freshbooks](http://www.freshbooks.com/) is the best option I&#8217;ve seen for creating professional invoices.

The Freshbooks web app is an absolute pleasure to work with.

Pricing is based on the number of clients, with up to 3 clients on the free plan. [Use this invite to sign up a free 30 day trial of Freshbooks.](https://grokcode.freshbooks.com/refer/www)

You can see this software stack in action at <del datetime="2014-08-01T16:58:45+00:00">Geotargeter for WordPress &#8211; a plugin for Amazon Affiliates</del>. **Edit:** Now defunct.