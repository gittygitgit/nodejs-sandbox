const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));
  // Throws and crashes Node.js
