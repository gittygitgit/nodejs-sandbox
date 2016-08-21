const fs = require('fs');

const fname = '/tmp/foo.txt'

try {
  let stats = fs.stat(fname)
  if (stats.isFile()) {
    console.log("Deleting file [fname=%s]", fname);
    fs.unlink(fname);
  }
} catch (e) {
  console.error("File doesn't exist");
}
