class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    buyValue: number,
    status = false,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.status = status;
  }

  public getId() {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getModel() {
    return this.model;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getYear() {
    return this.year;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
}

export default Vehicle;