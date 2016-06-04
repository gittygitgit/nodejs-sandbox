var path=require('path');

/*
 * Various misc path functionality
 */

var separator = path.sep;
var normalized = path.normalize('//a////b/c/./');
var joined = path.join(process.cwd(), 'foo', 'bar');


console.log(separator);
console.log(normalized);
console.log(joined);

console.log(path.basename(joined));
console.log(path.basename('/var/foo/bar/test.js'));
console.log(path.basename('/var/foo/bar/test.js', path.extname('var/foo/bar/test.js')));
console.log(path.extname('/var/foo/bar/test.js'));

