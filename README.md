Pelican-red
============

**Alpha Quality Pre-v0.1.0**

Pelican-red is a [pelican](http://getpelican.com) theme designed to be readable on every device. It is a responsive layout which utilizes the [Foundation 4](http://foundation.zurb.com/) framework. The theme was originally created for the blog [VoltaicIdeas](http://blog.voltaicideas.net) and has a few additional features in addition to the original design to make it more useful. Pelican-red is Licensed under the MIT-License.     

Features
---------
The following is a list of features:

* Responsive design view-able on mobile down to 380px wide **(check)**
* Fixed top-bar w/drop-down navigation & social links
    * Social links with Icons from [Entypo](http://www.entypo.com) by Daniel Bruce or [Zocial](http://zocial.smcllns.com/) by Sam Collins; currently supported ( icon pack in parenthesis:
        * Blogger ( Zocial )
        * Dribbble ( Entypo )
        * Facebook ( Entypo )
        * Flickr ( Entypo )
        * Github ( Entypo ) 
        * GrooveShark ( Zocial )  
        * Google+ ( Entypo )
        * Instagram ( Entypo )
        * Lastfm ( Entypo )
        * LinkedIn ( Entypo )
        * Picasa ( Entypo )
        * Pinterest ( Entypo )
        * Rdio ( Entypo )
        * Reddit ( Zocial )
        * Skype ( Entypo )
        * SoundCloud ( Entypo )
        * Steam ( Zocial )
        * StumbleUpon ( Entypo )
        * Tumblr ( Entypo )
        * Twitter ( Entypo )
        * Vimeo ( Entypo )
        * YouTube ( Zocial )
* Style-sheets built using sass & compass 
* zeptos.js used instead of jQuery when possible
* Javascript files loaded via [RequireJS](http://requirejs.org/) from CDN [jsDelivr](http://www.jsdelivr.com/) with local fallback
* Analytics via Google Analytics or GoSquared 
* Disqus comments support **(TODO FINISH)** 
* PDF link support
* pygments code highlighting
* Site Icons for Creative Commons Licenses, VCards, Tags, PDF download, Search, and Translation selection using [Entypo](http://www.entypo.com) by Daniel Bruce
* more ...

Install
--------

To install pelican-red first either clone the repository or download the zip of the current version to a destination of your choice ( `~/pelican-red` used in example ):
~~~Shell
git clone https://github.com/arsenetar/pelican-red.git ~/pelican-red
~~~
or
~~~Shell
wget https://github.com/arsenetar/pelican-red/archive/master.zip
unzip master.zip
mv pelican-red-master ~/pelican-red
~~~
The theme can then either be used by installing the theme or just by pointing to it.

### Option 1 - Install
Using pelican-themes (~/pelican-red is path to the theme used in previous example):
~~~Shell
pelican-themes --install ~/pelican-red
~~~
Then change the theme in the Pelican settings file for the site you want to use pelican-red:
~~~Python
THEME = "pelican-red"
~~~

### Option 2 - Just Point to It

Edit your Pelican settings file for the site you want to use pelican-red (~/pelican-red is path to the theme used in previous example):
~~~Python
THEME = "~/pelican-red"
~~~

Configuration
--------------
In addition the to general Pelican configuration variables pelican-red supports a few additional settings.  All the variables are set in your Pelican settings file for the site you are using pelican-red with.

Variables are listed as `variable` : description

### General
* `SITE_DESCR`: Description of site used for meta if you want
* `SITE_KEY`: Keywords for meta ex. `"keyword1, keyword2, keyword3"`
* `FAVICON`: Path to favicon ex. `images/favicon`
* `COPYRIGHTS`: Copyright dictionary `['Abbriviation': ('name','url')]`
* `DEFAULT_COPYRIGHT` : Default copyright to use is an abbriviation key from the `COPYRIGHTS` dictionary 
* `COPYRIGHT_ARTICLE` : Show default copyright on articles (overridable with article value)
* `COPYRIGHT_PAGE` : Show default copyright on pages (overridable with page value)

### Navigation
* `MENUITEMS`: Custom Links to place in the menu e. `(('Item', 'Link'))`
* `DISPLAY_PAGES_ON_MENU`: Show pages on the menu; has three options `False` - do not display, `Compact` - display as dropdown with 'Pages' Heading, and `Expanded` - display each as a seperate top level item.
* `DISPLAY_CATEGORIES_ON_MENU` : Show the categories on the menu; has same options `False` - do not display, `Compact` - display as dropdown with 'Categories' Heading, and `Expanded` - display each as a seperate top level item.

### Social
* `SOCIAL`: List of the social links and urls ex. `(('Network','url'),)`, supported w/icon listed below:
    * Blogger : `('blogger','http://myblog.blogspot.com')`
    * Dribbble : `('dribble','http://dribbble.com/username')`
    * Facebook : `('facebook','http://www.facebook.com/username')`
    * Flickr : `('flickr','http://www.flikr.com/photos/username')`
    * Github : `('github','https://github.com/username')`
    * GrooveShark : `('grooveshark','http://grooveshark.com/username')`
    * Google+ : `('gplus','https://plus.google.com/profileID')`
    * Instagram : `('instagram','http://instagram.com/username')`
    * Lastfm : `('lasstfm','http://www.last.fm/user/username')`
    * LinkedIn : `('linkedin','http://www.linkedin.com/in/username')`
    * Picasa : `('picasa','http://')`
    * Pinterest : `('pinterest','http://pinterest.com/username')`
    * Rdio : `('rdio','http://www.rdio.com/people/username')`
    * Reddit : `('reddit','http://www.reddit.com/user/username')`
    * Skype : `('skype','skype:username?chat')`
    * SoundCloud : `('soudcloud','https://soundcloud.com/profileID')`
    * Steam : `('steam','http://steamcommunity.com/profiles/profileID')`
    * StumbleUpon : `('stumbleupon','http://www.stumbleupon.com/stumbler/username')`
    * Tumblr : `('tumblr','http://myblog.tumblr.com')`
    * Twitter : `('twitter','http://twitter.com/username')`
    * Vimeo : `('vimeo','http://vimeo.com/channels/channelID')`
    * YouTube : `('youtube','http://www.youtube.com/channel/channelID')`

### Comments ( Disqus )
* `DISQUS_SN`: Disqus Shortname of site ( VoltaicIdeas )
* `COMMENTS_PAGE`: Include Comments on pages set True/False
* `COMMENTS_ARTICLE`: Include Comments on articles set True/False

### Analytics ( Google Analytics and GoSquared )
* `GA_CODE`: Google Analytics Code ( UA-xxxxxxxx-x )
* `GA_DOMAIN`: Google Analytics Domain for use across sub-domains of a top level domain ( voltaicideas.net )
* `GA_LINKER`: Google Analytics multiple top level domains set to True if wanted ( voltaicideas.net, voltaicideas.com, etc )
* `GS_CODE`: GoSquared Code ( GSN-xxxxxx-x )

Per Article / Page Variables
--------------------------
In addition to the additional configuration variables the theme supports the following variables in articles / pages.

* `comments`: show comments True/False
* `copyright`: copyright to display at bottom of page / article overrides the site `DEFAULT_COPYRIGHT` value

Previews
---------
A live preview of the theme can be seen on the blog [VoltaicIdeas](http://blog.voltaicideas.net) as well as the gh-pages for pelican-red at [http://pelican-red.voltaicideas.net/](http:///pelican-red.voltaicideas.net). 

Previews of the site main page are shown below as desktop and mobile.

### Desktop Preview
INSERT SITE PREVIEW(s)

### Mobile Preview
INSERT MOBILE PREVIEW(s)

TODO
-----
* Allow for multilevel MENUITEMS
* Translations support (pages and articles)

Change-log ( Major Details )
-------------------------
* `v0.1.0` First Release
