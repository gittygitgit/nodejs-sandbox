Tail = require('tail').Tail;
var util = require('util');

// Tails a file.  If file contains information already, doesn't output anything.
// Doing cat >> foo.txt and appending data will generate output.
 

tail = new Tail("foo.txt");

tail.on("line", function(data) {
  util.log(data);
});

tail.on("error", function(error) {
  util.log('ERROR: ', error);
});

