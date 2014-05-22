
 var encode = require("../src/encode"),
	 decode = require("../src/decode"),

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


		encode( "test/jquery-2.1.1.js", "test/jquery-2.1.1.js.png", function( err, encoded ){

			 test.equals( encoded.height, 249);
			 test.equals( encoded.width, 249);
			 test.equals( encoded.filename, "test/jquery-2.1.1.js.png");
			 test.done();

		 });

	 },
	 readAndDecode:function( test ){

		 var expectedText = encode( "THE RAIN IN SPAIN").data.toString();

		 encode( "THE RAIN IN SPAIN", "test/SPANISHMAIN.png", function( err, encoded ){

			  decode("test/SPANISHMAIN.png", function( err, decoded ){
				  test.equals( decoded, "THE RAIN IN SPAIN");
				  test.done();
			  });
		 });
	 },
	 justDecode:function( test ){

		 var encodedText = encode( "THE RAIN IN SPAIN");
		 var decodedText = decode( encodedText );

		 test.equals( decodedText, "THE RAIN IN SPAIN");
		 test.done();

	 },
	 aaaa:function( test ){

		 encode( "aaaa", "test/aaaa.png", function( err, encoded ){

				 test.done();

		 });
	 }
 };