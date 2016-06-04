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
    util.log("Read line [" + b.length + "]");
    var len = b.readInt8(0);
    util.log("line=|" + line + "|");
    util.log("length=" + len);

    msgBytes = b.slice(1, 1 + len);

    var msgType = String.fromCharCode(msgBytes.readInt8(0));
    util.log(util.format("msgType      = [%s]",  msgType));
    
    switch (msgType)
    {
    case 'B':
      util.log(util.format("id           = [%d]",  msgBytes.readInt8(1)));
      util.log(util.format("name         = [%s]",  msgBytes.toString('ascii', 2, 32)));
      util.log(util.format("country      = [%s]",  msgBytes.toString('ascii', 32, 53)));
      break;
    case 'S':
      util.log(util.format("id           = [%d]",  msgBytes.readInt8(1)));
      util.log(util.format("name         = [%s]",  msgBytes.toString('ascii', 2, 30)));
      break;
    case 'A':
      util.log(util.format("id           = [%d]",  msgBytes.readInt8(1)));
      util.log(util.format("name         = [%s]",  msgBytes.toString('ascii', 2, 30)));
      break;
    default:
      util.log("unknown msgType");      
    }
});

rd.on('close', function() {
    util.log("close");
});
