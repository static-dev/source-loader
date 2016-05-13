# Webpack Source Loader

[![npm](http://img.shields.io/npm/v/source-loader.svg?style=flat)](https://badge.fury.io/js/source-loader) [![tests](http://img.shields.io/travis/static-dev/source-loader/master.svg?style=flat)](https://travis-ci.org/static-dev/source-loader) [![dependencies](http://img.shields.io/david/static-dev/source-loader.svg?style=flat)](https://david-dm.org/static-dev/source-loader) [![coverage](http://img.shields.io/coveralls/static-dev/source-loader.svg?style=flat)](https://coveralls.io/github/static-dev/source-loader)

Webpack loader that exports the source directly

> **Note:** This project is in early development, and versioning is a little different. [Read this](http://markup.im/#q4_cRZ1Q) for more details.

### Why should you care?

If you need to load up a file's source directly and have it available within your javascript, this loader is what you're after. For example, you could load up a svg file, parse out a path you want, and manipulate that with your javascript somehow. Or you could load up a json or text file. Or some other type of file that you came up with yourself. Whatever it is, as long as it's contents would be ok after being run through `JSON.stringify` (read: text files, not images or binary files), it will work just great with the source loader.

### Installation

`npm install source-loader -S`

### Usage

Just load it up in your webpack config like this:

```js
module.exports = {
  module: {
    loaders: [
      { test: /\.foo$/, loader: 'source' }
    ]
  }
}
```

Then you can require it up in your main entry:

```js
const fooFile = require('testing.foo')
console.log(fooFile) // wow it's the contents!
```

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)
