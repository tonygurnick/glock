
	var PNG = require('pngjs').PNG,
	fs = require("fs");

	module.exports=function( imageBuffer, filename, cb ){

		text = imageBuffer.toString("utf-8");

		var len =  Math.ceil( text.length / 4 );
		var width = height = Math.ceil( len/Math.sqrt(len) );

		var img = new PNG({ width: width, height: height, filterType: 4 });


		for (var y = 0; y < img.height; y++) {
			for (var x = 0; x < img.width; x++) {
				var idx = (img.width * y + x) << 2;

				img.data[idx]   = text.charCodeAt(idx);
				img.data[idx+1] = text.charCodeAt(idx+1);
				img.data[idx+2] = text.charCodeAt(idx+2);
				img.data[idx+3] = text.charCodeAt(idx+3);
			}
		}
		if ( cb ) {
			img.pack().pipe(fs.createWriteStream(filename).on("finish", function (err) {
				cb(err, filename)
			}));
		} else {
			return img.pack();
		}
	};
