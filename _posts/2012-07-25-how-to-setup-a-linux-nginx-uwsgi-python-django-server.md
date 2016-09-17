---
id: 784
title: How to Setup a Linux, Nginx, uWSGI, Python, Django Server
date: 2012-07-25T21:45:12+00:00
author: Jess Johnson
layout: post
description: >
  Tutorial to set up a web application and database server to run Django apps.
permalink: /784/how-to-setup-a-linux-nginx-uwsgi-python-django-server/
categories:
  - 'Tips &amp; Tutorials'
tags:
  - django
  - linux
  - nginx
  - postgres
  - precise pangolin
  - production server
  - python
  - ubuntu
  - uwsgi
---
This is a tutorial for setting up a Linux, Nginx, uWSGI, Python, Django server with a PostgreSQL database. This is the easy, straightforward approach to server setup and deployment. The intended audience is developers or teams who need to get an application or two running in production without too much hassle.<!--more-->

If you need to oversee multiple servers or you are handling a large number of applications, the limitations of the setup described here will start to show through. [Here](http://hynek.me/articles/python-app-deployment-with-native-packages/) is an example of a much more complex deployment workflow that is more appropriate reading for dedicated DevOps people. 

## General server setup

I&#8217;m using [Linode](http://www.linode.com/?r=e748550930d0390f86a171bc3465ce8bc0e211a6) running Ubuntu 12.04 LTS, but you should be able to adapt this tutorial to other hosts and distros as needed.

Before getting started, take steps to update and secure the server. Security is beyond the scope of this article, but if you don&#8217;t know where to start, have a look at [this tutorial](http://library.linode.com/securing-your-server).

## Install uWSGI

Let&#8217;s get started by installing uWSGI. `ssh` into the server and

<pre><code class="language-bash">sudo apt-get install uwsgi uwsgi-plugin-python</code></pre>

Create a user to run uWSGI:

<pre><code class="language-bash">sudo useradd -c 'uwsgi user' -g nginx --system \
--no-create-home --disabled-login --disabled-password uwsgi</code></pre>

Create an upstart configuration file at `/etc/init/uwsgi.conf` which looks like this:

<pre><code class="language-bash">description "uWSGI"
start on runlevel [2345]
stop on runlevel [06]

respawn

exec uwsgi --master --processes 4 --die-on-term --uid uwsgi --gid nginx \
--socket /tmp/uwsgi.sock --chmod-socket 660 --vhost --logto /var/log/uwsgi.log \
--plugins python</code></pre>

## Install Nginx

The version of Nginx provided in the official Ubuntu repository is a bit outdated, so we are going to use the latest stable package from the Nginx repository. If you are on Ubuntu, just follow the instructions below, but if you are on another distro or run into trouble, have a look at the [official install guide](http://nginx.org/en/download.html). 

First we add the key

<pre><code class="lanugae-bash">wget http://nginx.org/keys/nginx_signing.key
sudo apt-key add nginx_signing.key</code></pre>

Then open up the `/etc/apt/sources.list` file and append the following:

<pre><code class="language-bash">deb http://nginx.org/packages/ubuntu/ precise nginx
deb-src http://nginx.org/packages/ubuntu/ precise nginx</code></pre>

If you aren&#8217;t using Ubuntu 12.04, change `precise` to the the codename for your Ubuntu version.

Then install Nginx with:

<pre><code class="language-bash">sudo apt-get install nginx</code></pre>

<img src="http://grokcode.com/wordpress/wp-content/uploads/Screenshot-Welcome-to-nginx-Chromium1.png" alt="Welcome to Nginx screen" width="400" height="391" class="size-full wp-image-791" />

Nginx is already running. To verify, open your server&#8217;s ip address in a browser, and you should see a &#8216;Welcome to nginx!&#8217; screen.

## Nginx config

The webapp is going to live at `/var/www/<app-name>/`. Here is what the directory tree will look like when we finish:

    /var/www/<app-name>/
        |-- env/                    The virtual env
        |-- project/                The Django project files
            |-- <apps>/
            |-- <project>/
                |-- wsgi.py
            |-- requirements.txt    Pip project dependency list
        |-- static/                 Static files to be served by nginx     

So let&#8217;s setup that directory structure.

<pre><code class="language-bash">sudo mkdir /var/www/&lt;app-name&gt;
sudo mkdir /var/www/&lt;app-name&gt;/project
sudo mkdir /var/www/&lt;app-name&gt;/static</code></pre>

Now to setup the virtual environment for our application:

<pre><code class="language-bash">sudo apt-get install python-pip python-setuptools
pip install virtualenv
cd /var/www/&lt;app-name&gt;
virtualenv env</code></pre>

Now we need to fix some permissions so that uWSGI can read scripts and write the .pyc files:

<pre><code class="language-bash">sudo usermod -a -G nginx $USER
sudo chown -R $USER:nginx /var/www/&lt;app-name&gt;/
sudo chmod -R g+w /var/www/&lt;app-name&gt;/</code></pre>

Create the file `/etc/nginx/conf.d/<app-name>.conf` with these contents: 

<pre class="line-numbers"><code class="language-bash">server {
    listen          80;
    server_name     $hostname;
    location /static {
        alias /var/www/&lt;app-name&gt;/static;
    }
    error_page   404              /404.html;
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
    location / {
        include         uwsgi_params;
        uwsgi_pass unix:/tmp/uwsgi.sock;
        uwsgi_param UWSGI_PYHOME /var/www/&lt;app-name&gt;/env;
        uwsgi_param UWSGI_CHDIR /var/www/&lt;app-name&gt;/project;
        uwsgi_param UWSGI_MODULE &lt;project-name&gt;.wsgi:application;
    }      
}</code></pre>

Don&#8217;t forget to swap out `<app-name>` for the name of your app in lines 5, 15, and 16, and use your own project name on line 17.

In this configuration, nginx will serve files in the static directory, but pass off everything else to uWSGI.

Now let&#8217;s move the default config out of the way, so the new config can take it&#8217;s place.

<pre><code class="language-bash">cd /etc/nginx/conf.d
sudo mv default.conf default.conf.bak</code></pre>

OK let&#8217;s start things up:

<pre><code class="language-bash">sudo service uwsgi restart
sudo service nginx restart</code></pre>

<img src="http://grokcode.com/wordpress/wp-content/uploads/Screenshot-The-page-is-temporarily-unavailable-Chromium-1.png" alt="uWSGI error screen" width="400" height="391" class="size-full wp-image-790" />

If everything has be setup properly so far, navigating to the IP address should now show a uWSGI error.

## Install the Django app

Now install your Django app into `/var/www/app-name/project/` For now, just get a clean copy out of source control and `scp` it to the server, or grab it directly from source control while on the server. Later, you should setup a deployment script to automate this, but for now let&#8217;s just get the app running.

In this case, I am keeping my code in a Bitbucket git repository, and I want to pull the code directly from Bitbucket to the server. So on the Bitbucket site, I create a new user with read only permissions on the code repository. Then I create a new ssh key on the server 

<pre><code class="language-bash">ssh-keygen -t rsa -C "&lt;email address&gt;"</code></pre>

and add it to the Bitbucket account for the new user by uploading the `id_rsa.pub` file.

Now to install git 

<pre><code class="language-bash">sudo apt-get install git</code></pre>

And pulling the source code out of the repository now looks like this:

<pre><code class="language-bash">cd /var/www/&lt;app-name&gt;/project/
git archive --format=tar --remote=ssh://git@bitbucket.org/&lt;username&gt;/&lt;repo name&gt;.git master | tar -xf -</code></pre>

Then fix up any permissions issues again:

<pre><code class="language-bash">sudo chown -R $USER:nginx /var/www/&lt;app-name&gt;/
sudo chmod -R g+w /var/www/&lt;app-name&gt;/</code></pre>

Install any packages required by your app or it&#8217;s dependencies. For example, psycopg2 and lxml respectively depend on the following packages:

<pre><code class="language-bash">sudo apt-get install python-dev libpq-dev
sudo apt-get install libxml2-dev libxslt-dev</code></pre>

Now install the project requirements into the virtual environment:

<pre><code class="language-bash">source /var/www/&lt;app-name&gt;/env/bin/activate
pip install -r /var/www/&lt;app-name&gt;/project/requirements.txt
deactivate</code></pre>

OK so now that the Django code files are on the server and the dependencies are satisfied, navigating to the IP address in your browser should show your app. Static files aren&#8217;t being served yet and the database isn&#8217;t installed, but we can see some progress.

<img src="http://grokcode.com/wordpress/wp-content/uploads/Screenshot-Search-for-Author-Alcove-Chromium.png" alt="Application screenshot without static files or database connection." class="size-full wp-image-787" />

If you haven&#8217;t got this far, the log files for upstart, nginx, and uwsgi are a good place to start troubleshooting. 

In order to have Nginx serve the static files, they need to be collected to `/var/www/<app-name>/static`. In `settings.py` point your `STATIC_ROOT` to that static directory, then verify that `STATIC_URL` and `STATICFILES_DIRS` are properly set up. Get any changes from the repository, then:

<pre><code class="language-bash">source /var/www/&lt;app-name&gt;/env/bin/activate
cd /var/www/&lt;app-name&gt;/project/ 
python manage.py collectstatic</code></pre>

Test it out in your browser and you should now see css, javascript, and image files being loaded. However, without the database, your app probably isn&#8217;t doing much of anything. So let&#8217;s fix that.

## Installing PostgreSQL

<pre><code class="language-bash">sudo apt-get install postgresql postgresql-contrib</code></pre>

Then setup passwords:

<pre><code class="language-bash">sudo passwd postgres
su postgres
createuser django --pwprompt
psql create database &lt;dbname&gt; owner django
exit
sudo /etc/init.d/postgresql restart</code></pre>

Now initialize the database:

<pre><code class="language-bash">cd /var/www/&lt;app-name&gt;
source env/bin/activate
cd project
./manage.py syncdb</code></pre>

If you use south for database migrations, run those now.

<pre><code class="language-bash">./manage.py migrate &lt;name&gt;</code></pre>

Your Django app should now be up and running.

## Closing remarks

Now that the server is ready, [setup one click deploys](http://grokcode.com/792/deploy-with-git-push/) to speed up your code &#8211; test &#8211; deploy cycle.

Support the creation of tutorials like this one by using the following links to [purchase Linode hosting](http://www.linode.com/?r=e748550930d0390f86a171bc3465ce8bc0e211a6) or [shop at Amazon](http://www.amazon.com/?tag=gc-cred-20).

A big thanks to [Conrad Kramer](http://blog.kramerapps.com/post/22551999777/flask-uwsgi-nginx-ubuntu), [Collective Disorder](http://www.collectivedisorder.com/ubuntu), and [Simon Westphahl](http://www.westphahl.net/blog/2010/4/8/running-django-nginx-and-uwsgi/) for guiding the creation of this tutorial.
