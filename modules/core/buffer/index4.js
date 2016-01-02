var util = require('util')
var fs = require('fs')


var b = new Buffer(500)

var ws = fs.createWriteStream('foo')

b.writeInt16BE(314, 0);

ws.write(b)


