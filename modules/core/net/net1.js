var net = require('net')
var util = require('util')

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
});
server.listen(8124, function() {
  util.log("Server listening on port 8124.");
});
