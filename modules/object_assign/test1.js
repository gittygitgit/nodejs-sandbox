var assign = require('object-assign');

var orig = {foo: 0};

var target = {bar: 1};

assign(target, orig);
console.log(target);

// Overwrites existing keys

assign(target, {bar:100});
console.log(target);
