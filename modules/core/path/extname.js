const path = require('path');

console.log(path.extname('/tmp/foo.txt'));
// returns .txt

console.log(path.extname('~/.bash_profile'));
// returns ''
