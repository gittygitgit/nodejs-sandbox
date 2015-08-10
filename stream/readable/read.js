var stream = require('stream')
var fs = require('fs')
// how are files read?
// you can stream the file in using various read methods, or load the entire file into memory.

// how do you load an entire file into memory?
var buf = fs.readFileSync("test.properties")

// obtain a file descriptor and pass it into a read method.
var fh = fs.openSync("test.properties", 'r')
buf = new Buffer(100);

fs.readSync(fh, buf, 0, 10);;

// how can you read a file line by line?
// Open a stream to an existing file
// Pass the stream into the readline api.

// streams can be read in either flowing or nonflowing mode
// with flowing mode, data is read from the underlying resource asap and provided to your program ASAP.
// with non-flowing, you need to invoke read to feed data into your program.

// how do you switch between flowing and non-flowing mode?
// For flowing mode, add a listener to the data event.
// As soon as you add a data listener, data will start being streamed into your program.


// Readable stream API
// methods
//   pause
//     in flowing mode, stops emitting data events.  Any data is kept staged in the buffer.
//     if invoked in non-flowing mode, transitions api into flowing mode, but in paused mode.
//   resume
//     resumes emitting data events.
//     if invoked in non-flowing mode, transitions api into flowing mode

// events
//   data 
//     transitions program into flowing mode
//     data is being delivered to the program
//     data has been buffered and is not being delivered to the program

//   readable
//     invoked when there is data available to read in the buffer.
//     another event will be invoked only after the buffer has been drained.
//   end
//     no more data is available to read.

