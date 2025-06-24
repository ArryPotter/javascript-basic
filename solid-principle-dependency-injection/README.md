
# Dependency Injection Principle

 High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Also, abstractions should not depend on details; details should depend on abstractions

# Key points:
- The Vehicle class depends on the IEngine interface instead of concrete engine types.
- Different engine implementations (PetrolEngine, ElectricEngine) can be injected at runtime.
- This allows flexible swapping of engine types without modifying the Vehicle class.
- Enables easier unit testing by injecting mock engines if needed.
- Follows the Dependency Injection and Dependency Inversion Principles in SOLID.