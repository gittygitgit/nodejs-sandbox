const fs = require('fs');
const path = require('path');

// If `dir` and `base` are provided,
// `${dir}${path.sep}${base}`
// will be returned.
console.log(path.format({
  dir: '/home/user/dir',
  base: 'file.txt'
}));
// returns '/home/user/dir/file.txt'

// `root` will be used if `dir` is not specified.
// If only `root` is provided or `dir` is equal to `root` then the
// platform separator will not be included.
console.log(path.format({
  root: '/',
  base: 'file.txt'
}));
// returns '/file.txt'

// `name` + `ext` will be used if `base` is not specified.
console.log(path.format({
  root: '/',
  name: 'file',
  ext: '.txt'
}));
// returns '/file.txt'

// `base` will be returned if `dir` or `root` are not provided.
console.log(path.format({
  base: 'file.txt'
}));
// returns 'file.txt'
