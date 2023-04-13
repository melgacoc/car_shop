import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycles';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private motorcycleODM: MotorcycleODM;
    
  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }
    
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }
    
  public async newMotorcycle(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.motorcycleODM.newVehicle(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }
    
  public async getAllMotorcycles() {
    const motorcycles = await this.motorcycleODM.getAllVehicles();
    return motorcycles.map((motorcycle: IMotorcycle) =>
      this.createMotorcycleDomain(motorcycle));
  }
    
  public async getMotorcycleById(id: string) {
    const motorcycle = await this.motorcycleODM.getVehicleById(id);
    if (!motorcycle) {
      return null;
    }
    return this.createMotorcycleDomain(motorcycle);
  }
    
  public async updateMotorcycle(id: string, body: object) {
    const updatedMotorcycle = await this.motorcycleODM.updateVehicle(id, body);
    if (!updatedMotorcycle) {
      return null;
    }
    return this.createMotorcycleDomain(updatedMotorcycle);
  }
}

export default MotorcycleService;