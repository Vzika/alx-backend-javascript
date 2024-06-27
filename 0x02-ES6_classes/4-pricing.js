/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = currency;
  }

  /**
   * Returns the full price including the currency.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
   * Converts the price to a new currency.
   *
   * @param {string} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
