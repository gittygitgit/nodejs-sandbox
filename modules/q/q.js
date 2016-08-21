const Q = require('q');
const fs = require('fs');


function checkFile(fname) {
  return Q.promise(function(resolve, reject, notify) {
    fs.stat(fname, (err, stats) => {
      if (err) {
        reject(new Error("Problem getting stats [fname: " + fname + "]"));
      } else {
        resolve(stats);
      }
    })
  });
}

const fname = '/tmp/foo.txt';

checkFile(fname)
.then(function(stats){console.log("resolved");}, function(e){console.error(e)});




/*
promiseMeSomething()
.then(function (value) {
}, function (reason) {
});
*/
