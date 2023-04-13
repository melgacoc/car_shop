import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  protected req: Request;
  protected res: Response;
  protected next: NextFunction;
  protected motorcycleService: MotorcycleService;
    
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcycleService = new MotorcycleService();
  }
    
  private newIMotorcycle(req: Request): IMotorcycle {
    return {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status || false,
      buyValue: req.body.buyValue,
      category: req.body.category,
      engineCapacity: req.body.engineCapacity,
    };
  }
    
  public async newMotorcycle() {
    const motorcycle: IMotorcycle = this.newIMotorcycle(this.req);
    const newCar = await this.motorcycleService.newMotorcycle(motorcycle);
    return this.res.status(201).json(newCar);
  }

  public async getAllMotorcycles() {
    const cars = await this.motorcycleService.getAllMotorcycles();
    return this.res.status(200).json(cars);
  }

  public async getMotorcycleById() {
    const { id } = this.req.params;
    const validId = isValidObjectId(id);
    if (!validId) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    const motorcycle = await this.motorcycleService.getMotorcycleById(id);
    if (!motorcycle) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(motorcycle);
  }

  public async updateMotorcycle() {
    const { id } = this.req.params;
    const { body } = this.req;
    const validId = isValidObjectId(id);
    if (!validId) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    const updated = await this.motorcycleService.updateMotorcycle(id, body);
    if (!updated) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(updated);
  }
}

export default MotorcycleController;