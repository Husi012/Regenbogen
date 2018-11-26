
let Uglifier = require("uglify-js");
let fs = require("fs")

function compress() {
  fs.readFile("export.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    data = JSON.parse(data);
    let scripts = data.scripts;
    let output = data.output;
    let ast = null;
    let compressedScripts = [];
    compressedScripts[scripts.length - 1] = "";
    let i = 0;
    let compressed = 0;
    for (let script of scripts) {
      let current = i;
      fs.readFile(script, "utf8", (err, data) => {
        if (err) {
          console.log(err);
        }
        ast = Uglifier.parse( data, { filename: script, toplevel: ast } );
        ast = Uglifier.uglify.ast_mangle(ast);
        ast = Uglifier.uglify.ast_squeeze(ast);
        compressedScripts[current] = Uglifier.uglify.gen_code(ast);
        compressed++;
        if (compressed == scripts.length) {
          let complete = compressedScripts.join("");
          fs.writeFile(output, complete, (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("project minified!");
          })
        }
      });
      i++;
    }
  });
}


fs.watch("../js", (event, filename) => {
  if (filename) {
    console.log("something changed!\ncompressing...");
    compress();
  }
});

compress();
