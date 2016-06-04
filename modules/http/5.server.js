var http = require('http');

// request handler
function handleHttp(req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.write("Hello World");
      res.end(" - " + Math.random());
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


