---
id: 207
title: 51 Insanely Useful Emacs Shortcuts
date: 2009-04-08T19:27:32+00:00
author: Jess Johnson
layout: post
description: >
  A reference card of intermediate and advanced GNU emacs and xemacs shortcuts. Become a more productive developer by learning these shortcuts.
permalink: /207/51-insanely-useful-emacs-shortcuts/
categories:
  - 'Books &amp; Tools'
tags:
  - cheat sheet
  - code editor
  - emacs
  - gnu emacs
  - hotkeys
  - refcard
  - reference card
  - shortcuts
  - xemacs
---
Intimate knowledge of your code editor is required to be competent and productive developer. Here is a list of shortcuts anyone on the path to becoming an emacs guru should be familiar with. This shortcut reference card covers mostly intermediate and advanced shortcuts for GNU emacs (most of them will work with Xemacs as well.) I learned some great new shortcuts while making this cheat sheet; I hope they will be helpful to GrokCode&#8217;s readers as well.<!--more-->

## Help

`M-x describe-bindings` Show a list of all the current key bindings. This shows you all available emacs shortcuts and the function invoked by the shortcut.

`F1 f` Type a function name and get a short description of what it does.

`F1 a` Find apropos commands. Entering a search term will give you a list of commands and key bindings containing the search term. Very useful if you are looking for something but don&#8217;t know the exact command.

## Windows & Buffers

`C-x o` Switch to next window

`C-x b` Switch buffers. The default is to switch to the most recent buffer before your current one. TAB TAB will give a buffer completion list.

`C-x C-b` List all open buffers. This list is called the &#8216;buffer ring&#8217;.

`C-x k` Kill the current buffer.

## Searching

`M-%` Interactive string find and replace.

`C-r` String search backwards.

`C-u C-s` Regular expression search.

`M-x find-grep-dired` Search a directory recursively for all files that contain a regular expression.

## Navigation

`C-a` Move to the beginning of the line.

`C-e` Move to the end of the line.

`M-x goto-line` or `M-g g` Goto the indicated line.

`M->` Moves to end of buffer.

`M-<` Moves to start of buffer.

## Regions

`C-Space` Set the mark. This is a marker for the beginning of a region. Moving the cursor to another position will set the end of the region, called the &#8216;point&#8217;.

`C-x h` Select all. Create a region containing the whole buffer.

`C-x C-x` Switch the mark and the point.

`M-h` Set the region to the current paragraph

## Copy & Paste

`M-w` Copy the selected region to the clipboard.

`C-w` Cut the selected region and put the text in the clipboard.

`C-k` Cut from the cursor to the end of the line, putting the text in the clipboard.

`C-y` Paste / yank the most recent text in the clipboard.

## Formatting & Spell Checking

`M-U` Uppercase word.

`M-L` Lowercase word.

`M-$` Check spelling of current word.

`M-x ispell-buffer` Check spelling of current buffer.

`M-Q` Reflow paragraph. When writing text, this will fix up line breaks in the paragraph.

`Shft-Mouse 1` Change font size.

## Coding

`C-c C-c` Comment out region. When using a minor mode that supports it. Most minor modes for programming languages do.

`M-^` Join this line with the previous line; removes the newline between the two lines.

`M-x shell` Start a new shell within emacs.

`M-!` Execute a shell command.

`M-x hexl-mode` Open a buffer in hexadecimal mode.

## Macros

`C-x (` Start macro definition.

`C-x )` End of macro definition.

`C-x e` Execute last defined macro.

`M-n C-x e` Execute last defined macro n times.

## Emacs Lisp

`M-:` Run an an emacs lisp expression in the mini-buffer.

`M-x ielm` Run an interactive emacs lisp interpretor. For an introduction to Emacs Lisp, have a look at [Emergency Elisp](http://steve-yegge.blogspot.com/2008/01/emergency-elisp.html "Emergency Elisp").

## Miscellaneous

`C-x i` Insert the contents of a file at the cursor position.

`C-x C-v` Reload file from disk.

`C-/` Undo.

`C-g` Quit the command currently in the mini-buffer. Useful if you mistype a shortcut and want to start over.

`C-x C-c` Quit emacs.

## Slacking Off

`M-x zone` Start zoning out. After a short idle time, the text in the buffers will go crazy. Useful for keeping you on your toes.

`M-x zone-leave-me-alone` Stop zoning out.

`M-x tetris` Play tetris.

`M-x doctor` Get psychoanalyized by an AI.

`M-x hanoi` Towers of Hanoi.
