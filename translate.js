
function translateone( letter ) {
  if( letter === 'o' )
    return 'e';
  if( letter === 'z' )
    return 'q';
  return 'y';
};

module.exports = translateone;
