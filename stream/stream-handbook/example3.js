var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);

// calls to push are buffered until a consumer is ready to read them.
rs.pipe(process.stdout);
