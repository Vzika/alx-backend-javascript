const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('SUM', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    assert.strictEqual(calculateNumber('SUM', 1, -2), -1);
    assert.strictEqual(calculateNumber('SUM', 1, 0), 1);
  });
});

describe('SUBTRACT', () => {
  it('should return the difference of two numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -2), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 0), 1);
  });
});

describe('DIVIDE', () => {
  it('should return the division of two numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 1, -2), -0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
