var fs = require('fs')
var util = require('util')

try {
fs.unlinkSync('tmp2')
fs.unlinkSync('tmp3')
} catch (error) {
}
// linkSync does not create a file.
// instead, it create a link.
fs.linkSync('foo.txt', 'tmp2')

// what's the diff between linkSync and symlinkSync?
// link creates a copy which stays in sync with the original file, event if you move or rename the original.
// If you delete the original file, the linked file remains and is usable.
// link essentially creates a replication pair
fs.symlinkSync('foo.txt', 'tmp3')

// symLink simply creates an alias to a file.
// Moving the file will cause the symlink to fail.



