/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(range) {
    if (typeof range !== 'string') throw new TypeError('range must be a string');
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  // For privacy reasons, when cloneCar is called on a EVCar object,
  // the object returned should be an instance of Car instead of EVCar
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
