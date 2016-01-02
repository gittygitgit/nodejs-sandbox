var util = require('util')
// buffer is a global, so there's no need to use require
// globals are available in all modules

// octet stream...
// a stream of values which may have 256 distinct values
// a stream of bytes

// buffers cannot be resized


// create a buffer is 20 bytes
var b = new Buffer(2, 'ascii');

// write a word into the buffer
// by default, offset is 0, length is buffer.length - offset, encoding is utf8
//b.write("hello", 0, 1);
b.write("h", 0, 1);
b.write("i", 1, 1);

util.puts(b.length)
util.puts(b[0])
util.puts(b[1])
util.puts(b.toString());


// what byte values is a buffer initialized to?
// creating a new buffer and then printing the values of each byte yields seemingly random characters

// character encoding
// a system for converting a set of characters into some coded representation
// codes may include pulses, bit patterns, octets, etc.


