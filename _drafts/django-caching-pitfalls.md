---
title: Django Caching Pitfalls and Workarounds
author: Jess Johnson
permalink: /django-caching-pitfalls/
layout: post
categories:
  - 'Tips &amp; Tutorials'
---



Setting up caching in Django is a pretty quick and painless process, but for the majority of sites Django’s default per-site caching won’t actually gain you very much, or could even be a performance hit. Two extremely common cases that break per-site (and per view) caching are using any Javascript that drops a cookie (like Google Analytics which is currently used on 50% of all sites on the web), or if you have forms on most of your pages (this could be a login form, a comment form, a subscribe to newsletter form, or any other type of form).<span id="more-804"></span>

Before getting into the specifics of Django’s caching, let’s do a whirwind review of how caching works in general and in Django.

## Quick review of caching

### Django cache backends

Django can store it’s cache in the filesystem, the database, local memory, use a dummy cache for development, or use a custom cache backend. But by far the most common solution is to use memcached.

### Django caching vs. upstream caching

There are different levels of caching that we need to be aware of. First off, there is a browser cache. Between the browser and and your webserver could be other caches controlled by different entitities like your visitor’s company network or ISPs. We can affect how and when these upstream caches store pages by setting the response headers.

Then there is the cache that Django uses to speed up page rendering. Django’s setup for per-site caching described in the [official tutorial](https://docs.djangoproject.com/en/dev/topics/cache/#the-per-site-cache) does not use any inside information about the application to do caching. It looks at the same caching headers used by upstream caches to determine which pages can be cached. This makes the caching framework very robust and unlikely to ever incorrectly serve a cached page, but it also means that in many common cases, per-site caching won’t be helpful.

### How and where to cache in Django

#### Per-site / Full page caching

XXX View caching here ?? XXX

Looking at various benchmarks around the web [like this one from Cody Soyland](http://codysoyland.com/2010/jan/17/evaluating-django-caching-options/), which shows a relatively simple nginx and memchached setup that is mores than 185 times faster than vanilla Django, it is pretty easy to get excited about the benefits of full page caching. A full page caching strategy offers the best performance, but also comes with the most pitfalls.

#### Other ways to cache

Instead of caching the entire page, it is possible to cache smaller chunks of the response. The {% raw %}`{% cache %}`{% endraw %} template tag will cache template fragments, and you can also make use of the low level cacheing api to cache expensive computations like database queries.

To determine what should be cached: profile, identify the bottleneck, cache that piece, rinse, repeat. Cacheing these smaller pieces tends to be less error prone since there isn’t much going on behind the scenes.

## Monitoring and troubleshooting the cache

Before getting started,

### Log errors

A mistake when setting up caching can lead to broken forms due to invalid CSRF token. This problem won’t show up unless you have multiple users accessing the site at the same time, and is invisible to unit testing. These errors aren’t logged by default. So for example if you launch a site with a misconfigured cacheing, you likely won’t even find out about it until you start getting emails from people who aren’t able to create an account or log in. (Yes, this happened to me!)

So let’s log all CSRF errors:

In `settings.py` add the following line `CSRF_FAILURE_VIEW = 'caching.views.csrf_failure'`.

Then in `caching/views.py`:

<pre lang="python">from django.views import csrf
def csrf_failure(request, reason=""):
    logging.error("CSRF error. Reason: %s" % reason)
    return csrf.csrf_failure(request, reason)</pre>

### How to see what memcached is doing

Once you have memcached installed, here is a handy command that will show you cache sets, gets, hits, misses, and a other useful stats in realtime:

`XXX`

### Measure all the things!

Before enabling caching, get some benchmarks so you can see how any changes to your caching setup affect performance. There are lots of tools out there for this. I like [blitz.io](http://blitz.io) for initial benchmarking, and [New Relic](https://newrelic.com/) for ongoing monitoring.

## Common caching problems and their workarounds  

### Forms and CSRF protection

A fairly common case is for a web app to have a login form on every page. Or sometimes there will be a comment form or newsletter subscribe form on every page. Pages with forms on them cannot be cached without some special work.

I won’t go into all of the details about CSRF protection, but [the wikipedia page](https://en.wikipedia.org/wiki/Cross-site_request_forgery) is a great starting point. The gist is that each form that is submitted should have a unique token for each user (even if the user is anonymous) in order to prevent attacks.

Django comes with CSRF protection out of the box, but it breaks caching on all pages with forms. Or more accurately, caching will still work, but since each user has a unique token in the form, they will have a different page in the cache. So to get a cache hit, the same user will have to visit the same page more than once. This generally is not that useful.

Possible solutions are edge-side-includes, two-phase-render, and/or JS/AJAX fetch. XXX See if submiting the form with AJAX solves this problem.

XXX Get the solution and write about it.

### Google analytics and Cookies

### Sessions
