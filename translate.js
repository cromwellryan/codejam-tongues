var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var glphabet = 'yzficwlbkuomxsevnpdrjgthaq'

function translateone( letter ) {

  var index = glphabet.indexOf(letter);
  
  return alphabet[index];
};

module.exports = translateone;
