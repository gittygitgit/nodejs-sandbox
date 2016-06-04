var HelloWorld = require('./helloworld');
var args = require('minimist')(process.argv.slice(2), { string: "file"});

console.log(HelloWorld.say(args.file));
