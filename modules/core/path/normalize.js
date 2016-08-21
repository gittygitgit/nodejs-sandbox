const path = require('path');

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
// returns '/foo/bar/baz/asdf'
