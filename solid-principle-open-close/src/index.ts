
abstract class Vehicle {  
    name: string;
    model: string;

    constructor(name: string, model: string) {
        this.name = name;
        this.model = model;
    } 

    abstract getDetails(): string;

    startEngine(): string {
        return `Starting the engine of ${this.name} ${this.model}`;
    }
    
    stopEngine(): string {
        return `Stopping the engine of ${this.name} ${this.model}`;
    }
}


class Truck extends Vehicle{
    loadCapacity: number;

    constructor(name: string, model: string, loadCapacity: number) {
        super(name, model);
        this.loadCapacity = loadCapacity;
    }

    getDetails(): string {
        return `Truck Name: ${this.name}, Model: ${this.model}`;
    }

    startEngine(): string {
        return `Starting the engine of ${this.name} ${this.model}`;
    }
    
    stopEngine(): string {
        return `Stopping the engine of ${this.name} ${this.model}`;
    }
} 

class Main{    
    truck: Truck = new Truck("Hino", "Dutro", 1000);

    run() {
        const truckDetails = this.truck.getDetails();
        const engineStart = this.truck.startEngine();
        const engineStop = this.truck.stopEngine();

        console.log(truckDetails);
        console.log(engineStart);
        console.log(engineStop);
    }
}

const app = new Main();
app.run();

