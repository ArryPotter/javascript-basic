
 class Vehicle {  
    name: string;
    model: string;

    constructor(name: string, model: string) {
        this.name = name;
        this.model = model;
    } 

    getDetails(): string {
        return `Vehicle Name: ${this.name}, Model: ${this.model}`;
    }

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

class SportCar extends Vehicle {
    topSpeed: number;

    constructor(name: string, model: string, topSpeed: number) {
        super(name, model);
        this.topSpeed = topSpeed;
    }

    getDetails(): string {
        return `SportCar Name: ${this.name}, Model: ${this.model}, Top Speed: ${this.topSpeed} km/h`;
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
    sportCar: SportCar = new SportCar("Ferrari", "488", 340);
    getVehicleDetails(vehicle: Vehicle) { // This vehicle object can be replaced by Truck or SportCar
        console.log(vehicle.getDetails());
    }

    run() {
        // Vehicle can be replaceabe by truck and sportcar without changing the correctness of the program    
        this.getVehicleDetails(this.truck);
        this.getVehicleDetails(this.sportCar);
    }
}

const app = new Main();
app.run();

