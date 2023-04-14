import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Tests for motorcycle route', function () {
  it('Should update a valid motorcycle', async function () {
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
    sinon.stub(Model, 'findByIdAndUpdate').resolves(response);

    const service = new MotorcycleService();
    const resolves = await service.updateMotorcycle('6348513f34c397abcad040b2', {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 31.000,
      category: 'Street',
      engineCapacity1: 600,
    });

    expect(resolves).to.be.deep.equal(response);
  });
});