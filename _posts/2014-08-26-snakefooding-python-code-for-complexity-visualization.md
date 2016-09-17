---
id: 864
title: Snakefooding Python Code For Complexity Visualization
date: 2014-08-26T13:51:03+00:00
author: Jess Johnson
layout: post
description: >
  The snakefood tool can create beautiful visualizations of Python codebases. Here are graphs for some notable open source projects written in Python.
permalink: /864/snakefooding-python-code-for-complexity-visualization/
categories:
  - 'Books &amp; Tools'
tags:
  - bottle
  - celery
  - complexity
  - django
  - flask
  - ipython
  - mercurial
  - pyramid
  - python
  - requests
  - RQ
  - snakefood
  - twisted
---
[Snakefood](http://furius.ca/snakefood/) is a tool written by Martin Blais to create Python dependency graphs. Combined with GraphViz, snakefood can create beautiful visualizations of Python codebases. Here are graphs for some notable open source projects written in Python.<!--more-->

## Python Web Frameworks

The different development philosophies of Bottle, Django, Flask, and Pyramid are apparent by looking at their snakefood graphs. 

### Bottle

Bottle is a fast and simple micro framework for Python web applications.

<img src="http://grokcode.com/wordpress/wp-content/uploads/bottle.png" alt="bottle" width="756" height="584" class="alignleft size-full wp-image-866" />

<small><a href="https://github.com/defnull/bottle">Bottle</a> release 0.12.7</small>

### Django

Django is a batteries-included web framework for perfectionists with deadlines.

<img src="http://grokcode.com/wordpress/wp-content/uploads/django.png" alt="django" width="756" height="584" class="alignleft size-f
ull wp-image-865" />
  
<small><a href="https://github.com/django/django">Django</a> release 1.7c3</small> 

### Flask

Flask is a microframework for Python.

<img src="http://grokcode.com/wordpress/wp-content/uploads/flask.png" alt="flask" width="756" height="584" class="alignleft size-full wp-image-869" />

<small><a href="https://github.com/mitsuhiko/flask">Flask</a> release 0.10.1</small> 

### Pyramid

Pyramid is a small, fast, down-to-earth, open source Python web framework. It makes real-world web application development and deployment more fun, more predictable, and more productive.

<img src="http://grokcode.com/wordpress/wp-content/uploads/pyramid.png" alt="pyramid" width="756" height="584" class="alignleft size-full wp-image-872" />

<small><a href="https://github.com/Pylons/pyramid">Pyramid</a> release 1.5.1</small>

## Queueing Implementations

Hat tip to Sylvain Zimmer for this deck on [switching from Celery to RQ](http://www.slideshare.net/sylvinus/why-and-how-pricing-assistant-migrated-from-celery-to-rq-parispy-2) which was how I first found out about snakefood.

### Celery

Celery is a complex feature-rich distributed queueing implementation. 

<img src="http://grokcode.com/wordpress/wp-content/uploads/celery.png" alt="celery" width="756" height="584" class="alignleft size-full wp-image-867" />

<small><a href="https://github.com/celery/celery">Celery</a> release 3.0.20</small>

### RQ

RQ is a simple Python library for queueing jobs and processing them in the background with workers.

<img src="http://grokcode.com/wordpress/wp-content/uploads/rq.png" alt="rq" width="756" height="584" class="alignleft size-full wp-image-874" />

<small><a href="https://github.com/nvie/rq">RQ</a> release 0.4.6</small> 

## Other Python Codebases

For curiosity&#8217;s sake I ran snakefood on a few other notable Python codebases.

### Twisted

Twisted is an event-based framework for internet applications.

<img src="http://grokcode.com/wordpress/wp-content/uploads/twisted.png" alt="twisted" width="756" height="584" class="alignleft size-full wp-image-875" />

<small><a href="https://github.com/twisted/twisted">Twisted</a> release 14.0.0</small> 

### Mercurial

Mercurial is a distributed source control management tool.

<img src="http://grokcode.com/wordpress/wp-content/uploads/mercurial.png" alt="mercurial" width="756" height="584" class="alignleft size-full wp-image-871" />

<small><a href="http://mercurial.selenic.com/">Mercurial</a> release 3.1</small>

### Requests

Requests is HTTP requests for humans. It is frequently mentioned as an example of an elegant, Pythonic codebase.

<img src="http://grokcode.com/wordpress/wp-content/uploads/requests.png" alt="requests" width="756" height="584" class="alignleft size-full wp-image-873" />

<small><a href="https://github.com/kennethreitz/requests">Requests</a> release 2.3.0</small>

### IPython

IPython is an alternative to the standard Python shell. If you aren&#8217;t using IPython, you should be. [Here&#8217;s why IPython is awesome](http://grokcode.com/811/you-should-change-your-python-shell/).

<img src="http://grokcode.com/wordpress/wp-content/uploads/ipython.png" alt="ipython" width="756" height="584" class="alignleft size-full wp-image-870" /><small><a href="https://github.com/ipython/ipython">IPython</a> release 2.2.0</small>

## What does this mean?

Snakefood graphs are helpful to visualize both the approximate size of a codebase and the level to which concerns are separated. As a measure of code complexity, snakefood graphs show more information than lines of code (which is not that great of a metric), but at the cost of introducing more room for interpretation than a strictly numeric metric.

The other problem with using snakefood graphs as a measure of code complexity is that it looks at code at the file level. A well-organized codebase containing many small files will look more complex than a codebase with a few very large but extremely long, complex files. Code with high testing coverage also tends to look more complex since the tests are dependent on so many parts of the code. Test and documentation modules were not included in any of the graphs above for this reason.

In cases where a more careful measure of code complexity is required, something like [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) is more appropriate. The graphs created by snakefood are actually similar to what would be used to compute cyclomatic complexity as applied to files instead of functions or classes which is the more usual way to do it.

Instead of using snakefood as a tool for visualizing complexity, the creator of snakefood uses it more to prevent unnecessary dependencies from creeping into the code:

> Producing pretty graphs is fun, but I found the most leverage of it when I try to make my code simpler, I generate the graph and inspect unexpected dependencies and try to refactor my code to simply the dependency graph as much as possible (see furius.ca/beancount for a recent example). Enforcing rules can be done by writing a custom script against the snakefood output, as it&#8217;s very easy to accidentally introduce unwanted dependencies. I think the result is code that is better organized at a high level. <cite>&#8211;Martin Blais</cite>

So snakefood graphs are are (sometimes) beautiful. They are a fairly quick ad hoc way of visualizing code complexity, and the snakefood output can be used to help identify and enforce dependency relationships. All in all, snakefood is a pretty awesome tool to have in your Python toolbox.
