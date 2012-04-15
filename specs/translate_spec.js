var translate = require('../translate'),
    _ = require('../underscore');

var log = function(msg) {
  console.log(msg);
};

describe('translate', function() {
  describe('Googlerese letters to English letters', function() {
    it('y -> a', function() {
      expect( translate('y') ).toBe('a');
    });


    it('e -> o', function() {
      expect( translate('e') ).toBe('o');
    });

    it('q -> z', function() {
      expect( translate('q') ).toBe('z');
    });
  });
  describe('G sentence to E sentence', function() {
    it('yeq -> aoz', function() {
      expect( translate('yeq') ).toBe('aoz');
    });
  });
});

return ;
