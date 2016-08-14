var parseArgs=require('minimist')

result = parseArgs(process.argv.slice(2))
console.dir(result)

process.on('exit', function(code) {
  switch(code) {
    case 0:
      break;
    case 1:
      console.log('Missing required argument:', 'xml');
      break;
    default:
      console.log('Exiting with code:', code);
  }
});

if (result['xml'] == undefined) {
  process.exit(1);
}
