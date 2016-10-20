var expect = require('chai').expect;
var calcula = require('../index');

describe('index', function() {

  it('should be result', function() {
    expect(calcula(1,1,1)).to.equal(4.01);
  });

});
