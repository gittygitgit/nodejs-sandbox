var fs = require('fs');
var readline = require('readline');
UTIL = require('util');
fname = "foo.txt";

// Reads a file line by line



var rd = readline.createInterface({
    input: fs.createReadStream(fname),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
    console.log(line);
});

rd.on('close', function() {
    UTIL.log("close");
});
