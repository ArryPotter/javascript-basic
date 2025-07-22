
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
export class Car implements IPassengerVehicle {
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

export class Truck implements IHeavyVehicle {
    private cargoWeight: number = 0;   
    constructor(private brand: string, private model: string, private maxLoad: number) {}
    getDetails(): void {
        console.log(`Truck: ${this.brand} ${this.model}, Max Load: ${this.maxLoad} kg`);
    }
    startEngine(): void {
        console.log("Truck engine started.");
    }
    stopEngine(): void {
        console.log("Truck engine stopped.");
    }
    loadCargo(weight: number): void {
        if (weight <= this.maxLoad) {
            this.cargoWeight += weight;
            console.log(`Loaded ${weight} kg of cargo. Current cargo weight: ${this.cargoWeight} kg`);
        } else {
            console.log(`Cannot load ${weight} kg. Exceeds max load of ${this.maxLoad} kg.`);
        }
    }
    unloadCargo(): void {   
        console.log(`Unloaded ${this.cargoWeight} kg of cargo.`);
        this.cargoWeight = 0;
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

