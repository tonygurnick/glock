
 var encode = require("../src/encode");
 var path=require("path");

 module.exports = {

	 encodeFile:function( test ){

		var file = path.resolve(__dirname,"jquery-2.1.1.js");

		 encode( file, function( err, encoded ){

			 test.ok( encoded.filename.indexOf( "jquery-2.1.1.js") !== -1, "file found" );
			 test.done();

		 });
	 }
 };