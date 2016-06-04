var fs = require('fs');

var HelloWorld = {
  say: function(fname) {
    //console.log("Hello World " + fname);
    return fs.readFileSync(fname);
  }
};
module.exports = HelloWorld;
