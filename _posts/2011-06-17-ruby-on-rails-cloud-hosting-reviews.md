---
id: 709
title: Ruby on Rails Hosting Reviews
date: 2011-06-17T15:57:46+00:00
author: Jess Johnson
layout: post
guid: http://grokcode.com/?p=709
permalink: /709/ruby-on-rails-cloud-hosting-reviews/
categories:
  - Programming Languages
tags:
  - cloud
  - cloud hosting
  - cloud platform
  - dotcloud
  - engine yard
  - heroku
  - hosting
  - rails
  - RoR
  - ruby
  - winnie cloud
---
Cloud platforms are extremely useful when launching a minimum viable product because most of the system administration is handled by the hosting provider, while reserving the option to scale up later if required. Some offer free starter plans to bootstrap applications without making an initial investment. Here is a look at the available options for Ruby on Rails hosting providers, including comments on which one is most appropriate for various types of projects.<!--more-->

The hosting platforms covered below provide a Rails environment right out of the box. It is certainly possible to run directly on AWS (or somewhere else) with a bit more setup work, but that is beyond the scope of this article. 

## [Engine Yard](http://www.engineyard.com/)

[<img src="{{ site.baseimgurl }}engineyard-ruby-hosting.png" alt="Engine Yard Ruby on Rails Hosting" class="left size-full wp-image-711" />](http://www.engineyard.com/)

_Setup and deploy process:_ After creating an Engine Yard account, setup and deploy is as simple as `gem install engineyard` then `ey deploy` from within the app directory.

_Starter plan:_ Engine Yard offers 500 free compute hours on a High-CPU Medium instance to test out the service.

_Other plans:_ Plans are completely customizable. You choose the number and type of instances, and then pay per hour for instances, plus extra storage and bandwidth costs. Full pricing details are [here](http://www.engineyard.com/products/appcloud/pricing).

_Version Control:_ Must use Git for version control.

_Conclusion:_ Engine Yard&#8217;s pricing structure is geared towards projects that require compute time, not 24/7 availability, making it most appropriate for data crunching. For web apps that need to be available all the time, but may be idle or nearly idle much of the time, another provider will be more cost effective. 

## [Heroku](http://www.heroku.com/)

[<img src="{{ site.baseimgurl }}heroku-ruby-hosting.png" alt="Heroku Ruby on Rails Hosting" class="left size-full wp-image-710" />](http://www.heroku.com/)

_Setup and deploy process:_ Simple git based workflow. `sudo gem install heroku` then `heroku create sushi` will create an app called sushi. Deploying is as easy as `git push heroku master`.

_Starter plan:_ The free starter plan includes one worker (a background process running your code and processing jobs from a queue) and a 5MB shared database.

_Other plans:_ The number of dynos and workers can be adjusted dynamically to handle traffic spikes or provide more proccessing power. Dynos and workers are priced by the hour, and dedicated databases are priced based on the size and number of connections required. See the [full pricing details](http://heroku.com/pricing) for your particular situation.

_Version Control:_ Must use Git for version control.

_Conclusion:_ Heroku&#8217;s free starter plan makes it an ideal choice for bootstrapping a web application and scaling up as needed.

## [Winnie Cloud](http://www.winniecloud.com/)

[<img src="{{ site.baseimgurl }}winnie-cloud-ruby-hosting.png" alt="Winnie Cloud Ruby Hosting" class="left size-full wp-image-712" />](http://www.winniecloud.com/)

_Setup and deploy process:_ Push to a Git repo managed by Winne Cloud. 

_Starter plan:_ Free 30 day trial of the staging environment.

_Other plans:_ Winnie Cloud offers either a production working instance or a staging working instance. PostgreSQL, MongoDB, and Redis are available at extra cost.

_Version Control:_ Must use Git for version control.

_Conclusion:_ It appears that Winnie Cloud started as an internal product of Rails programming shop Ragnarson. It doesn&#8217;t seem to be as mature as the other Ruby on Rails platforms, but might be a good option for those who are looking for both Ruby on Rails consulting and a cloud hosting platform in one package. 

## [DotCloud](http://www.dotcloud.com/)

[<img src="{{ site.baseimgurl }}dotcloud-ruby-hosting.png" alt="Dotcloud Ruby Hosting"  class="left size-full wp-image-712" />](http://www.dotcloud.com/)

_Setup and deploy process:_ After creating a DotCloud account, setup and deploy operations are done via the DotCloud command line interface. The CLI handles setting up the stack, deploy, rollback, and a number of other operations. The CLI integrates with Git and Murcurial. 

_Starter plan:_ DotCloud offers a free starter plan with two services, where a service is a single connection to a stack component. Or if you were lucky enough to get in during the private beta, there is a free VIP plan. 

_Other plans:_ The pro plan at $99 per month allows four services, and a flexible enterprise plan is also available with pricing depending on the requirements of the project.

_Version Control:_ Works with all types of version control, although Git and Mercurial have the best integration with DotCloud&#8217;s CLI. 

_Conclusion:_ DotCloud is a more general platform than the others; it allows developers to mix and match stack components. Currently in beta: Java, PHP, PostgreSQL, Python, Redis, Ruby, and SMTP. There are a number of other components in alpha or on the roadmap for future support. It&#8217;s most appropriate for people who need support for a variety of stack components and don&#8217;t mind running on a beta platform.

## Final Words

Each RoR platform has its particular strength, and picking the right one at the beginning will save headaches and money further down the road. This article covers the technical details of the different cloud platforms, but glosses over other important considerations like the reliability, transparency, and quality of support offered by the platform. 

Please chime in with a comment describing your experiences if you have used any of the above cloud platforms.
