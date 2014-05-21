
	var PNG = require('pngjs').PNG,
	fs = require("fs");

	var encode = function( dataString ){
		var len =  Math.ceil( dataString.length / 4 );
		var width = height = Math.ceil( len/Math.sqrt(len) );

		var img = new PNG({ width: width, height: height, filterType: 4 });


		for (var y = 0; y < img.height; y++) {
			for (var x = 0; x < img.width; x++) {
				var idx = (img.width * y + x) << 2;

				img.data[idx]   = dataString.charCodeAt(idx);
				img.data[idx+1] = dataString.charCodeAt(idx+1);
				img.data[idx+2] = dataString.charCodeAt(idx+2);
				img.data[idx+3] = dataString.charCodeAt(idx+3);
			}
		}
		return img;
	};

//	module.exports=function( dataBuffer, filename, cb ){
//
//		var img = encode( dataBuffer.toString("utf-8") );
//
//		if ( filename && cb ) {
//
//			img.pack().pipe( fs.createWriteStream(filename).on("finish", function ( err  ) {
//
//				cb(err, img );
//			}));
//		} else {
//			return img.pack();
//		}
//	};

	module.exports=function( input, outfile, cb ){

		var img,png,fileExists = fs.existsSync(input);

		if ( fileExists ) {
			img = encode( fs.readFileSync( input ).toString("utf-8") );
			png = img.pack().pipe( fs.createWriteStream(outfile).on("finish", function ( err  ) {
				if ( typeof cb === "function" ) {
					img.filename = png.path;
					cb(err, img);
				}
			}));
		} else if ( outfile && cb ) {

			img = encode( input.toString("utf-8"));
			png = img.pack().pipe( fs.createWriteStream(outfile).on("finish", function ( err  ) {
				if ( typeof cb === "function" ) {
					cb(err, img);
				}
			}));

		} else {
			return encode( input.toString("utf-8") ).pack();
		}
	};