[![Build Status](https://travis-ci.org/hirako2000/polypack.svg?branch=master)](https://travis-ci.org/hirako2000/polypack)
[![Dependency Status](https://david-dm.org/hirako2000/polypack.svg?style=flat)](https://david-dm.org/hirako2000/polypack)
[![devDependency Status](https://david-dm.org/hirako2000/polypack/dev-status.svg)](https://david-dm.org/hirako2000/polypack#info=devDependencies)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/hirako2000/polypack/edit/master/LICENSE)

# polypack

Polypack is a boilerplate configuration to build the most lightweight front end assets for webapp or static pages.

The motivation behind this project started from observation that most if not all boilerplates are either bloated with heavyweight libs, or incomplete in order to develop and ship production applications.

### Objective

- Ready to use build and bundling system with [webpack](https://webpack.github.io/)
- Most lightweight libraries for [performance](https://webpack.github.io/)
- Web application, react-like skeleton
- State store
- Static web page setup
- Support for both either or both [{less}](http://lesscss.org/)/[Sass](http://sass-lang.com/)
- Support for various web fonts formats
- [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) for rapid development
- ES6/7
- Production build with minified, concat and gzipped content

### Roadmap

- [x] Base bundler with webpack 2 & Babel
- [x] Multi SPA bundler config
- [x] Hot Module Reload
- [x] Production build
- [x] Cross environment variables
- [x] Gzip
- [x] Less support
- [x] Sass support
- [x] Fonts support
- [x] Inferno JS skeleton
- [x] Redux skeleton
- [x] PureCSS skeleton
- [x] mincss skeleton
- [x] Inferno sample webapp
- [ ] Linter

### TV program roll webapp example with Inferno/redux & mincss

![top](https://raw.githubusercontent.com/hirako2000/polypack/master/screenshots/tv-roll-top.jpg)
![mid](https://raw.githubusercontent.com/hirako2000/polypack/master/screenshots/tv-roll-mid.jpg)

#### Size

```
                                  Asset       Size  Chunks                    Chunk Names
   bcff9e9b7b53122acb52df67cd5f4d4f.svg    1.99 kB          [emitted]         
                               photo.js    14.6 kB       0  [emitted]         photo
                        photo.vendor.js     114 kB       4  [emitted]         photo.vendor
                              photo.css    3.97 kB       0  [emitted]         photo
                       photo.vendor.css    1.95 kB       4  [emitted]         photo.vendor
                             photo.html  398 bytes          [emitted]
```
#### Size (gziped)
```
bcff9e9b7b53122acb52df67cd5f4d4f.svg.gz  901 bytes          [emitted]         
                            photo.js.gz    2.88 kB          [emitted]     
                     photo.vendor.js.gz    27.9 kB          [emitted]
                           photo.css.gz    1.32 kB          [emitted]
                    photo.vendor.css.gz  850 bytes          [emitted]                                           
                             photo.html  398 bytes          [emitted]   
```
