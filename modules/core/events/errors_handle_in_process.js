const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

process.on('uncaughtException', (err) => {
  console.log('whoops! there was an error');
});

myEmitter.emit('error', new Error('whoops!'));
  // Prints: whoops! there was an error
