import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

describe('Tests for car route', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Should register a new car', async function () {
    const newCar: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const createdCar = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(createdCar);

    const service = new CarService();
    const resolves = await service.newCar(newCar);
    
    expect(resolves).to.be.deep.equal(createdCar);
  });

  it('Should return all cars', async function () {
    const response = [
      new Car({
        id: '6348513f34c397abcad040b2',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      }),
    ];
    sinon.stub(Model, 'find').resolves(response);

    const service = new CarService();
    const resolves = await service.getAllCars();

    expect(resolves).to.be.deep.equal(response);
  });

  it('Should return a car with a valid id', async function () {
    const response = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
    sinon.stub(Model, 'findById').resolves(response);

    const service = new CarService();
    const resolves = await service.getCarById('6348513f34c397abcad040b2');

    expect(resolves).to.be.deep.equal(response);
  });
});