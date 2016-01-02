var net = require('net');
var util = require('util');

// Overview:
// Creates a server.
// On receiving a connection, starts reading a file and writing file contents
// to the client socket.  If the end of the file is reached, continues to monitor
// the file until more data is appended.

// Simple server
var server = net.createServer(function(c) {
  util.log("Heard connection");

  c.write('hello\r\n');
  c.on('end', function() {
    util.log("Client disconnected.");
  });
  c.on('data', function(data) {
    util.log("Received data.");
  });
  var store = require('growing-file').open('store.dat', 
    {
      timeout: 300000000000,
      interval: 500,
      startFromEnd: false
    }
  );
  
  store.on('data', function(data) {
    util.log("data");
  });

  // start polling store and pipe to client socket
  store.pipe(c);

});
server.listen(8124, function() {
  util.log("Server listening on port 8124.");
});
