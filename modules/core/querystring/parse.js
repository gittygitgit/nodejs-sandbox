const querystring = require('querystring');

var qsAsObj = querystring.parse('foo=bar&abc=xyz&abc=123');
console.log(qsAsObj);
