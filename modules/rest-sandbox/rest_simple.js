const rest = require('rest');
const client = require('rest/client/node');

var request = { path: 'http://jsonplaceholder.typicode.com/posts' }

client(request).then(
  function (response) {
    console.log(response);
  }
);

