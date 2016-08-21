const fs = require('fs');

const fname = '/tmp/foo.txt'

try {
  let stats = fs.statSync(fname)
  if (stats.isFile()) {
    console.log("Deleting file [fname=%s]", fname);
    fs.unlinkSync(fname);
  }
} catch (e) {
  console.error("File doesn't exist");
}
