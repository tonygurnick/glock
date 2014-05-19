
	var fs = require("fs");
	var ToErr = require("toerr");

	module.exports=function( filename, cb ){

		var glockFileEncoder = new ToErr("glock");
		glockFileEncoder.addMessage( "NOTFOUND", "F", "File %s does not exist");
		glockFileEncoder.addMessage( "FILEEXISTS", "I", "File exists");



		if ( fs.existsSync( filename )  ){
			fs.readFile( filename, function( err, data ) {

				if (err) cb( err );

				cb(null, {filename:filename});
			});
		} else {
			glockFileEncoder.log("NOTFOUND", filename );
		}


	};

//
//<?
//
//
//if (file_exists($filename)) {
//
//	$iFileSize = filesize($filename);
//
//	$iWidth = ceil(sqrt($iFileSize / 1));
//	$iHeight = $iWidth;
//
//	$im = imagecreatetruecolor($iWidth, $iHeight);
//
//	$fs = fopen($filename, "r");
//	$data = fread($fs, $iFileSize);
//	fclose($fs);
//
//	$i = 0;
//
//	for ($y=0;$y<$iHeight;$y++) {
//	for ($x=0;$x<$iWidth;$x++) {
//	$ord = ord($data[$i]);
//	imagesetpixel($im,
//	$x, $y,
//	imagecolorallocate($im,
//	$ord,
//	$ord,
//	$ord
//	)
//	);
//	$i++;
//	}
//	}
//
//	header("Content-Type: image/png");
//	imagepng($im);
//	imagedestroy($im);
//	}
//
//?>