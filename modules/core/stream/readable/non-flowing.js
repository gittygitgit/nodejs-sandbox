fs = require("fs");
util = require("util");

var rs = fs.createReadStream('dummy.txt');
var line;
rs.on('open', function() {
  // open event is fired before readable
  util.log("open");
});


// data is internally buffered
rs.on('readable', function() {
  // only after the internal buffer is emptied will readable be invoked again
  util.log('readable');
  while ((chunk = rs.read(50)) != null) {
    util.log(chunk);
    
  }  
});


