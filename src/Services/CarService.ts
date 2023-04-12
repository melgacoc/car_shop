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
}

export default CarService;
