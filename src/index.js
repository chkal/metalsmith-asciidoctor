const path = require("path");
const minimatch = require("minimatch");
const asciidoctor = require("asciidoctor.js")();

// config defaults
const defaults = {
  pattern: "**/*.adoc"
};

// the plugin
const plugin = options => {

  // build effective configuration
  const config = Object.assign({}, defaults, options);
  
  // plugin function
  return (files, metalsmith, done) => {

    // done callback
    setImmediate(done);

    // process files
    Object.keys(files)
      .filter(filename => minimatch(filename, config.pattern))
      .forEach(inputName => {

        // load file contents
        const data = files[inputName];

        // render to HTML
        const html = asciidoctor.convert(data.contents.toString());
        data.contents = new Buffer(html);

        // get output name
        const outputName = path.basename(inputName, path.extname(inputName)) + ".html";
        
        // replace Asciidoc with HTML file
        delete files[inputName];
        files[outputName] = data;

      });

  };

}

module.exports = plugin;
