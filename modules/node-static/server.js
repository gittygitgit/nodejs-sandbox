var http = require('http');

// request handler
function handleHttp(req, res) {
  if (req.method === "GET") {
    if(/^\/\d+(?=$|[\/?#])/.test(req.url)) {
      req.addListener("end",function(){
        req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
        static_files.serve(req,res);
      });
      // calling resume since all response handling is handled by static_files
      req.resume();
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

var node_static = require("node-static");

// Serve files from current directory
var static_files = new node_static.Server(__dirname);

