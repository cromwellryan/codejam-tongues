var alphabet = 'abcdefghijklmnopqrstuvwxyz',
    place = function() { return alphabet.indexOf('a'); },
    GKey = 'y',
    EKey = 'a',
    offset = function() { return place(GKey) - place(EKey); }();

function translateone( letter ) {
  if( letter === 'o' )
    return 'e';
  if( letter === 'z' )
    return 'q';
  return 'y';
};

module.exports = {
  toG: translateone
};
