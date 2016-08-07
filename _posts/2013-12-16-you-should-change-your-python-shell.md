---
id: 811
title: You Should Change Your Python Shell
date: 2013-12-16T13:09:59+00:00
author: Jess Johnson
layout: post
guid: http://grokcode.com/?p=811
permalink: /811/you-should-change-your-python-shell/
categories:
  - 'Books &amp; Tools'
tags:
  - ipython
  - python
  - shells
---
If you write Python code, switching to IPython is the number one thing you can do to immediately improve your productivity. Bold words, I know. Let&#8217;s look at how IPython can make you a more productive programmer.<!--more-->

If you are mostly a web developer or are new to Python, the [IPython homepage](http://ipython.org/) does not make it obvious how awesome IPython is (even if you don&#8217;t do any scientific computing!). If you have never used IPython before, forget about notebooks, data visualization, embeddable interpreters, and parallel computing. It&#8217;s all great stuff. But just forget about it for now. 

The absolute best thing about IPython is the shell. Here is a standard Python shell. 

<img src="http://grokcode.com/wordpress/wp-content/uploads/python-shell2.png" alt="Python shell" width="693" height="419" class="img-noborder alignleft size-full wp-image-816" />

And below is IPython. They look pretty similar, but IPython has a whole bunch of extras that will save you a vast amount of time and give you an immediate bump in productivity.

<img src="http://grokcode.com/wordpress/wp-content/uploads/ipython-shell.png" alt="IPython shell" width="693" height="419" class="img-noborder alignleft size-full wp-image-813" />

OK so `easy_install ipython[all]` or `pip install ipython` to get started. If any issues crop up, refer to the official [install guide](http://ipython.org/ipython-doc/stable/install/install.html).

Now let&#8217;s look at some of IPython&#8217;s most useful features that are applicable to everyone who uses a Python shell.

## Persistent History

Command history is preserved when IPython is restarted, so you can use the up key to retrieve commands from the previous session. This will cut down on a lot of typing if your workflow looks like this:

  1. Test something in the shell
  2. Use an editor to make some code changes
  3. Exit the python shell
  4. Rerun the python shell so that the new code is loaded
  5. Retype the test code
  6. Test something in the shell again

But actually, if you are using IPython, you won&#8217;t need to restart the python shell either. You can just enable autoreload.

## Automatic Module Reloading

IPython will automatically pull in changes to your code files. To enable it:

    In [1]: %load_ext autoreload
    In [2]: %autoreload 2

The workflow from above now looks like this:

  1. Test something in the shell
  2. Use an editor to make some code changes
  3. Test something in the shell again

If you want autoreload enabled by default, you can edit your IPython profile to contain these lines:

<pre><code class="language-python">c.InteractiveShellApp.exec_lines = []
c.InteractiveShellApp.exec_lines.append('%load_ext autoreload')
c.InteractiveShellApp.exec_lines.append('%autoreload 2')</code></pre>

## Builtin Profiling Tools

IPython comes with some &#8220;magic functions&#8221; to profile execution time and memory.

`%time` times how long it takes to run a statement.

`%timeit` times how long it takes to run a statement, but will average over many runs. It is smart enough to use a lot of runs for statements that don&#8217;t take very long, but only a few runs when execution time is high.

`%prun` gives a breakdown of execution time per function.

`%lprun` gives a breakdown of execution time per line.

`%mprun` gives a breakdown of memory usage per line.

`%memit` gives a breakdown of memory usage averaged over many runs.

`%mprun`, `%lprun`, and `%memit` require some extra dependencies and a bit of configuration to enable, see details [here](http://pynash.org/2013/03/06/timing-and-profiling.html).

<img src="http://grokcode.com/wordpress/wp-content/uploads/ipython-profiling2.png" alt="Execution time and memory profiling with IPython" width="693" height="419" class="img-noborder alignleft size-full wp-image-817" />

## Smart Copy and Paste

You can paste chunks of code directly into IPython and it will properly handle the indentation. Even if each line has leading indents. So, you can copy and paste a few lines from the inside of a function or loop and IPython will ignore the leading indents that aren&#8217;t meaningful, but preserve the ones that are. Use `%paste` and/or `%cpaste`.

## Smart Indentation

IPython will start the next line in the right place when you do a carriage return after a function definition, loop, if statement, etc. This is a nice convenience that saves a few keystrokes.

## Tab Completion

You can use tab completion to explore objects and autocomplete keywords. 

<img src="http://grokcode.com/wordpress/wp-content/uploads/ipython-tab-complete2.png" alt="IPython tab completion" width="693" height="419" class="img-noborder alignleft size-full wp-image-818" />

## Just type exit

In the standard Python shell, you have to type `exit()`, but in IPython if you forget the parens and just say `exit`, that&#8217;s fine too. It&#8217;s a small detail, but details matter.

## More

IPython has loads of other features, some will likely be useful to you, others maybe not so much unless you do scientific computing. This article just touched the very tip of the iceberg. To learn more about what IPython can do, have a look at [Learning IPython for Interactive Computing and Data Visualization](http://www.amazon.com/gp/product/1782169938/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1782169938&linkCode=as2&tag=grok-20) and the [IPython Cookbook](https://github.com/ipython/ipython/wiki/Cookbook%3A-Index).