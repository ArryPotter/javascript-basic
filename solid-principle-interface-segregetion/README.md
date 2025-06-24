
# Interface Segregation Principle

 Clients should not be forced to depend on interfaces they do not use. It's better to have many specific interfaces rather than a large general interface.

# Key Points:
- IVehicle defines the core vehicle operations applicable to all vehicles.
- IHeavyVehicle extends IVehicle and adds cargo-related capability.
- IPassengerVehicle extends IVehicle and adds passenger door control.
- Car implements only passenger vehicle methods and does not have to implement cargo-related methods.
- Truck implements heavy vehicle methods without passenger-specific methods.
- This segregation prevents classes from being forced to implement unnecessary methods, following the Interface Segregation Principle.