var fs = require('fs')
var util = require('util')
var os = require('os')

// open a new file
var f = fs.openSync("foo.txt", 'w')

// create buffer 
var b = new Buffer(10)
b.write("Hello.\u00fe")


// write something 
fs.writeSync(f, b, 0, b.length); 


// append a line using file system api
fs.appendFileSync("foo.txt", "Line 2")
fs.appendFileSync("foo.txt", "Line 3")

// The above writes didn't add a newline to end of each line.


