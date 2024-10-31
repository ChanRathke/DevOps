var main = require('../index');
var assert = require('assert');

describe('Regular factorial value', function() {
    it('should return 5 for Fact(5)', function() {
        assert.strictEqual(main.factorial(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.factorial(0), 0);
      assert.strictEqual(main.factorial(1), 1);
    });
});