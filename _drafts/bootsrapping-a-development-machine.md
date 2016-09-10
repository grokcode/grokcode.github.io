---
title: Bootstrapping a Development Machine
author: Jess Johnson
permalink: /bootsrapping-a-development-machine/
layout: post
categories:
  - 'Tips &amp; Tutorials'
---


<pre>cd ~/work
git clone git@github.com:grokcode/dotfiles.git</pre>

Then create symlinks to the dotfiles that I need like so:

<pre>ln -s ~/work/dotfiles/.emacs ~/.emacs
ln -s ~/work/dotfiles/.bashrc ~/.bashrc
ln -s ~/work/dotfiles/.gitignore ~/.gitignore</pre>

There are a few nice things about how this is set up.

The softlinks let me change the configuration being used on the system and the files tracked by git at the same time without having the git repository cluttering up my home directory. There is no need to copy files back and forth between home and the git repo, making it quick and easy to modify a config file, test it, commit the changes.

Another nice thing is that you could have the general conf in master, and then use git branches to handle touchups for different workstations.

## Alternatives

I recently started using [puppet](https://puppetlabs.com/) to provision production servers and virtual environments for development. A puppet manifest allows you to make declarations about the state of the machine in a mostly platform independent way. You can declare packages that should be installed, directory structures and files that should exist, services that should be running etc. Puppet then runs the OS specific commands to make your declarations true.

It occurs to me that Puppet could also be used to bootstrap a development machine, and indeed there are some [developers who use that method](https://github.com/leafac/dotfiles). The advantage of using Puppet is that it can be used to manage more than just dotfiles – it can also handle installation and setup of development tools.

I think that unless you frequently change your development machine, the process is too time consuming and fragile to be worth the effort required to get it setup. This is especially true if you tend to upgrade your OS at the same time as you set up a new development machine, because puppet manifests will often need tweaks to handle OS changes. Also, frequently learning new languages or tools would require updates to the puppet manifests to keep them in sync with the actual state of your machine.
