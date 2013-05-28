Pelican-red
============

**Currently NOT "Released" (AKA not ready yet)**

Pelican-red is a [pelican](http://getpelican.com) theme originally created for the blog [rangerTBC](http://rangertbc.net).  The theme incorporates a few additional features in addition to the original design to make it more useful. The theme uses the [Foundation 4](http://foundation.zurb.com/) framework as a base and is Licensed under the MIT-License.     

Features ( EDIT THIS )
---------
The following is a list of features:

* Responsive design viewable on mobile down to 380px wide without issue (article date issue atm)
* Fixed top-bar w/drop-down navigation & social links
    - Social links supported
        - Google+
        - Github
        - Twitter
        - LinkedIn
        - more...   
    - Hidden drop-down navigation
        - accessed on hovering site name / menu icon
        - fixed to 100% browser window height
        - scroll-able?
        - mobile version via swipe?   
* Style-sheets built using sass & compass 
* zeptos.js used instead of jQuery when possible
* Analytics via Google Analytics or GoSquared 
* Disqus comments support
* pygments code highlighting
- more...

Install
--------

To install pelican-red first either clone the repository or download the zip of the current version to a destination of your choice ( `~/pelican-red` used in example ):
~~~
git clone https:// ~/pelican-red
~~~
or
~~~
download zip url thingy
extract
~~~
The theme can then either be used by installing the theme or just by pointing to it.

### Option 1 - Install
Using pelican-themes (~/pelican-red is path to the theme used in previous example):
~~~
pelican-themes --install ~/pelican-red
~~~
Then change the theme in the Pelican settings file for the site you want to use pelican-red:
~~~
THEME = "pelican-red"
~~~

### Option 2 - Just Point to It

Edit your Pelican settings file for the site you want to use pelican-red (~/pelican-red is path to the theme used in previous example):
~~~
THEME = "~/pelican-red"
~~~

Configuration
--------------
In addition the to general Pelican configuration variables pelican-red supports a few additional settings.  All the variables are set in your Pelican settings file for the site you are using pelican-red with.

Variables are listed as `variable` : description

### General
* `SITE_DESCR`: Description of site used for meta if you want
* `SITE_KEY`: Keywords for meta ex. `"keyword1, keyword2, keyword3"`

### Social
* TODO

### Comments ( Disqus )
* `DISQUS_SN`: Disqus Shortname of site ( rangertbc )

### Analytics ( Google Analytics and GoSquared )
* `GA_CODE`: Google Analytics Code ( UA-xxxxxxxx-x )
* `GA_DOMAIN`: Google Analytics Domain for use across sub-domains of a top level domain ( rangertbc.net )
* `GA_LINKER`: Google Analytics multiple top level domains set to True if wanted ( rangertbc.net, rangertbc.com, etc )
* `GS_CODE`: GoSquared Code ( GSN-xxxxxx-x )

Per Post / Page Variables
--------------------------
In addition to the additional configuration variables the theme supports the following variables in posts / pages.

* TODO

Previews
---------
A live preview of the theme can be seen on the blog [rangerTBC](http://rangertbc.net) as well as the gh-pages for pelican-red at [http://rangertbc.net/pelican-red](http://rangertbc.net/pelican-red). 

Previews of the site main page are shown below as desktop and mobile.

### Desktop Preview
INSERT SITE PREVIEW(s)

### Mobile Preview
INSERT MOBILE PREVIEW(s)

Change-log ( Major Details )
-------------------------
* `0.1.0` First Release
