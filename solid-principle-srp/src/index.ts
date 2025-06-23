
class Car {
    name: string;
    model: string;

    constructor(name: string, model: string) {
        this.name = name;
        this.model = model;
    }

    getDetails(): string {
        return `Car Name: ${this.name}, Model: ${this.model}`;
    }

    startEngine(): string {
        return `Starting the engine of ${this.name} ${this.model}`;
    }
    
    stopEngine(): string {
        return `Stopping the engine of ${this.name} ${this.model}`;
    }
}

class Main {
    car: Car = new Car("Toyota", "Corolla");
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

