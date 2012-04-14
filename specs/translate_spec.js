var translate = require('../translate');

describe('translate', function() {
  it('a -> y', function() {
    expect( translate('a') ).toBe('y');
  });
});
