var util = require('util')
var fs = require('fs')

var ws = fs.createWriteStream('foo.out')

// Brewery
var b = new Buffer(54)

b.writeInt8(53, 0);
b.writeInt8("B".charCodeAt(), 1);
b.writeInt8(1, 2);
b.fill(" ", 3, 33);
util.log(b.write("Sam Adams", 3));
b.fill(" ", 33, 53);
b.write("United States", 33);
util.log(b.write("\n", 53));

util.log(ws.write(b));

// Brewery
var c  = new Buffer(54)

c.writeInt8(53, 0);
c.writeInt8("B".charCodeAt(), 1);
c.writeInt8(1, 2);
c.fill(" ", 3, 33);
util.log(c.write("Stone", 3));
c.fill(" ", 33, 53);
c.write("United States", 33);
util.log(c.write("\n", 53));

ws.write(c);

// Style 
b  = new Buffer(33)

b.writeInt8(32, 0);
b.writeInt8("S".charCodeAt(), 1);
b.writeInt8(1, 2);
b.fill(" ", 3, 33);
util.log(b.write("Kolsch", 3));
util.log(b.write("\n", 32));

ws.write(b);








