import { Car, Truck } from "../src/index";

describe("Car", () => {
    let car: Car;
    beforeEach(() => {
        car = new Car("Toyota", "Corolla");
    });

    it("should print car details", () => {
        const spy = jest.spyOn(console, "log");
        car.getDetails();
        expect(spy).toHaveBeenCalledWith("Car: Toyota Corolla");
        spy.mockRestore();
    });

    it("should start engine", () => {
        const spy = jest.spyOn(console, "log");
        car.startEngine();
        expect(spy).toHaveBeenCalledWith("Car engine started.");
        spy.mockRestore();
    });

    it("should stop engine", () => {
        const spy = jest.spyOn(console, "log");
        car.stopEngine();
        expect(spy).toHaveBeenCalledWith("Car engine stopped.");
        spy.mockRestore();
    });

    it("should open doors", () => {
        const spy = jest.spyOn(console, "log");
        car.openDoors();
        expect(spy).toHaveBeenCalledWith("Car doors opened.");
        spy.mockRestore();
    });

    it("should close doors", () => {
        const spy = jest.spyOn(console, "log");
        car.closeDoors();
        expect(spy).toHaveBeenCalledWith("Car doors closed.");
        spy.mockRestore();
    });
});

describe("Truck", () => {
    let truck: Truck;
    beforeEach(() => {
        truck = new Truck("Hino", "Dutro", 1000);
    });

    it("should print truck details", () => {
        const spy = jest.spyOn(console, "log");
        truck.getDetails();
        expect(spy).toHaveBeenCalledWith("Truck: Hino Dutro, Max Load: 1000 kg");
        spy.mockRestore();
    });

    it("should start engine", () => {
        const spy = jest.spyOn(console, "log");
        truck.startEngine();
        expect(spy).toHaveBeenCalledWith("Truck engine started.");
        spy.mockRestore();
    });

    it("should stop engine", () => {
        const spy = jest.spyOn(console, "log");
        truck.stopEngine();
        expect(spy).toHaveBeenCalledWith("Truck engine stopped.");
        spy.mockRestore();
    });

    it("should load cargo within max load", () => {
        const spy = jest.spyOn(console, "log");
        truck.loadCargo(500);
        expect(spy).toHaveBeenCalledWith("Loaded 500 kg of cargo. Current cargo weight: 500 kg");
        spy.mockRestore();
    });

    it("should not load cargo exceeding max load", () => {
        const spy = jest.spyOn(console, "log");
        truck.loadCargo(1500);
        expect(spy).toHaveBeenCalledWith("Cannot load 1500 kg. Exceeds max load of 1000 kg.");
        spy.mockRestore();
    });

    it("should unload cargo", () => {
        truck.loadCargo(400);
        const spy = jest.spyOn(console, "log");
        truck.unloadCargo();
        expect(spy).toHaveBeenCalledWith("Unloaded 400 kg of cargo.");
        spy.mockRestore();
    });
});
