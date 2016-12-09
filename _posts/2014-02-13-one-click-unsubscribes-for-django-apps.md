---
id: 819
title: 'How To Use Django&#8217;s Signing Functions For One Click Unsubscribes'
date: 2014-02-13T16:04:27+00:00
author: Jess Johnson
layout: post
guid: http://grokcode.com/?p=819
permalink: /819/one-click-unsubscribes-for-django-apps/
categories:
  - 'Tips &amp; Tutorials'
tags:
  - cryptography
  - django
  - email
  - newsletter
  - python
  - unsubscribe
---
Sometimes it is handy to allow users to change part of their profile without having to log in, as long as we can be reasonably sure of their identity. The most common use case is to unsubscribe from email newsletters, where it is annoying to have to login first.<!--more-->

The workflow we want to handle looks like this:
  
1. User clicks an unsubscribe link.
2. We verify the security token on the unsubscribe link.
3. The user gets a message saying they have been unsubscribed.

This workflow is pretty easy to set up using Django&#8217;s signing functions. 

## Creating the signed url

Let&#8217;s use Djanogo&#8217;s built in signing functions to create an unsubscribe link with a security token, and then create a way to verify the token. You can tuck the following code into the user profile.

```python
from django.core.signing import TimestampSigner, BadSignature, SignatureExpired

def create_unsubscribe_link(self):
    username, token = self.make_token().split(":", 1)
    return reverse('user_signups.views.unsubscribe',
                   kwargs={'username': username, 'token': token,})

def make_token(self):
    return TimestampSigner().sign(self.user.username)

def check_token(self, token):
    try:
        key = '%s:%s' % (self.user.username, token)
        TimestampSigner().unsign(key, max_age=60 * 60 * 48) # Valid for 2 days
    except (BadSignature, SignatureExpired):
        return False
    return True
```
As long as the `SECRET_KEY` from `django.conf.settings` is kept private, it isn&#8217;t feasible for someone malicious to craft signed links. 

While verifying the token in the unsubscribe link, we want to strike a good balance with user friendliness and security. In the common case, a user shouldn&#8217;t have to login to unsubscribe. But we also want to prevent users from being accidentally unsubscribed by others if they forward the email or otherwise make it public. Adding an expiry date to the token somewhat mitigates this risk. Above we use a 2 day expiry date.

## The url pattern

Now hooking up the url pattern which accepts the special characters that may appear in the token:

```python
url(r'^unsubscribe/(?P<username>[\w.@+-]+)/(?P<token>[\w.:\-_=]+)/$',
     'user_signups.views.unsubscribe'),
```

## The view

```python
def unsubscribe(request, username, token):
    """ 
    User is immediately unsubscribed if they are logged in as username, or
    if they came from an unexpired unsubscribe link. Otherwise, they are
    redirected to the login page and unsubscribed as soon as they log in.
    """

    user = get_object_or_404(User, username=username, is_active=True)

    if ( (request.user.is_authenticated() and request.user == user) or
         user.get_profile().check_token(token)):
       # unsubscribe them
       profile = user.get_profile()
       profile.newsletter = False
       profile.save()

       return render(request, 'registration/unsubscribe.html')
    
    # Otherwise redirect to login page
    next_url = reverse('user_signups.views.unsubscribe', 
                       kwargs={'username': username, 'token': token,})
    return HttpResponseRedirect('%s?next=%s' % (reverse('login'), next_url))
```

## The templates

In the email templates, use the unsubscribe link `{% raw %}{{user.get_profile.create_unsubscribe_link}}{% endraw %}`.

Then in `registration/unsubscribe.html` add a message confirming that the user has been unsubscribed.

## Other notes

This type of signed link could also be used to improve the customer&#8217;s flow when upgrading SaaS plans, participating in a survey, or performing some other action that updates their profile when they click on a link in an email. Depending on what they are doing, you can add an additional security layer by checking that the ip address is one they have previously used while logging in.
