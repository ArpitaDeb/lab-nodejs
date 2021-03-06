# require-build-grunt / 02

> compile require.js multi modules 

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir 02

cd 02

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  jit-grunt \
  time-grunt \
  jshint-stylish \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  grunt-contrib-copy \
  grunt-contrib-connect \
  grunt-contrib-less \
  grunt-contrib-concat \
  grunt-contrib-requirejs \
  grunt-contrib-htmlmin \
  grunt-contrib-imagemin \
  grunt-contrib-uglify \
  grunt-cleanempty \
  esprima \
  escodegen \
  q \
  q-io \
  gulp \
  gulp-htmlmin \
  gulp-angular-templatecache \
  gulp-inject-string \
  --save-dev
```

## project cloned from git

```
npm install
```

## Grunt commands

* `grunt` - execute tasks : `['jshint']`

* `grunt server` - development code

* `grunt server:dist` - production build
 

## Project structure

```
/root
  /helpers
    /grunt
      /config   >> gruntConfig >> seek link : [GitHub] firstandthird / load-grunt-config
      /tasks    >> custom tasks
  /src          >> project source code
  config.js     >> projetc global configs for grunt tasks
  Gruntfile.js
  package.json
```


## Links

* [[GitHub] sindresorhus / jshint-stylish](https://github.com/sindresorhus/jshint-stylish) - Stylish reporter for JSHint

--

* [[GitHub] ariya / esprima](https://github.com/ariya/esprima) - ECMAScript parsing infrastructure for multipurpose analysis

* [[GitHub] Constellation / escodegen](https://github.com/Constellation/escodegen) - ECMAScript code generator

--

* [[GitHub] kriskowal / q](https://github.com/kriskowal/q) - A tool for making and composing asynchronous promises in JavaScript 

* [[GitHub] kriskowal / q-io](https://github.com/kriskowal/q-io) - Interfaces for IO using Q promises in JavaScript on Node


### Grunt.js

* [Grunt.js](http://gruntjs.com)

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

#### Grunt.js plugins

* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)

* [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)

* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)

* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

* [[GitHub] stevenvachon / grunt-cleanempty](https://github.com/stevenvachon/grunt-cleanempty) - Clean empty files and folders. 

* [[GitHub] shootaroo / jit-grunt](https://github.com/shootaroo/jit-grunt) - JIT(Just In Time) plugin loader for Grunt

* [[GitHub] sindresorhus / time-grunt](https://github.com/sindresorhus/time-grunt) - Display the elapsed execution time of grunt tasks


### Streams

* [[GitHub] wearefractal / vinyl](https://github.com/wearefractal/vinyl) - Virtual file format

* [[GitHub] wearefractal / vinyl-fs](https://github.com/wearefractal/vinyl-fs) - Vinyl adapter for the file system

* [[GitHub] dominictarr / map-stream](https://github.com/dominictarr/map-stream)

* [[GitHub] rvagg / through2](https://github.com/rvagg/through2) - Tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise

* [[GitHub] rschmukler / stream-series](https://github.com/rschmukler/stream-series) - Merge streams and emit in order


#### Gulp

* [Gulp-style stream piping in Grunt, or anywhere else | Evan You](http://blog.evanyou.me/2013/12/29/gulp-piping/)

* [Gulp.js](http://gulpjs.com/) - the streaming build system


##### Gulp plugins

* [[GitHub] jonschlinkert / gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin/) - Minify HTML

* [[GitHub] marklagendijk / gulp-ng-html2js](https://github.com/marklagendijk/gulp-ng-html2js/) - Gulp plugin for compiling the HTML files of your Angular app to Javascript

* [[GitHub] miickel / gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) - Concatenates and registers AngularJS templates in the $templateCache [with require.js and browserify support]

* [[GitHub] Schmicko / gulp-inject-string](https://github.com/Schmicko/gulp-inject-string) - Inject HTML snippets in build
