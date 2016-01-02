var fs = require('fs');
var GrowingFile = require('growing-file')

// Simple example pipes data from store.dat into output.out.

var file = GrowingFile.open('store.dat',
  {
    timeout: 300000000,
    interval: 500,
    startFromEnd: false
  }
);
var out = fs.createWriteStream('output.out');

file.pipe(out);

