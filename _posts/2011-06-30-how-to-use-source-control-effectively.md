---
id: 717
title: How To Use Source Control Effectively
date: 2011-06-30T13:58:29+00:00
author: Jess Johnson
layout: post
guid: http://grokcode.com/?p=717
permalink: /717/how-to-use-source-control-effectively/
categories:
  - 'Tips &amp; Tutorials'
tags:
  - code
  - revision control
  - source control
  - version control
---
There are a number of great version control[1](#footnote_0_717 "The terms &lsquo;version control&rsquo;,  &lsquo;source control&rsquo;, and &lsquo;revision control&rsquo; are used interchangeably here."){#identifier_0_717.footnote-link.footnote-identifier-link} systems out there; the most important thing is to pick one and learn to use it effectively. No matter which source control system you decide to use, there are a number of universal principles that will help you to get the most out of source control.<!--more-->

## _Always_ use source control

There is no reason not to use source control. Even for a solo project. Even for a toy project. Even if you never make mistakes. Just use it. Source control offers so many benefits like rollbacks, code diffs, backups, and commit logs that every project will benefit from it.

## Don&#8217;t break the build

Don&#8217;t commit code if it breaks the build. You don&#8217;t want to force other people to sift through your code looking for the problem that broke the build before they can continue with their own work.

## Commit early, commit often

Don&#8217;t go dark. Committing early and often gives you a backup, an incremental log of progress, easier merges, and lets the team know what you are doing.

## Remove unused code immediately

Don&#8217;t commit code with large blocks of old code commented out or unused, deprecated functions. If you need to get this code back at some point, you can always get it from the repository. Keep the current working copy of the source as clean and cruft-free as possible.

## Keep a good commit log

Leave good comments in the commit log. Searching the commit log should allow you to find which commits implemented a specific feature or fixed a specific bug. Skimming the commit log should provide a good history of the project and give some hints as to it&#8217;s maturity.

## Whitespace

Don&#8217;t commit whitespace, formatting, or code style changes at the same time as other changes. If you must make these types of changes to the code base, commit them separately. This will keep the diffs vastly more readable.

## Minimal Changeset

When doing bugfixes, make the minimal set of changes needed to fix the bug. If a rewrite of a module is really in order, do the rewrite, but err on the side of making the absolute minimal set of changes needed to fix the bug. This way the changelog will clearly reflect the exact source of the bug and the changes needed for the fix.

## One bugfix per commit

Again, keep the changelog clear by doing only one bugfix per commit (unless multiple bugs are very closely related). One bugfix per commit makes rollbacks easier and leaves a clear track of how the bug was fixed that will be valuable later if a regression test fails or if the fix created unintended side effects.

## Notify the team of new commits

Other team members working on the code base should be immediately and automatically notified of any changes that have the potential to affect them. This could be setup in different ways depending on the project and the workflow used by the team. One of the easiest and most effective ways to set this up is an automated email including the commit message and the diff to all members of the team working on that particular module. Notifications keep all team members appraised of the current state of the code and give them a heads up if they are likely encounter problems merging their own code.

## Integrate source control with other tools

Source control should be integrated with other tools used on the project like bug tracking, continuous integration, and IDEs. This makes it easy to cross-reference the commit that fixed a bug, created a bug, or broke the build. Integration with an IDE gives you the option to do source control operations like diff, status, and commit within the IDE without having to drop to the command line or a separate tool.

The above basic principles of version control will make you effective with any type of version control system out there. Have more source control tips? Leave them in the comments. 

<ol class="footnotes">
  <li id="footnote_0_717" class="footnote">
    The terms &#8216;version control&#8217;, &#8216;source control&#8217;, and &#8216;revision control&#8217; are used interchangeably here. [<a href="#identifier_0_717" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
</ol>