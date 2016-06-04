var fs = require('fs');
var ASQ = require('asynquence');
require('asynquence-contrib');

var HelloWorld = {
  readFile: function(fname) {
    // create a sequence
    var seq = ASQ();

    // pass an error first callback to the async function call
    fs.readFile(fname, seq.errfcb());
   
    // return the seq to support chaining 
    return seq;
 
  },
  delayMsg: function(done, content) {
    setTimeout(function() {
      done(content);
    }, 2000);
  },
  say: function(fname) {
    //console.log("Hello World " + fname);
    return this.readFile(fname)
      .then(this.delayMsg);

    //return fs.readFileSync(fname);
  }
};
module.exports = HelloWorld;
