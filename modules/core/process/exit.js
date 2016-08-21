console.log('about to exit');


process.on('exit', function (code)  {
  console.log('exiting with code:', code);
});
process.exit(1);
