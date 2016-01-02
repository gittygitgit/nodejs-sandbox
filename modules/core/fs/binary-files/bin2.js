var fs = require('fs')

var wstream = fs.createWriteStream('session')

wstream.write("S1")
wstream.end()
