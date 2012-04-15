var translate = require('../translate'),
    _ = require('../underscore');

var log = function(msg) {
  console.log(msg);
};

describe('translate', function() {
  describe('English letters to Googlerese letters', function() {
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
});

return ;
