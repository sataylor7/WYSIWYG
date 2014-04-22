#WYSIWYG#
______


This is the evolution of my first javascript project started end of 2009

1.0 : **2009/2010**

_____

+ vanilla js
+ every listener is inline
+ every event has a function
+ has the basic buttons
    * Bold
    * Italic
    * Strikethrough
    * Superscript
    * Subscript
    * Underline
    * Colors (Red, Blue, Green, Yellow, Black)



2.0 : **2011**

___

+ vanilla js
+ every listener is inline
+ every event triggers one function and passes in parameters
+ updated buttons
    * same as 1.0
    * un-ordered list
    * ordered list
    * link
    * unlink
    * horizontal rule
    * font name
    * font size



3.0 : **2012**

___

+ vanilla js
+ dynamic event listeners
+ module pattern
+ A LOT OF REPEATING
+ multiple functions with parameters
+ expanded buttons
    * same as 1.0/2.0
    * emoticons added
    * colors expanded to W3C color name chart
    * view HTML
    * insert Table
    * clear
    * clear format
    * justify
    * left align
    * right align
    * outdent
    * indent


4.0 : **2013**

-----

+ never got around to rebuilding it

Instead picked up node.js/express/handlebars/ember



5.0 : **2014**

____

+ jquery / vanilla hybrid
+ require.js
+ handlebars
+ sass

Everything is split into smaller components/modules that don't rely on each other to work.

+ That way they can be interchanged down the road.
+ The WYSIWYG itself (iframe) is separate from the controls.
+ There are 3 separate control choices (buttons)
    * basic
    * advanced
    * full


Sass was introduced so that themes could be added easily,
as well as using loops to create the CSS dynamically for the colors



