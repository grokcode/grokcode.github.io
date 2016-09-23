---
id: 115
title: How To Setup a Windows SVN Repository
date: 2009-01-07T20:24:03+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/115/how-to-setup-a-windows-svn-repository/
permalink: /115/how-to-setup-a-windows-svn-repository/
wp_jd_bitly:
  - http://bit.ly/c7148q
wp_jd_target:
  - http://grok-code.com/grokcode-dev/115/how-to-setup-a-windows-svn-repository/
jd_tweet_this:
  - 
categories:
  - 'Tips &amp; Tutorials'
tags:
  - how to
  - source control
  - subversion
  - svn
  - windows
---
This is a tutorial on how to setup a Subversion (SVN) repository on Windows that allows secure connections over SSH. The tutorial also goes through setting up an SVN client and connecting to the repository. Some basic knowledge of a UNIX based command line will help, but you might be able to muddle through without it.<!--more-->

If you plan on storing the repository on the development machine (normally only useful if you are a lone wolf developer and always use the same development box), this tutorial will be more complicated than you need.

This tutorial was tested with the repository installed on Windows Server 2003, and the SVN client on Windows XP, although the process is pretty much the same on any version of Windows.

## <img class="alignleft" src="{{ site.baseimgurl }}2009/01/cywin-install.png" alt="Cygwin Install Screenshot" />Install Cygwin

Cygwin is linux-like environment for Windows. It gives you a terminal much like you would find on any *nix based system, and is one of my [favorite development tools](http://grokcode.com/6/top-7-development-tools/ "My Favorite Development Tools").

[Download Cygwin](http://www.cygwin.com/), and install it on the server. You can keep all of the defaults for Installation Type, Installation Directory, etc. The only thing you need to change is the packages selected for install. Keep all of the packages that are initially selected, plus select &#8216;openssh&#8217; from the Net category, &#8216;subversion&#8217; from the Devel category, and &#8216;cygrunsrv&#8217; from Admin.

## Install the SSH Daemon

The SSH daemon provides secure communication between the client and server. It will be used to encrypt any updates that are made to the repository.

In order to install it, make sure you are logged in as an Administrator. Open Cygwin and run

<pre><code class="language-bash">ssh-host-config -y</code></pre>

to run the ssh config script.

when it asks for the value of the environment variable CYGWIN, type `ntsec tty`

If you see warnings or errors related to file permissions, run the following lines, then rerun the config script. Note that I&#8217;m no security expert, so please take these directions with a grain of salt.

<pre><code class="language-bash">chmod +x /var
chmod  +rw /etc/group
chmod +rw /etc/passwd</code></pre>

Once `ssh-host-config` finishes with the info message &#8216;Have fun!&#8217; the ssh daemon is configured.

![SSH Host Config Screenshot]({{ site.baseimgurl }}2009/01/ssh-host-config1.png)

Depending on your system, you may run into something like this instead:

![SSH Host Config Screenshot 2]({{ site.baseimgurl }}2009/01/ssh-host-config2.png)

The daemon was successfully configured, but for some reason privilege separation failed. If you are happy with a slightly less secure system, you can go ahead and use it this way. _And if anyone knows how to fix this issue, please let me know._

Go ahead and start it up with

<pre><code class="language-bash">cygrunsrv -S sshd</code></pre>

Test the setup by running

<pre><code class="language-bash">ssh localhost</code></pre>

which should now allow you to log in with your Windows password.

## Create the SVN Repository

Inside of Cygwin, run the following command to create a repository called svn inside the home directory:

<pre><code class="language-bash">svnadmin create /home/svn</code></pre>

If you are restoring the repository from another location, run

<pre><code class="language-bash">svnadmin load /home/svn &lt; &lt;dumpfile-name&gt;</code></pre>

## Setup a Client

Now that the server is setup, lets checkout the code onto a development machine.

Start by installing Cygwin on the dev box. Installing using the default options works fine, and go ahead and select the same packages used in the server installation.

Open cygwin and run

<pre><code class="language-bash">svn co  svn+ssh://&lt;username&gt;@&lt;your server name or IP&gt;/home/svn</code></pre>

Remember to fill in your own details &#8211; here `username` is the username on the server machine.

## Setup Additional Users

You will want to create a separate user for everyone who will be committing to the repository.

Create a new Windows user on the server, here we will create the user &#8216;devel&#8217;. The username can be whatever you choose, but avoiding spaces and punctuation characters in the username might make your life easier down the road, since cygwin can sometimes choke on weird usernames. As a generally good security practice, the new user should **not** be an administrator, it should have limited rights, and it should have a strong password set.

Here are instructions for creating a user for [Windows Server 2003](http://www.visualwin.com/New-User/ "New user in Windows Server 2003").

Now we need to let Cygwin know about the new user. To do so, run these commands:

<pre><code class="language-bash">chmod u+w /etc/passwd
chmod u+w /etc/group
mkpasswd -l &gt; /etc/passwd
mkgroup -l &gt; /etc/group</code></pre>

The user devel will now have access to the repository. Check by running

<pre><code class="language-bash">svn list svn+ssh://devel@&lt;your server name or IP&gt;/home/svn</code></pre>

Thats all there is to it!
