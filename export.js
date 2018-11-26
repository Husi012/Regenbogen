
let Uglifier = require( "uglify-js" );
let fs = require( "fs" )

function compress() {
  fs.readFile( "export.json", "utf8", ( err, data ) => {
    if (err) {
      console.log( err );
    }
    data = JSON.parse( data );
    let scripts = data.scripts;
    let output = data.output;
    let combinedScripts = [];
    combinedScripts[scripts.length - 1] = "";
    let i = 0;
    let combined = 0;
    for ( let script of scripts ) {
      script = "./src/" + script;
      let current = i;
      fs.readFile( script, "utf8", ( err, data ) => {
        if ( err ) {
          console.log( err );
        }
        combinedScripts[current] = data;
        combined++;
        if ( combined == scripts.length ) {
          /*let ast = Uglifier.parse( combinedScripts.join( "" ) );
          ast = Uglifier.uglify.ast_mangle( ast );
          ast = Uglifier.uglify.ast_squeeze( ast );
          let complete = Uglifier.uglify.gen_code( ast );*/
          let complete = combinedScripts.join( "" );
          fs.writeFile( output, complete, ( err ) => {
            if (err) {
              console.log( err );
              return;
            }
            console.log( "project minified!" );
          });
        }
      });
      i++;
    }
  });
}


fs.watch( "./src", ( event, filename ) => {
  if ( filename ) {
    console.log( "something changed!\ncompressing..." );
    compress();
  }
});

compress();
