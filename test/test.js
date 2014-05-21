
 var encode = require("../src/encode"),
	 decode = require("../src/decode"),
	 writer = require("../src/writer"),
	 reader = require("../src/reader"),
 	 gm = require('gm').subClass({ imageMagick: true }),
 	 path=require("path");

 module.exports = {

	 encodeFile1x1:function( test ){
		 var text="abcd";

		  var img = encode( text );

			test.equals( img.width, 1 );
			test.equals( img.height, 1 );
			test.equals( img.data.toString("utf-8"), "abcd" );
			test.done();


	 },
	 encodeFile2x2a:function( test ){
		 var text="abcdefgh";

		 var img = encode( text );

			 test.equals( img.width, 2 );
			 test.equals( img.height, 2 );
			 test.equals( img.data.toString("utf-8"), "abcdefgh\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000" );
			 test.done();

	 },
	 encodeFile2x2b:function( test ){
		 var text="abcdefghijkl";

		 var img = encode( text );

			 test.equals( img.width, 2 );
			 test.equals( img.height, 2 );

			 test.done();




	 },
	 encodeFile2x2c:function( test ){
		 var text="abcdefghijklmnop";

		 var img = encode( text );

			 test.equals( img.width, 2 );
			 test.equals( img.height, 2 );

			 test.done();


 	 },
	 encodeFile3x3:function( test ){
		 var text="abcdefghijklmnopqrst";

		 var img = encode( text );

			 test.equals( img.width, 3 );
			 test.equals( img.height, 3 );

			 test.done();


	 },
	 encodeFileBigOne:function( test ){
		 var text="the rain in spain falls mainly on the plain and the quick brown fox jumped over the lazy dog";

		 var img = encode( text );

			 test.equals( img.width, 5 );
			 test.equals( img.height, 5 );

			 test.done();

	 },
	 encodeAndWrite:function( test ){
		 var text=reader("test/jquery-2.1.1.js");
		 var encodedFile = encode( text );

		 test.equals( encodedFile.height, 249);
		 test.equals( encodedFile.width, 249);


		 writer(  "test/jquery-2.1.1.js.png", encodedFile );


			 test.ok( true, "test/jquery-2.1.1.js.png");
			 test.done();




	 },
	 readAndDecode:function( test ){

//		 var img = writer( encode( "ABCDEFG" ), "test/ABCDEFG.png", function( err, filename ){
//
//
//		 });
//		var fileBuffer= reader("test/ABCDEFG.png");
//		           console.log(fileBuffer)
//		 test.equals( text, "ABCDEFG");


		 test.done();

	 }
 };