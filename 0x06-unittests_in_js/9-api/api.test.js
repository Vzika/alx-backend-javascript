const { expect } = require('chai');
const request = require('request');

describe('GET /', () => {
  it('responds with correct status code', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('responds with correct result', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) done(error);
      else {
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  });

  it('responds with correct status code', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('responds with correct result', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) done(error);
      else {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      }
    });
  });

  it('responds with correct status code', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(404);
        done();
      }
    });
  });

  it('responds with correct result', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) done(error);
      else {
        expect(body).to.equal('Cart ID is not a number');
        done();
      }
    });
  });
});
