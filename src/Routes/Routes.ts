import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).newCar());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAllCars());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCarById());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());

export default routes;