---
title: Why Move From WordPress to Jekyll?
author: Jess Johnson
layout: post
description:
categories:
  - 'Extras'
---


GrokCode has officially been a Jekyll site for a few months now. Why move from WordPress to a static Jekyll site hosted on GitHub Pages? Lots of reasons!<!--more-->


## The Good

A Jekyll site offers a number of advantages versus a WordPress site. One of the biggest wins is being able to switch from a shared hosting environment running WordPress to a static site hosted by GitHub.

Static sites are faster than dynamic sites, and GitHub's architecture has better uptime, a faster response rate, and is more scalable than shared hosting. It is also more hands off than managing a cloud hosted server. According to Pingdom, after moving from Bluehost to GitHub Pages, average response rates went from ~900ms to ~375ms, and there has been 0 downtime since the switch. This is pretty awesome, and the cherry on top is that GitHub Pages is free versus the $10 a month I was paying for Bluehost.

![GitHub uptime and response rate]({{ "/assets/img/github-uptime.png" | absolute_url }})

Another plus is I said goodbye to the last PHP environment I was responsible for maintaining. Sayonara PHP! After using WordPress on grokcode.com for nearly 10 years (wow!), I had accumulated a mishmash of custom plugins and PHP code. Moving to Jekyll was a great way to clean house and start fresh with Ruby and Liquid Templates. Unfortunately, I lost a few minor features along the way, but it looks like many of them are fixable and I'm hoping to implement solutions eventually.

Moving to a git workflow that uses all of my regular development tools feels a lot more natural than editing in WordPress. Having templates, posts, assets, comments, and configuration for the site all under source control in one git repo is a nice way to organize things and has the bonus effect of improving my GitHub vanity metrics.

What can I say, I love fake internet points!

![GitHub fake internet points]({{ "/assets/img/github-points.png" | absolute_url }})

## The Bad

There is a lot to love about a Jekyll site running on GitHub Pages, but I ran into a few drawbacks too.

### Customization takes time

First, switching does take time. The whole process took me several months of wall time, but it was a backburner project that I sometimes let sit for weeks or more. The most time consuming part was porting my existing WordPress theme to Jekyll instead of using one of the many off-the-shelf [Jekyll Themes](http://jekyllthemes.org/). This was a good way to learn liquid templating and level up my [Sass](http://sass-lang.com/) skills though, so it was worth it. Plus I was able to keep the same look and feel.

### Some features are not straightforward

Most of the features I used with WordPress can also be done with Jekyll, but often something that takes a few clicks in WordPress requires extensive customization to handle in Jekyll. One example is pinging aggregators when a new post is published. There is a [way to do this](https://natelandau.com/how-to-notify-services-when-post-jekyll/), but it requires a custom Rakefile to generate the site instead of having GitHub do it.

Another drawback specific to GitHub Pages with custom domains is that it requires a bit of trickery and a third-party service like Cloudflare to use SSL. There is a [good tutorial from Jonathan Petitcolas](https://www.jonathan-petitcolas.com/2017/01/13/using-https-with-custom-domain-name-on-github-pages.html) on setting that up. This is yet another item for my todo list.

### Comments

The next big missing piece is a comment system. The most common solution is a JavaScript commenting system like Disqus, but the appearance and functionality isn't customizable to the level I was looking for, and the import of existing comments was painful. Also having the site comments live on, and be controlled by, a third-party service didn't sit right with me.

<img class="alignleft" src="{{ site.baseimgurl }}staticman-logo.png" alt="staticman"/>

Enter [Staticman](https://staticman.net/). The comment form is set up to POST to the Staticman service, which will then open a pull request on GitHub with the content of the comment in a format that the template can display. This is very cool! But...I'm currently looking at **_293 PRs for spam comments_** that I need to clean out. I tend to get a few of these a day, so it really needs a more robust solution. Staticman does have support for [akismet](https://en.wikipedia.org/wiki/Akismet), but unfortunately at the moment it requires running your own Staticman instance.

Migrating existing WordPress comments was possible after writing [wordpress-to-staticman](https://github.com/grokcode/wordpress-to-staticman), a small conversion tool.

Staticman also supports more advanced features that I have yet to set up like threaded comments and email notifications for replys. Again, this requires some changes to my templates and configuration that take more time and technical fortitude to set up than they do with WordPress.


## Was it worth it?

Definitely.


#### Pros:
1. Better uptime
1. More scalable
1. Cheaper
1. No more PHP (yay)
1. Everything in source control
1. Improves vanity metrics


#### Cons:
1. Switching takes time
1. Custom code or configuration required for many features
1. Comment spam


The improved performance, uptime, cost, and workflow far outweigh the cons. Plus I had a chance to learn a few things. GrokCode is happily a static Jekyll site hosted on GitHub pages.
