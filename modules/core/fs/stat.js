const fs = require('fs');

function isDir(aPath) {
  try {
    return fs.stat(aPath).isDirectory();
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log("directory doesn't exist");
      return false;
    } else {
      throw e;
    }
  }
}

let myDir = '/tmp/junk';
if (!isDir(myDir)) {
  console.log("creating directory");
  fs.mkdir(myDir);
} else {
  console.log("directory already exists.");
}
