const path = require('path');

console.log(path.basename('/tmp/foo.txt'));
  // returns 'foo.txt'

console.log(path.basename('/tmp/foo.txt', '.txt'));
  // returns 'foo'
