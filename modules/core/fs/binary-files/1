var fs = require('fs')
var crypto = require('crypto')

var wstream = fs.createWriteStream('binFile');

var buffer = crypto.randomBytes(100);
wstream.write(buffer);
wstream.write(crypto.randomBytes(100));
wstream.end();	
