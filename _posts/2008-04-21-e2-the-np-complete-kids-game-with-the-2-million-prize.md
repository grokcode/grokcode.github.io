---
id: 10
title: 'E2: The (NP-Complete) Kids’ Game with the $2 Million Prize'
date: 2008-04-21T11:15:57+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/10/e2-the-np-complete-kids-game-with-the-2-million-prize/
permalink: /10/e2-the-np-complete-kids-game-with-the-2-million-prize/
wp_jd_bitly:
  - http://bit.ly/c3t0MK
wp_jd_target:
  - http://grok-code.com/grokcode-dev/10/e2-the-np-complete-kids-game-with-the-2-million-prize/
jd_tweet_this:
  - 
categories:
  - Fun Projects
tags:
  - C++
  - E2
  - Java
  - NP Complete
  - optimize
---
The [Eternity 2 (E2) puzzle](http://www.amazon.com/gp/product/B000WUFRQU?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B000WUFRQU "Buy Eternity 2") has attracted the attention of puzzle fanatics, computer programmers, and mathematicians for many reasons, not the least of which is the $2 million prize for being the first to solve it. E2 is an edge-matching puzzle with 256 pieces. The general class of edge-matching puzzles is known to be NP-Complete, but it is unknown if there are aspects of E2 that can be exploited to make it tractable. In the spirit of cooperation, a few people have made their automated solvers available online, and I have provided an overview and back-of-the-napkin analysis of two of them.<!--more-->

[<img src="http://grokcode.com/images/eternity2.jpg" alt="Eternity 2" width="160" height="160" class="alignleft" />](http://www.amazon.com/gp/product/B000WUFRQU?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B000WUFRQU "Buy Eternity 2")

## Background

E2 has 256 square pieces that must be placed on a 16&#215;16 grid. Each puzzle piece has 4 edges, each with one of 17 possible patterns, which must match the pattern of the neighbor piece that touches that edge. Each of the edges touching the border must be gray. There is also one hint piece which must be placed on the board at the indicated position and orientation.

The animation below shows a methodical approach to solving a 4&#215;4 puzzle with no hint piece. Pieces are taken from the right side and placed on the board on the left. When a dead end is found and no more pieces can be placed on the board, pieces are removed up until the last decision point and a new piece is tried at that spot. The algorithm you are seeing in action is a backtracker.

<img src="http://grokcode.com/images/e2-final.gif" alt="E2 backtracker" width="470" height="230" />

[<img src="http://grokcode.com/images/eternity2-clue1.jpg" alt="Enternity 2 Clue Puzzle 1" class="alignleft" />](http://www.amazon.com/gp/product/B000XQPREU?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B000XQPREU "Buy Eternity 2 Clue Puzzle 1")

## Clues & Rules

An additional hint is provided for solving each of the 4 clue puzzles, for a total of 5 possible hints. E2 clue puzzles I and III are 6&#215;6, and E2 clue puzzles II and IV are 6&#215;12. Clue puzzles III and IV are only available in the UK as of this writing. It is not required that the E2 solution use these optional hints, and it is suspected that E2 has more than one possible solution.

In order to win the $2 million prize, submit the solution to the Eternity 2 adjudicators by December 31. On the 31st, all entries will be opened and the entry that was submitted first wins the $2 million. Nobody submitted a complete solution in 2008 or 2009, so the competition will continue until December 31, 2010. A smaller prize may be awarded for the highest scoring partial solution if no complete solution was submitted. The [complete rules](http://uk.eternityii.com/competition-rules-eternity-2/ "E2 rules") can be found on the official site.

Sounds easy right? Well&#8230;

[<img src="http://grokcode.com/images/eternity2-clue2.jpg" alt="Eternity 2 Clue Puzzle 2" width="130"  height="130" class="alignleft" />](http://www.amazon.com/gp/product/B000XQNQNO?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B000XQNQNO "Buy Eternity 2 Clue Puzzle 2")

## Solver Implementations

A few solvers have been made available online in the files section of the [E2 Discussion Group](http://games.groups.yahoo.com/group/eternity_two/ "E2 Discussion"). I picked two of the most straightforward solvers and ran benchmarks on them.

The first solver I looked at is Doc Smith&#8217;s C++ solver which is based on a solver by Marc Lebel. Doc&#8217;s solver works by first creating arrays that list the pieces that will have given colors on certain edges. This means that finding a piece with, say a green left edge and a red top edge, requires indexing the 2 dimensional array storing left and top matching pieces with the code for a green edge and the code for a red edge. The solver works by starting at the top left corner and tiling towards the bottom right corner (just like in the animation above), so there is no need for an array that would contain matches for say, only top and bottom edges. If the solver reaches a dead end, it backtracks recursively to the last decision point and tries again. Once the solver reaches the lower right corner, a solution has been found.

Next I looked Joel&#8217;s solver which is a Java port of the C++ backtrack solver written by Doc Smith. These two solvers work the same way; they differ only in the implementation language.

The E2 Discussion Group is very active and contains a lot of information on different solving strategies, so if you are interested in more advanced algorithms, have a look there.

## [<img src="http://grokcode.com/images/eternity2-clue3.jpg" alt="Buy E2 Clue Puzzle 3" width="130" height="130" class="alignleft" />](http://www.amazon.co.uk/Tomy-Eternity-II-Clue-Puzzle/dp/B000Y16ESM/ref=sr_1_4?ie=UTF8&s=kids&qid=1208240417&sr=1-4 "Buy E2 Clue Puzzle 3")Benchmark Results

I ran benchmarks on both solvers to compare their performance. The benchmarks are puzzles similar in design to E2, but of a smaller size. I ran benchmarks on [6&#215;6 with 1 hint](http://grokcode.com/downloads/A6x6With1Hint.txt), [8&#215;8 with 2 hints](http://grokcode.com/downloads/B8x8With2Hints.txt "8x8 benchmark"), and [10&#215;10 with 3 hints](http://grokcode.com/downloads/C10x10With3Hints.txt) puzzles to get an idea of what kind of complexity we can expect from E2. All of the benchmarks were run on a dual core 2.00Ghz Intel with 1 GB of RAM. No compiler optimization flags were used for any of the test runs.

Here is a table giving the mean solution time for each of the solvers (the benchmarks had more than one possible solution, so I used the mean time in the table). On the 10&#215;10 benchmark, I stopped the test after 10 hours. Neither of the solvers had found a solution at the time. The complexity of the puzzle increases exponentially in the number of pieces &#8211; this is to be expected of an NP-Complete problem.

<table class="entry-table">
  <tr>
    <td>
    </td>
    
    <td>
      6&#215;6
    </td>
    
    <td>
      8&#215;8
    </td>
    
    <td>
      10&#215;10
    </td>
  </tr>
  
  <tr>
    <td>
      Doc Smith
    </td>
    
    <td>
      891 msec
    </td>
    
    <td>
      91 min
    </td>
    
    <td>
      10+ hours
    </td>
  </tr>
  
  <tr>
    <td>
      Joel
    </td>
    
    <td>
      790 msec
    </td>
    
    <td>
      107 min
    </td>
    
    <td>
      10+ hours
    </td>
  </tr>
</table>

One mildly surprising result is that the Java solver outperforms the C++ solver. Enough to make a difference solving the 16&#215;16 E2 puzzle? Not likely. At this rate it would take more than a lifetime to find a solution for the 16&#215;16. Improving the solving algorithm will give much better gains than code-level optimizations.

So will you get rich solving E2? Well, somebody will. If this type of challenge interests you, its definitely worth a shot.

## [<img src="http://grokcode.com/images/eternity2-clue4.jpg" alt="Buy E2 Clue Puzzle 4" width="130" height="130" class="alignleft" />](http://www.amazon.co.uk/Tomy-Eternity-II-Clue-Puzzle/dp/B000Y124RW/ref=pd_bxgy_k_h_b_cs_text_b?ie=UTF8&qid=1208240417&sr=1-4 "Buy Eternity 2 Clue Puzzle 4")Resources:

  * [Purchase E2](http://www.amazon.com/gp/product/B000WUFRQU?ie=UTF8&tag=grok-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B000WUFRQU "Purchase E2") from Amazon
  * [Joel’s Java solver](http://grokcode.com/wordpress/wp-content/uploads/eternityii.java "Joel’s Java solver")
  * [Doc Smith’s C++ solver](http://grokcode.com/wordpress/wp-content/uploads/2008/04/eternityiihi06b.zip "Doc Smith’s C++ solver")
  * [E2 discussion group](http://games.groups.yahoo.com/group/eternity_two/ "E2 Discussion")

<small>[Disclaimer: Links to amazon.com are affiliate links.]</small>