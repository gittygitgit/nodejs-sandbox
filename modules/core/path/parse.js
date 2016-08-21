const path = require('path');

console.log(path.parse('/home/user/dir/file.txt'));
// returns
// {
//    root : "/",
//    dir : "/home/user/dir",
//    base : "file.txt",
//    ext : ".txt",
//    name : "file"
// }
