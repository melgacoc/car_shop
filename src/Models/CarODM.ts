import { Model, model, Schema, models, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private model: Model<ICar>;
  private schema: Schema;

  constructor() {
    this.schema = new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.Car || model('Car', this.schema);
  }

  public async newCar(car: ICar): Promise<ICar> {
    const newCar = await this.model.create({ ...car });
    return newCar;
  }

  public async getAllCars(): Promise<ICar[]> {
    const cars = await this.model.find({});
    return cars;
  }

  public async getCarById(id: string): Promise<ICar | null> {
    const car = await this.model.findById(id);
    return car;
  }

  public async updateCar(_id: string, body: object): Promise<ICar | null> {
    return this.model.findByIdAndUpdate({ _id }, { ...body } as UpdateQuery<ICar>, {
      new: true,
    });
  }
}

export default CarODM;