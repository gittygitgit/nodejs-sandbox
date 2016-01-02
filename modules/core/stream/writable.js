
var stream = require('stream')
var fs = require('fs')

// stream data to a file
var s = fs.createWriteStream("foo.out")


// what can a writable stream be?
// tty, file, socket or pipe

// WritableStream.write returns a boolean
// if true, it is ok to continue writing to the stream right now.

s.write("line1\n");
s.write("line2\n");
s.end("this is the last line\n");

s.on('finish', function() {
  console.error('all writes are now complete.');
});
