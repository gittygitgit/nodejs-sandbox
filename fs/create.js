var fs = require('fs')
var util = require('util')

// Ignoring links, how do you create files?
// Call fs.open passing in the name of a non-existing file
var fd = fs.openSync('test1.txt', 'w')

// call fs.writeFile
var fd = fs.writeFileSync("test2.txt", "hello\nthere\n")

// call fs.appendFileSync
// will create the file if doesn't exist already

// call fs.createWritableStream
var s = fs.createWriteStream("foo.txt");
s.write("line1\n")
s.write("line2\n")
s.write("line3\n")
s.write("line4\n")




