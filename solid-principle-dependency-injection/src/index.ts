// Engine interface
interface IEngine {
    start(): void;
    stop(): void;
}

// Petrol engine implementation
class PetrolEngine implements IEngine {
    start(): void {
        console.log("Petrol engine started");
    }
    stop(): void {
        console.log("Petrol engine stopped");
    }
}

// Electric engine implementation
class ElectricEngine implements IEngine {
    start(): void {
        console.log("Electric engine started");
    }
    stop(): void {
        console.log("Electric engine stopped");
    }
}

// Vehicle class that depends on IEngine, but does not create it itself
class Vehicle {
    private engine: IEngine;

    // Engine is injected via constructor
    constructor(engine: IEngine) {
        this.engine = engine;
    }

    startVehicle(): void {
        this.engine.start();
    }

    stopVehicle(): void {
        this.engine.stop();
    }
}

class Main{
    electricEngine: ElectricEngine = new ElectricEngine();
    electricCar: Vehicle = new Vehicle(this.electricEngine);
    
    petrolEngine: PetrolEngine = new PetrolEngine();
    petrolCar: Vehicle = new Vehicle(this.petrolEngine);
        
    run() {
        this.electricCar.startVehicle();
        this.electricCar.stopVehicle();
        this.petrolCar.startVehicle();
        this.petrolCar.stopVehicle();
    }
}

const app = new Main();
app.run();

