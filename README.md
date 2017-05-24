[![Build Status](https://travis-ci.org/hirako2000/polypack.svg?branch=master)](https://travis-ci.org/hirako2000/polypack)
[![Dependency Status](https://david-dm.org/hirako2000/polypack.svg?style=flat)](https://david-dm.org/hirako2000/polypack)
[![devDependency Status](https://david-dm.org/hirako2000/polypack/dev-status.svg)](https://david-dm.org/hirako2000/polypack#info=devDependencies)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/hirako2000/polypack/blob/master/LICENSE)

# polypack

Polypack is a boilerplate configuration to build the most lightweight front end assets for webapp or static pages.

The motivation behind this project started from observation that most if not all boilerplates are either bloated with heavyweight libs, or incomplete in order to develop and ship production applications.

### Features

- Ready to use build and bundling system with [webpack](https://webpack.github.io/)
- Most lightweight libraries for [performance](https://medium.com/reloading/javascript-start-up-performance-69200f43b201)
- Web application, react-like skeleton
- State store
- Static web page setup
- Support for either or both [{less}](http://lesscss.org/)/[Sass](http://sass-lang.com/)
- Support for various web fonts formats
- [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) for rapid development
- ES6/7
- Linting
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
- [x] Linter
- [ ] Jest

### TV program roll webapp example with Inferno/redux & mincss

HBO look & feel with [Mincss](http://mincss.com/)

[Live Demo](http://polypack-tv.surge.sh/)

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
#### Size (gzipped)
```
bcff9e9b7b53122acb52df67cd5f4d4f.svg.gz  901 bytes          [emitted]         
                            photo.js.gz    2.88 kB          [emitted]     
                     photo.vendor.js.gz    27.9 kB          [emitted]
                           photo.css.gz    1.32 kB          [emitted]
                    photo.vendor.css.gz  850 bytes          [emitted]                                           
                             photo.html  398 bytes          [emitted]   
```

### Folder structure
```
.
├── src                          # Applications source code
│   ├── inferno                  # Inferno app
│   │   ├── components           # Components
│   │   ├── styles               # Styles
│   |   ├── index-template.html  # HTML template
│   |   └── index.js             # Entry point
│   ├── mincss                   # Mincss landing page
│   │   ├── img                  # images
│   │   ├── styles               # Styles
│   |   ├── index-template.html  # HTML template
│   |   └── index.js             # Entry point
│   ├── photo                    # Inferno app for TV roll example
│   │   ├── components           # Components
│   │   ├── img                  # Images
│   │   ├── styles               # Styles
│   |   ├── index-template.html  # HTML template
│   |   └── index.js             # Entry point
│   └── purecss                  # Purecss landing page
│       ├── img                  # images
│       ├── styles               # Styles
│       ├── index-template.html  # HTML template
│       └── index.js             # Entry point
├── static                       # Output of prod assets
└── webpack.config.js            # Webpack config for both dev and prod builds
```
### HOWTO
Simply fork, or download the zip content of this repo.
#### Prerequisite
- Node.js

#### Run
```bash
npm install # installs deps
```

```bash
npm start # starts the app in dev mode
```
```bash
npm run build # builds app for production
```
#### Browse
There are multiple web apps built by default
- [http://localhost:3000/mincss.html](http://localhost:3000/mincss.html]) - mincss starter 
- [http://localhost:3000/purecss.html](http://localhost:3000/purecss.html) - purecss starter
- [http://localhost:3000/inferno.html](http://localhost:3000/inferno.html) - inferno/redux starter
- [http://localhost:3000/photo.html](http://localhost:3000/photo.html) - the tv roll exampe (inferno/redux fetching TVmaze schedules)


### Contributing
PR are welcome
