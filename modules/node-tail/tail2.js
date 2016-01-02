UTIL = require('util')
Tail = require('tail').Tail;
var fs = require('fs');
var readline = require('readline');

fname = "foo.txt";

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

    tail = new Tail(fname);

    tail.on("line", function(data) {
      UTIL.log(data);
    });

    tail.on("error", function(error) {
      UTIL.log('ERROR: ', error);
    });
});
