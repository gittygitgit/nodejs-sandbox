const path = require('path');

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));
console.log(path.join('foo', 'bar', 'baz','asdf', 'test'));
// returns '/foo/bar/baz/asdf'

console.log(path.join('foo', {}, 'bar'));
// throws TypeError: Arguments to path.join must be strings
