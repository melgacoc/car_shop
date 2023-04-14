import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Tests for motorcycle route', function () {
  it('Should return a motorcycle with a valid id', async function () {
    const response = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });
    sinon.stub(Model, 'findById').resolves(response);

    const service = new MotorcycleService();
    const resolves = await service.getMotorcycleById('6348513f34c397abcad040b2');

    expect(resolves).to.be.deep.equal(response);
  });
});