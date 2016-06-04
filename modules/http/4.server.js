var http = require('http');
var ASQ = require('asynquence');
require('asynquence-contrib');

// request handler
function handleHttp(req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
 
      ASQ(function(done) {
        setTimeout(function() {
          done(Math.random());
        }, 2000);
      })
      .then(function(done, num) {
        setTimeout(function() {
          done("Hello world: " + num);
        }, 2000);
      })
      .val(function(msg) {
        res.end(msg);
      });
    } else {
      res.writeHead(403);
      res.end("Get outta here!");
    }
  } else {
    res.writeHead(403);
    res.end("Get outta here!");
  }
}

var host = 'localhost';
var port = 8006;

// create http server
var http_srv = http.createServer(handleHttp).listen(port, host);


