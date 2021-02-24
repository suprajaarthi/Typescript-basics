// Classes allow us to create 'blueprints' for objects
// In Angular Classes are used to create Components, Services, Directives, Pipes, ...

// How to create a class
 
// create class using the class kw 
class Car {
// Has 3 properties 
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
        // condition to check if speed ! 0 
    }

    accelerate(): void {
        this.speed++;
        console.log(this.speed++);
    }

    throttle():void {
        this.speed--;
        console.log(this.speed--);
    }

    getSpeed():void {
        console.log(this.speed);
        // prints our current speed 
        // way to access the property 
    }
// static - neednot provide specific instance 
// used for general utility  
    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class

// create a car object => using new kw 
// pass speed as  argument in the constructor 
let car = new Car(5);
car.accelerate();
car.throttle();

car.getSpeed();

console.log(Car.numberOfWheels());