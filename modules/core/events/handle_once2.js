const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();
var m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
  // Prints: 1
myEmitter.emit('event');
  // Ignored
