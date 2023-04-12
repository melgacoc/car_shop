import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

class CarService {
  private carODM: CarODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }
    
  public async newCar(car: ICar) {
    const newCar = await this.carODM.newCar(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const cars = await this.carODM.getAllCars();
    return cars.map((car: ICar) => this.createCarDomain(car));
  }

  public async getCarById(id: string) {
    const car = await this.carODM.getCarById(id);
    if (!car) {
      return null;
    }
    return this.createCarDomain(car);
  }
}

export default CarService;
