import { Model, model, Schema, models, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
    protected model: Model<T>;
    protected schema: Schema;
    protected modelName: string;

    constructor(schema: Schema, modelName: string) {
        this.schema = schema;
        this.modelName = modelName;
        this.model = models[modelName] || model(modelName, this.schema);
    }

    public async newVehicle(obj: T): Promise<T> {
        const newVehicle = await this.model.create({ ...obj });
        return newVehicle;
    }

    public async getAllVehicles(): Promise<T[]> {
        const vehicles = await this.model.find({});
        return vehicles;
    }

    public async getVehicleById(id: string): Promise<T | null> {
        const vehicle = await this.model.findById(id);
        return vehicle;
    }

    public async updateVehicle(id: string, body: object): Promise<T | null> {
        return this.model.findByIdAndUpdate({ _id: id }, { ...body } as UpdateQuery<T>, {
          new: true,
        });
    }
}

export default AbstractODM;