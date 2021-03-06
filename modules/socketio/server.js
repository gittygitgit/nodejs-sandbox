function handleHTTP(req,res) {
	if (req.method == "GET") {
                // only server requests for certain url patterns
		if (/^\/\d+(?=$|[\/?#])/.test(req.url)) {
			req.addListener("end",function(){
				req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html");
				static_files.serve(req,res);
			});
			req.resume();
		}
		else {
			res.writeHead(403);
			res.end();
		}
	}
	else {
		res.writeHead(403);
		res.end();
	}
}

// socket represents a specific client connection
function connection(socket) {

	function disconnect() {
		console.log("Client disconnected!");
		clearInterval(timer);
	}

	socket.on("disconnect",disconnect);

	var timer = setInterval(function(){
		socket.emit("hello",Math.random());
	},10);
}




var
	http = require("http"),
	httpserv = http.createServer(handleHTTP),

	port = 8006,
	host = "127.0.0.1",

	ASQ = require("asynquence"),
	node_static = require("node-static"),
	static_files = new node_static.Server(__dirname),

	io = require("socket.io").listen(httpserv)
;

require("asynquence-contrib");

httpserv.listen(port, host);

// invoked whenever a new websocket connection is started
io.on("connection",connection);

