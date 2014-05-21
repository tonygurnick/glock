
var PNG = require('pngjs').PNG;
	module.exports = function( buffer  ){

//		PNG.parse(buffer, function( err, img){
//
//			console.log(">>>>",err,img )
//		})

		var out =[];
//
//		for (var y = 0; y < img.height; y++) {
//			for (var x = 0; x < img.width; x++) {
//				var idx = (img.width * y + x) << 2;
//				//console.log(idx)
//				out.push( String.fromCharCode( img.data[idx]  ) );
//				out.push( String.fromCharCode( img.data[idx+1]) );
//				out.push( String.fromCharCode( img.data[idx+2]) );
//				out.push( String.fromCharCode( img.data[idx+3]) );
//			}
//		}

		return out;
	}


