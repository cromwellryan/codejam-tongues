var translate = require('../translate');

describe('translate', function() {
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
