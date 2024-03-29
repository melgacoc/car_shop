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
    const newCar = await this.carODM.newVehicle(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const cars = await this.carODM.getAllVehicles();
    return cars.map((car: ICar) => this.createCarDomain(car));
  }

  public async getCarById(id: string) {
    const car = await this.carODM.getVehicleById(id);
    if (!car) {
      return null;
    }
    return this.createCarDomain(car);
  }

  public async updateCar(id: string, body: object) {
    const updatedCar = await this.carODM.updateVehicle(id, body);
    if (!updatedCar) {
      return null;
    }
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;
