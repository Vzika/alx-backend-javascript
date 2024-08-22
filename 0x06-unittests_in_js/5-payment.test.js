const sendPaymentRequestToAPI = require('./5-payment');
const sinon = require('sinon');

describe('sendPaymentRequestToAPI', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" for arguments (100, 20)', () => {
    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('should log "The total is: 20" for arguments (10, 10)', () => {
    sendPaymentRequestToAPI(10, 10);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
  });
});
