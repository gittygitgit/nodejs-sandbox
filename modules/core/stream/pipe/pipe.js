# What is a pipe?
# TODO


# a buffering channel between a source of data and a destination.

# Why pipes?
# To avoid overwhelming a destination where large amounts of data are to be read.

# What does overwhelming a destination look like?
# TODO

fs = require('fs')
zlib = require('zlib')

var r = fs.createReadStream('file.txt');
var z = zlib.createGzip();
var w = fs.createWriteStream('file.txt.gz');
r.pipe(z).pipe(w);

