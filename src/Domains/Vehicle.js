"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(id, model, year, color, buyValue, status = false) {
        this.id = id;
        this.model = model;
        this.year = year;
        this.color = color;
        this.buyValue = buyValue;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getBuyValue() {
        return this.buyValue;
    }
    setBuyValue(buyValue) {
        this.buyValue = buyValue;
    }
}
exports.default = Vehicle;
