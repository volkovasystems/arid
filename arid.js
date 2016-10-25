"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "arid",
			"path": "arid/arid.js",
			"file": "arid.js",
			"module": "arid",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/arid.git",
			"test": "arid-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if array is absolutely empty.

		Array containing falsy values considered absolute empty.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"truly": "truly"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var doubt = require( "doubt" );
	var truly = require( "truly" );
}

if( typeof window != "undefined" &&
	!( "doubt" in window ) )
{
	throw new Error( "doubt is not defined" );
}

if( typeof window != "undefined" &&
	!( "truly" in window ) )
{
	throw new Error( "truly is not defined" );
}

var arid = function arid( array ){
	/*;
		@meta-configuration:
			{
				"array:required": "[*]"
			}
		@end-meta-configuration
	*/

	if( !doubt( array ).AS_ARRAY ){
		throw new Error( "invalid array" );
	}

	return ( array.length == 0 ||
		
		array.filter( function onEachItem( item ){
			return truly( item );
		} ).length == 0 );
};

if( typeof module != "undefined" ){
	module.exports = arid;
}
