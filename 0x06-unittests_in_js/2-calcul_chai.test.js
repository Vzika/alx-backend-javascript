const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    expect(calculateNumber('SUM', 1, 2.3)).to.equal(3);
    expect(calculateNumber('SUM', 1.4, -2)).to.equal(-1);
    expect(calculateNumber('SUM', 1, 0)).to.equal(1);
  });
  it('should return the difference of two numbers', () => {
    expect(calculateNumber('SUBTRACT', 1, 2.3)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 1.4, -2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
  });
  it('should return the division of two numbers', () => {
    expect(calculateNumber('DIVIDE', 1, 2.3)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1.4, -2)).to.equal(-0.5);
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('should return undefined if the type is not: SUM, DIVIDE or SUBTRACT.', () => {
    expect(calculateNumber('MULTIPLY', 7, 2)).to.equal(undefined);
  });

  it('should return undefined if the type is not passed', () => {
    expect(calculateNumber(7, 2)).to.equal(undefined);
  });
});
