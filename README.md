# metalsmith-asciidoctor

[![Build Status](https://travis-ci.org/chkal/metalsmith-asciidoctor.svg?branch=master)](https://travis-ci.org/chkal/metalsmith-asciidoctor)

Metalsmith plugin to transform Asciidoc files to HTML using `asciidoctor.js`.

## Installation

With `npm`:

```bash
npm install --save-dev metalsmith-asciidoctor
```

With `yarn`:

```bash
yarn add --dev metalsmith-asciidoctor
```

## Usage

```js
var asciidoctor = require("metalsmith-asciidoctor");

Metalsmith(__dirname)
  /* ... */
  .use(asciidoctor())
  /* ... */
```

By default the plugin will process all `.adoc` files and render them to HTML. You can customize this
default behavior by setting the `pattern` property on the configuration object. 

```js
.use(asciidoctor({
  pattern: "*.asciidoc"
}))
```

You can also pass custom options to the `asciidoctor.js` by setting the `options` property:

```js
.use(asciidoctor({
  options: {
    safe: "safe",
    attributes: {
      "note-caption": "Hinweis",
      "warning-caption": "Warnung"
    }
  }
}))
```

## License

MIT
