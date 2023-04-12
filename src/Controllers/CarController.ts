import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  protected req: Request;
  protected res: Response;
  protected next: NextFunction;
  protected carService: CarService;
    
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }
    
  private newICar(req: Request): ICar {
    return {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status || false,
      buyValue: req.body.buyValue,
      doorsQty: req.body.doorsQty,
      seatsQty: req.body.seatsQty,
    };
  }
    
  public async newCar() {
    const car: ICar = this.newICar(this.req);
    const newCar = await this.carService.newCar(car);
    return this.res.status(201).json(newCar);
  }

  public async getAllCars() {
    const cars = await this.carService.getAllCars();
    return this.res.status(200).json(cars);
  }

  public async getCarById() {
    const { id } = this.req.params;
    const validId = isValidObjectId(id);
    if (!validId) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    const car = await this.carService.getCarById(id);
    if (!car) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(car);
  }
}

export default CarController;