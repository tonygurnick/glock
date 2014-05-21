
	var PNG = require('pngjs').PNG,
	fs = require("fs");

	module.exports=function( filename, cb ){

		fs.createReadStream(filename)
		.pipe(new PNG({
			filterType: 4
		}))
		.on('parsed', function() {
			var out=[];
			for (var y = 0; y < this.height; y++) {
				for (var x = 0; x < this.width; x++) {
					var idx = (this.width * y + x) << 2;


					out.push( String.fromCharCode( this.data[idx]   ) );
					out.push( String.fromCharCode( this.data[idx+1] ) );
					out.push( String.fromCharCode( this.data[idx+2] ) );
					out.push( String.fromCharCode( this.data[idx+3] ) );
				}
			}

			cb( null, out.join(""));
		});
	}


