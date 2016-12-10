---
id: 792
title: 'Deploy with &#8216;Git Push&#8217;'
date: 2012-11-05T07:08:29+00:00
author: Jess Johnson
layout: post
guid: http://grokcode.com/?p=792
permalink: /792/deploy-with-git-push/
categories:
  - 'Tips &amp; Tutorials'
tags:
  - deploy
  - devops
  - django
  - fab
  - git
  - python
---
Single command deploys are awesome. When setting up a testing or production server, I always setup a script to deploy in a single command because it makes life easier and encourages frequent deploys.<!--more-->

There are many different ways of setting up one click deploys. This tutorial covers how to setup a git postcommit hook that deploys on `git push prod`, which is pretty simple to get started with, but won&#8217;t scale well once you start running multiple app servers. For alternatives, you might have a look at [Fabric](http://docs.fabfile.org/en/1.4.3/index.html) or [Capistrano](http://capistranorb.com/).

## Setup the git repo on the server

If you don&#8217;t already have `git` installed on the server, `ssh` in and do a 

```
sudo apt-get install git
```

Now we want to create a git user:

```
sudo adduser \
    --system \
    --shell /bin/sh \
    --gecos 'git version control' \
    --group \
    --disabled-password \
    --home /var/git \
    git
```

And append your ssh public key to the git user&#8217;s list of authorized keys located at `/var/git/.ssh/authorized_keys`, creating the file if necessary.

Now let&#8217;s create the repository:

```
cd /var/git
sudo -u git mkdir <repo-name>.git
cd <repo-name>.git
sudo -u git git init --bare
```

The repository here is bare so that it can accept pushes. See this [discussion of bare vs. non-bare repos](http://www.bitflop.com/document/111) if you are interested in learning more.

## Create a hook

OK so now we want to create the script that will run after a `git push` is received.

Create a file called `/var/git/<repo-name>.git/hooks/post-receive` and give it these contents:

```
#!/bin/bash
export GIT_WORK_TREE=/var/www/<app-name>/project/
git checkout -f
```

The above assumes that your server is setup with `/var/www/<app-name>/project/` as the location where your app server will be looking for your code files.

Add execute permissions and make sure it is owned by git:

```
sudo chmod u+x hooks/post-receive
sudo chown git:git hooks/post-receive
```

## Handle permissions

The post receive script will be run as git, so we need to make sure that the git user has permissions to write to the `GIT_WORK_TREE`, and also that the server can read and write from those directories. To handle this, lets make git a member of the nginx group, and then have the post receive script touch up the file permissions after checkout.

```
sudo usermod -a -G nginx $USER
```

Then edit the script to look like this:

```bash
#!/bin/bash

# Checkout the repo.
export GIT_WORK_TREE=/var/www/<app-name>/project/
git checkout -f

# Fix up permissions.
cd /var/www/<app-name>;
chmod -R g+w project/*
chown -R git:nginx project/*
```

## Prepare development box

Now on your development machine, add the new remote repository and push to it:

```
git remote add prod ssh://git@<server>/var/git/<repo-name>.git
git push prod master
```

## Other deploy tasks

Often there will be other tasks that have to happen during the deploy. Here is an example of another post-receive hook script that I use for one of my Django projects. It collects the static files to prepare them to be served via nginx, runs the database migrations, and installs any new python requirements. 

``` bash
#!/bin/bash

# Checkout the repo.
export GIT_WORK_TREE=/var/www/<app-name>/project/
git checkout -f

# Fix up permissions.
cd $GIT_WORK_TREE
chmod -R g+w *py
chown -R git:nginx *py

source ../env/bin/activate

# Collect static files
./manage.py collectstatic --noinput -v 0

# Handle DB Migrations
./manage.py syncdb --migrate -v 0

# Update requirements
pip install -q -r requirements.txt

deactivate
```

So there it is &#8211; a quick way to setup one touch deploys with git.
