
	var PNG = require('pngjs').PNG,
	fs = require("fs");

 	var decode = function( png ){
		var out=[];
		for (var y = 0; y < png.height; y++) {
			for (var x = 0; x < png.width; x++) {
				var idx = (png.width * y + x) << 2;


				out.push( String.fromCharCode( png.data[idx]   ) );
				out.push( String.fromCharCode( png.data[idx+1] ) );
				out.push( String.fromCharCode( png.data[idx+2] ) );
				out.push( String.fromCharCode( png.data[idx+3] ) );
			}
		}
		return out.join("");
	};

	module.exports=function( filename, cb ){


		if ( !cb && filename.data && filename.width ) {
		     return decode(filename).replace(/\u0000/gi,"");
		} else {
			fs.createReadStream(filename)
				.pipe(new PNG({
					filterType: 4
				}))
				.on('parsed', function () {
					cb(null, decode(this).replace(/\u0000/gi,""));
				});
		}
	};


