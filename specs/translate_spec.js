var translate = require('../translate'),
    _ = require('../underscore');

var log = function(msg) {
  console.log(msg);
};

var alphabet = 'abcdefghijklmnopqrstuvwxyz',
    place = function() { return alphabet.indexOf('a'); },
    GKey = 'y',
    EKey = 'a',
    offset = function() { return place(GKey) - place(EKey); }();

describe('translate', function() {
  describe('English letters to Googlerese letters', function() {
    it('a -> y', function() {
      expect( translate('a') ).toBe('y');
    });


    it('o -> e', function() {
      expect( translate('o') ).toBe('e');
    });

    it('z -> q', function() {
      expect( translate('z') ).toBe('q');
    });
  });

  describe('Assumptions', function() { 
    it('index of a is 0', function() {
      expect( place('a') ).toBe(0);
    });

    it('y - a === e - o places', function() {
      var left = place('y') - place('a');
      var right = place('e') - place('o');

      expect(left).toBe(right);
    });
  });
  
});

return;
