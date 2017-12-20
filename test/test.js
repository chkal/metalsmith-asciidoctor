const Metalsmith = require("metalsmith");
const asciidoctor = require("../src/index.js");
const expect = require("chai").expect;
const path = require("path");

describe("All tests", () => {

  it("Should render with default options", testDone => {

    const metalsmith = Metalsmith(path.join(__dirname, "fixture"))
      .use(asciidoctor())
      .use((files, metalsmith, pluginDone) => {

        // HTML file is created and AsciiDoc file removed
        expect(files).to.have.property("index.html");
        expect(files).not.to.have.property("index.adoc");

        // check file contents
        expect(files["index.html"].contents.toString()).to.have.string("Hello <strong>World</strong>");
        
        pluginDone();
      });

    metalsmith.build(err => testDone(err));

  });

  it("Should apply custom pattern", testDone => {
    
    const metalsmith = Metalsmith(path.join(__dirname, "fixture"))
      .use(asciidoctor({
        pattern: "*.does-not-exist"
      }))
      .use((files, metalsmith, pluginDone) => {

        // file is not rendered because pattern does not match
        expect(files).not.to.have.property("index.html");
        expect(files).to.have.property("index.adoc");

        pluginDone();
      });

    metalsmith.build(err => testDone(err));

  });
    
});
