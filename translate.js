var args = process.argv,
    _ = require('./underscore');

function log(message) {
  console.log(message);
};

log('Arguments');
log('=================');
_.rest(args,2).forEach( function(val, index, array) {
  log(index + ': ' + val);
} );

log('=================');
