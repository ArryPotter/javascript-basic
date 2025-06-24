
interface IVehicle {  
    getDetails(): void;

    startEngine(): void;
    
    stopEngine(): void;
}

// Interface for heavy-duty vehicle operations
interface IHeavyVehicle extends IVehicle {
    loadCargo(weight: number): void;
}

// Interface for passenger vehicle operations
interface IPassengerVehicle extends IVehicle {
    openDoors(): void;
    closeDoors(): void;
}

// Car class only deals with passenger functionality
class Car implements IPassengerVehicle {
    constructor(private brand: string, private model: string) {}
    getDetails(): void {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
    startEngine(): void {
        console.log("Car engine started.");
    }
    stopEngine(): void {
        console.log("Car engine stopped.");
    }
    openDoors(): void {
        console.log("Car doors opened.");
    }
    closeDoors(): void {
        console.log("Car doors closed.");
    }
}

// Truck class deals with heavy vehicle functionality
class Truck implements IHeavyVehicle {
    constructor(private brand: string, private model: string, private capacity: number) {}
    getDetails(): void {
        console.log(`Truck: ${this.brand} ${this.model}, Capacity: ${this.capacity} kg`);
    }

    startEngine(): void {
        console.log("Truck engine started.");
    }
    stopEngine(): void {
        console.log("Truck engine stopped.");
    }
    loadCargo(weight: number): void {
        console.log(`Loading ${weight} kg of cargo into the truck.`);
    }
}

class Main{
    truck: Truck = new Truck("Hino", "Dutro", 1000); 
    car: Car = new Car("Toyota", "Corolla");  
    run() {
        this.truck.getDetails();
        this.car.getDetails();
    }
}

const app = new Main();
app.run();

