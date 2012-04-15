var _ = require('./underscore');

var alphabet = ' abcdefghijklmnopqrstuvwxyz';
var glphabet = ' ynficwlbkuomxsevzpdrjgthaq'

function translateone( letter ) {

  var index = glphabet.indexOf(letter);
  
  return alphabet[index];
};

function translateGsentence( gsentence ) {
  var chain = _.chain(gsentence.split(''));

  var result = chain
    .map( translateone )
    .reduce( function(memo, eletter) { return memo + eletter; } )
    .value();

  return result;
};

module.exports = translateGsentence;
