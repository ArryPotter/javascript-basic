
# Open Close Principle

Software entities (classes, modules, functions) should be open for extension but closed for modification.
For example, consider a Vehicle class as a superclass and a Truck class as its subclass. To add new functionality for Truck, you should avoid changing the Vehicle superclass. Instead, extend the behavior by overriding methods or adding new methods in the Truck subclass. This approach allows you to add features without modifying existing, tested code, promoting stability and maintainability.