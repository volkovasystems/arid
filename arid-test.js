const assert = require( "assert" );
const arid = require( "./arid.js" );

assert.equal( arid( [ ] ), true, "should be true" );

assert.equal( arid( [ 1, 2, 3 ] ), false, "should be false" );

console.log( "ok" );
