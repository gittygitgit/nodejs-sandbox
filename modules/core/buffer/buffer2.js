var util = require('util')
var fs = require('fs')
var readline = require('readline');

// Reads a file line by line
var rd = readline.createInterface({
    input: fs.createReadStream('foo.out'),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
    var b = new Buffer(line);
    var len = b.readInt8(0);
    util.log("length=" + len);

    msgBytes = b.slice(1, 1 + len);
    util.log("msgType=" + msgBytes.toString('ascii', 0, 1));
    util.log("|" + msgBytes.toString() + "|");
});

rd.on('close', function() {
    util.log("close");
});
