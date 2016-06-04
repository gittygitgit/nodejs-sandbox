console.log(__dirname);
console.log(__filename);

/*
 * Variables defined outside of function scope end up in either module or
 * global scope.  In a browser, they end up in global scope.  In a node
 * module, they end up in module scope.
 */
console.log(global);

foo="test";

console.log(global['foo']);
console.log(module['foo']);
