const fs = require('fs');

function isDirSync(aPath) {
  try {
    return fs.statSync(aPath).isDirectory();
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
if (!isDirSync(myDir)) {
  console.log("creating directory");
  fs.mkdirSync(myDir);
} else {
  console.log("directory already exists.");
}
