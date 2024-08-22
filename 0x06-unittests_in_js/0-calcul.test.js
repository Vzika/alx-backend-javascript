const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber function', () => {
  it('should round both numbers and return their sum', () => {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });
  it('should round both numbers and return their sum', () => {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });
  it('should round both numbers and return their sum', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });
  it('should round both numbers and return their sum', () => {
    const result = calculateNumber(1.5, -3.7);
    assert.equal(result, -2);
  });
});
