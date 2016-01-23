---
id: 207
title: 51 Insanely Useful Emacs Shortcuts
date: 2009-04-08T19:27:32+00:00
author: Jess Johnson
excerpt: This shortcut reference card covers mostly intermediate and advanced shortcuts for GNU emacs (most of them will work with Xemacs as well.) Become a more productive and competent developer on emacs by learning these shortcuts.
layout: post
guid: http://grok-code.com/?p=207
permalink: /207/51-insanely-useful-emacs-shortcuts/
wp_jd_bitly:
  - http://bit.ly/8WYKdd
wp_jd_target:
  - http://grok-code.com/grokcode-dev/207/51-insanely-useful-emacs-shortcuts/
jd_tweet_this:
  - 
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

`<strong>M-x describe-bindings</strong>` Show a list of all the current key bindings. This shows you all available emacs shortcuts and the function invoked by the shortcut.

`<strong>F1 f </strong>`Type a function name and get a short description of what it does.

`<strong>F1 a</strong>` Find apropos commands. Entering a search term will give you a list of commands and key bindings containing the search term. Very useful if you are looking for something but don&#8217;t know the exact command.

## Windows & Buffers

`<strong>C-x o</strong>` Switch to next window

`<strong>C-x b </strong>`Switch buffers. The default is to switch to the most recent buffer before your current one. TAB TAB will give a buffer completion list.

`<strong>C-x C-b</strong>` List all open buffers. This list is called the &#8216;buffer ring&#8217;.

`<strong>C-x k</strong>` Kill the current buffer.

## Searching

`<strong>M-%</strong>` Interactive string find and replace.

`<strong>C-r</strong>` String search backwards.

`<strong>C-u C-s</strong>` Regular expression search.

`<strong>M-x find-grep-dired</strong>` Search a directory recursively for all files that contain a regular expression.

## Navigation

`<strong>C-a</strong>` Move to the beginning of the line.

`<strong>C-e</strong>` Move to the end of the line.

`<strong>M-x goto-line </strong>`or`<strong> M-g g</strong>` Goto the indicated line.

`<strong>M-&gt;</strong>` Moves to end of buffer.

`<strong>M-&lt;</strong>` Moves to start of buffer.

## Regions

`<strong>C-Space</strong>` Set the mark. This is a marker for the beginning of a region. Moving the cursor to another position will set the end of the region, called the &#8216;point&#8217;.

`<strong>C-x h</strong>` Select all. Create a region containing the whole buffer.

`<strong>C-x C-x</strong>` Switch the mark and the point.

`<strong>M-h</strong>` Set the region to the current paragraph

## Copy & Paste

`<strong>M-w</strong>` Copy the selected region to the clipboard.

`<strong>C-w</strong>` Cut the selected region and put the text in the clipboard.

`<strong>C-k</strong>` Cut from the cursor to the end of the line, putting the text in the clipboard.

`<strong>C-y</strong>` Paste / yank the most recent text in the clipboard.

## Formatting & Spell Checking

`<strong>M-U</strong>` Uppercase word.

`<strong>M-L</strong>` Lowercase word.

`<strong>M-$</strong>` Check spelling of current word.

`<strong>M-x ispell-buffer</strong>` Check spelling of current buffer.

`<strong>M-Q</strong>` Reflow paragraph. When writing text, this will fix up line breaks in the paragraph.

`<strong>Shft-Mouse 1</strong>` Change font size.

## Coding

`<strong>C-c C-c</strong>` Comment out region. When using a minor mode that supports it. Most minor modes for programming languages do.

`<strong>M-^</strong>` Join this line with the previous line; removes the newline between the two lines.

`<strong>M-x shell</strong>` Start a new shell within emacs.

`<strong>M-!</strong>` Execute a shell command.

`<strong>M-x hexl-mode</strong>` Open a buffer in hexadecimal mode.

## Macros

`<strong>C-x (</strong>` Start macro definition.

`<strong>C-x )</strong>` End of macro definition.

`<strong>C-x e</strong>` Execute last defined macro.

`<strong>M-n C-x e</strong>` Execute last defined macro n times.

## Emacs Lisp

`<strong>M-:</strong>` Run an an emacs lisp expression in the mini-buffer.

`<strong>M-x ielm</strong>` Run an interactive emacs lisp interpretor. For an introduction to Emacs Lisp, have a look at [Emergency Elisp](http://steve-yegge.blogspot.com/2008/01/emergency-elisp.html "Emergency Elisp").

## Miscellaneous

`<strong>C-x i</strong>` Insert the contents of a file at the cursor position.

`<strong>C-x C-v</strong>` Reload file from disk.

`<strong>C-/</strong>` Undo.

`<strong>C-g</strong>` Quit the command currently in the mini-buffer. Useful if you mistype a shortcut and want to start over.

`<strong>C-x C-c</strong>` Quit emacs.

## Slacking Off

`<strong>M-x zone</strong>` Start zoning out. After a short idle time, the text in the buffers will go crazy. Useful for keeping you on your toes.

`<strong>M-x zone-leave-me-alone</strong>` Stop zoning out.

`<strong>M-x tetris</strong>` Play tetris.

`<strong>M-x doctor</strong>` Get psychoanalyized by an AI.

`<strong>M-x hanoi</strong>` Towers of Hanoi.