var fs = require('fs')
var util = require('util')

var filename = "random.txt";

// verify file exists

var e = fs.existsSync(filename);
util.puts(util.format("Does %s exist? %s", filename, e));


// read the entire file into memory
// since no encoding is specified, this returns a buffer.
var data = fs.readFileSync(filename);

util.puts(data.length);
util.puts(data.toString());

// read part of the file into a buffer.
// read first 300 bytes into buffer
var b = new Buffer(300);
fs.readSync(fs.openSync(filename, 'r'), b, 0, 300);
util.puts(b.toString());

// read 10 bytes from file, starting at the 300th byte
fs.readSync(fs.openSync(filename, 'r'), b, 0, 10, 300);



console.log(data);
// open the file
var file = fs.openSync(filename, 'r');

var buf = new Buffer(100);

fs.readSync(file,buf, 0, 100)

util.puts(buf.toString()); 
