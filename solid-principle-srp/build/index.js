"use strict";
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    getDetails() {
        return `Car Name: ${this.name}, Model: ${this.model}`;
    }
    startEngine() {
        return `Starting the engine of ${this.name} ${this.model}`;
    }
    stopEngine() {
        return `Stopping the engine of ${this.name} ${this.model}`;
    }
}
class Main {
    constructor() {
        this.car = new Car("Toyota", "Corolla");
    }
    run() {
        const carDetails = this.car.getDetails();
        const engineStart = this.car.startEngine();
        const engineStop = this.car.stopEngine();
        console.log(carDetails);
        console.log(engineStart);
        console.log(engineStop);
    }
}
const app = new Main();
app.run();
