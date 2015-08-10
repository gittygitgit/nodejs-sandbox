var util = require('util')

// util has a bunch of different methods for outputting
// what's the difference between then?

// what's the difference between stdout and stderr?


// There's debug, error, puts, print, log
// error prints to stderr
util.error("testing")

// Debug prints a DEBUG: prefix, then text.
util.debug("testing", "test")

// Log outputs a timestamp prefix, then text.
util.log("log")


// print outputs to stdout without a newline after each argument.
util.print("hello", "there", "you")

// puts outputs to stdout with a newline after each argument.
util.puts("hello", "there", "you")
// format
util.format("Testing %d", 123);

