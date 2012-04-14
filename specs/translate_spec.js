var translate = require('../translate'),
    _ = require('../underscore');

var log = function(msg) {
  console.log(msg);
};

describe('translate', function() {
  describe('English letters to Googlerese letters', function() {
    it('a -> y', function() {
      expect( translate.toG('a') ).toBe('y');
    });


    it('o -> e', function() {
      expect( translate.toG('o') ).toBe('e');
    });

    it('z -> q', function() {
      expect( translate.toG('z') ).toBe('q');
    });
  });

});

return ;
