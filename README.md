# juicy-grid

Most grid framworks just give you the possibilties to configure max and min values for the global width of a grid and its breakpoints. The columnlength is mostly static for each row and the column behaviour is kind of static too. 
As a front-end developer i found myself in situations where this just wasn't  enough. Im also not a fan of big frameworks that carry around stuff that i dont use. I just needed a plain easy to use grid framework which could handle some special situations beside of the general usage of a grid: 

##### Static Content:
* one static column with a static width
* some dynamic columns that take the place thats left

##### Quadratic Content:
* Columns that have the same height and width no matter what disply size is given

##### Dynamic Row-Columnlength:
* one row with 12 columns
* one row with 6 columns
* one row with 5 columns

##### and last but not least
* The combination of the mentioned situations

So i built one , for me and those who might need it. :)
Given the possibilities of flexbox and other current css specs, new tools and precompilers like stylus sass and less i wrote a little library.

=====
* [install](#install)
* [use](#use)
* [configure](#configure)

=====

### <a name="install"></a> install
#### bower
```
bower install juicy-grid --save
```
#### npm
```
npm install juicy-grid --save
```

=====

### <a name="use"></a> use
After the installation you can find the precompiled juicy-grid.css @
```javascript
./bower_components||node_modules/juicy-grid/dist/juicy-grid.css
```

This build is optimized for a maximum column length of 12. If you want to change this behaviour follow the constructions described under [configure](#configure)

Just Follow the Instructions after you include the juicy-grid.css:

```html
<link rel="stylesheet" type="text/css" href="../juicy-grid.css">
```

=====

### <a name="configure"></a> configure
