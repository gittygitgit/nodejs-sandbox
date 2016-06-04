"use strict";
var http = require('http');

var server = http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');
});

server.listen(80, '127.0.0.1', () => {
  console.log('listening on port 80');
});
/*
server.on('connect', (req, cliSock, head) => {

  console.log('connected');
});
*/
