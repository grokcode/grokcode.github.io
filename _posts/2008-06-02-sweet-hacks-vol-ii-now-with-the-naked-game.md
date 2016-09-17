---
id: 19
title: Sweet Hacks Vol II
date: 2008-06-02T22:19:30+00:00
author: Jess Johnson
layout: post
description: >
  This is Volume II of the sweet hacks series. This edition covers Star Wars, Twitter, Rubik's cubes, Webcams, Pong, Legos, and more.
permalink: /19/sweet-hacks-vol-ii-now-with-the-naked-game/
categories:
  - Sweet Hacks
tags:
  - Sweet Hacks
---
Welcome to Volume II of the sweet hacks series. A sweet hack can be a clever piece of code, an innovative way of solving a technical problem, or pretty much whatever strikes me as cool. This edition includes Star Wars, Twitter, Rubik&#8217;s cubes, Webcams, Pong, Legos, and The Naked Game &#8211; with such a high concentration of geekiness mixed in with a little naked code you really can&#8217;t go wrong. Read on to get the full scoop and nominate your own sweet hack for the next edition.<!--more-->

<img src="http://grokcode.com/wordpress/wp-content/uploads/2008/05/wikipedia.png" alt="wikipedia.png" width="130" height="130" class="alignleft" /><span class="h2"><a href="http://www.chrisharrison.net/projects/wikiviz/index.html">WikiViz Graph Renderer</a></span>

by Chris Harrison

WikiViz is a Java program that renders graphical representations of graphs containing nodes and edges. In this case, the nodes are Wikipedia category pages and the edges are links between pages. The algorithm works by first placing each node, and then iteratively moving strongly linked nodes closer together and springing weakly linked nodes farther apart. Overlapping nodes are nudged away from each other by a different process. WikiViz can be used on other datasets such as related books in Amazon.

* * *

<img src="http://grokcode.com/wordpress/wp-content/uploads/2008/06/twitter2.png" alt="twitter" width="130" height="130" class="alignleft" /><span class="h2"><a href="http://tech.shantanugoel.com/2008/05/14/keep-tab-on-home-security-with-a-webcam-and-twitter.html" title="Home security via twitter and a webcam">Home Security Via Twitter and a Webcam</a></span>

by Shantanu Goel

Shantanu walks through an installation of Motion, a FOSS software motion detector program for Linux. Motion comes with a small web server and can be configured to publish images to the web whenever motion is detected. It also has the capability to draw a handy box around whatever part of the frame moved. The tutorial provides a choice of 3 different commands that will send you a Twitter update whenever motion is detected: curl, wget, or a custom Perl script. Catch burglars. Or just see what your cats do all day.

* * *

<img src="http://grokcode.com/wordpress/wp-content/uploads/2008/05/star-wars.png" alt="star-wars.png" width="130" height="130" class="alignleft" /><span class="h2">Star Wars on the Command Line</span>

by [Simon Jansen](http://www.asciimation.co.nz/) (ASCII Artwork) and [blinkenlights.nl](http://www.blinkenlights.nl/services.html) (Telnet availability)

Simon wrote the asciimation, which is an animation created by displaying frames of ASCII art one after another. Each frame of Star Wars ASCII art was hand made, and is 67 characters wide and 17 high. The animation is an ongoing (but sporadic) project started in 1997. The animation is currently the first 18 minutes of the movie and contains 15,953 frames which are displayed at 15 frames per second. blinkenlights.nl was kind enough to make Simon&#8217;s animation available over telnet.

<pre><code class="language-bash">telnet towel.blinkenlights.nl</code></pre>

* * *

<img src="http://grokcode.com/wordpress/wp-content/uploads/2008/05/cube.png" alt="Rubik's Cube Solver" width="130" height="130" class="alignleft" /><span class="h2"><a href="http://jpbrown.i8.com/cubesolver.html">Lego Rubik&#8217;s Cube Solver</a></span>

by JP Brown

The solver first identifies the initial state of the cube using the camera and color recognition software written in VB5 (source available on JP Brown&#8217;s page). It then calculates a sequence of moves that will solve the cube. The move sequence algorithm was written by Mike Reid and later ported to Visual C++ for use with this project. It is guaranteed to solve the cube in 40 moves or less, but the normal case is around 20 moves. The Lego solver then uses the green or yellow grippers to rotate cube faces, or together with the blue gripper disengaged they can roll the entire cube 90 degrees. The blue gripper keeps the cube stabilized while the other grippers are rotating faces, and it can be used to spin the entire cube by 90 degrees.

* * *

<img src="http://grokcode.com/wordpress/wp-content/uploads/2008/05/pong.png" alt="Pong" width="130" height="130" class="alignleft" /><span class="h2"><a href="http://www.retrodev.co.uk/MiscGames/NakedGame/TheNakedGame.html">The Naked Game</a></span>

by RetroDev Games

The Naked Game is a Flash animation that pits two primitive artificial intelligences against each other in a game of Pong. The catch is that the Pong code controlling the mechanics of the game is visible below the board, and lines of code can be disabled and re-enabled to see the effect on the game in real time. The Naked Game is billed as the first piece of online conceptual video game art &#8211; built to explore the themes of freedom, restriction, and frailty. I&#8217;m not sure about all that, but it is a damn sweet hack.

* * *

If you just can&#8217;t get enough, view the [full Sweet Hacks series](http://grokcode.com/category/archives/sweet-hacks/) for more hacks. If you would like to nominate your own sweet hack for the next issue, send an email to jess [AT] grokcode.com with a short description of the hack and a link. Or if you are a del.icio.us user, tag the page “for:grokcode” to put it into my “links for you section.” Sweet hacks should have a dedicated web page with an in-depth description of how they work to be included.
