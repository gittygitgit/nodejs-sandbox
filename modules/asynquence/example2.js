var HelloWorld = require('./helloworld2');
var args = require('minimist')(process.argv.slice(2), { string: "file"});

HelloWorld.say(args.file).val(function(content) {
  console.log(content.toString());
}).or(function(err) {
  console.error("Error:" + err);
});

