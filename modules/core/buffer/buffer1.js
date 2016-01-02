var util = require('util')
var fs = require('fs')

var b = new Buffer(500)
var ws = fs.createWriteStream('foo.out')
b.writeInt8(32, 0);

b.writeInt8(66, 1);
b.writeInt8(1, 2);
b.fill(" ", 3, 33);
util.log(b.write("Sam Adams", 3));

util.log(b.write("\n", 33));
ws.write(b);




