

	var fs = require("fs");

	module.exports = function(  filename, encodedImage, cb ){

//		fs.writeFile( filename, encodedImage, function( err ){
//
//			 cb( err, filename );
//
//		});

		encodedImage.pipe( fs.createWriteStream( filename) );

	};