var util = require('util');

var b = new Buffer(10);

// Size of buffer is different from the number of readable bytes
b.write('H');

util.log(b.length); // outputs 10, not 1

var b = null;
var b = new Buffer(2);
