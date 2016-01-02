var stream = require('stream')

// What is a stream?
// may be readable, writable, or both.

// what streams are both readable and writable?
// Implementations of Duplex and Transform

// How do you typically end up working with a stream?
// Many node libraries contain API's based on the stream API

// What is stream API?
// A set of interfaces / base classes that define operations for readable / writable "streams"


// buffering
// Streams (both readabl and writable buffer data to be read and written to an internal buffer structure
// Writable stream

// What are some examples of writable streams?
// System.out, fs.createWritableStream
// tty, file, socket, pipe

// Why streams?
// To limit the amount of memory used to read / write data from / to a resource.

// are writes to streams blocking?
// only to stdout / stderr



