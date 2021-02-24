// Classes allow us to create 'blueprints' for objects
// In Angular Classes are used to create Components, Services, Directives, Pipes, ...
// How to create a class
// create class using the class kw 
var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed || 0;
        // condition to check if speed ! 0 
    }
    Car.prototype.accelerate = function () {
        this.speed++;
        console.log(this.speed++);
    };
    Car.prototype.throttle = function () {
        this.speed--;
        console.log(this.speed--);
    };
    Car.prototype.getSpeed = function () {
        console.log(this.speed);
        // prints our current speed 
        // way to access the property 
    };
    // static - neednot provide specific instance 
    // used for general utility  
    Car.numberOfWheels = function () {
        return 4;
    };
    return Car;
}());
// Instantiate (create) an object from a class
// create a car object => using new kw 
// pass speed as  argument in the constructor 
var car = new Car(5);
car.accelerate();
car.throttle();
car.getSpeed();
console.log(Car.numberOfWheels());
