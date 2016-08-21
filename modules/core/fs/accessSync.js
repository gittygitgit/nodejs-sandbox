const fs = require('fs');

/*
 * accessSync doesn't differentiate between files and directories.
 */

let myDir = '/tmp/deleteme';

try {
  fs.accessSync(myDir);
} catch (e) {
  fs.mkdirSync(myDir);
}
