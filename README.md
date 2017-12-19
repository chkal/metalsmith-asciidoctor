# metalsmith-asciidoctor

[![npm](https://img.shields.io/npm/v/metalsmith-asciidoctor.svg)](https://www.npmjs.com/package/metalsmith-asciidoctor)
[![Build Status](https://travis-ci.org/chkal/metalsmith-asciidoctor.svg?branch=master)](https://travis-ci.org/chkal/metalsmith-asciidoctor)

Metalsmith plugin to transform Asciidoc files to HTML.

## Installation

```bash
npm install metalsmith-asciidoctor --save-dev
```
    
## Usage

```js
var asciidoctor = require("metalsmith-asciidoctor");

Metalsmith(__dirname)
  /* ... */
  .use(asciidoctor())
  /* ... */
```

## License

MIT
