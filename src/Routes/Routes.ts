import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).newCar());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAllCars());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCarById());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());
routes.post('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).newMotorcycle());
routes.get('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).getAllMotorcycles());
routes.get('/motorcycles/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).getMotorcycleById());
routes.put('/motorcycles/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).updateMotorcycle());

export default routes;