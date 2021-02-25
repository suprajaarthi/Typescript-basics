
//interfaces are used to provide a secure form of communication between two options
//we know that a certain object implements either and method or property

//an interface is used to define what kind of options the user interface is going to have for example the //user can have a username or password and an optional code but the confirm password is optional,
//so we have included the question mark

interface User {
    username: string;
    password: string;
    confirmPassword?: string; // Optional property => Does not have to be implemented
}

//when we create a variable with a custom type we created with interface

let user:User;

//my interface should definitely have the username and password field if it is not present it is going to be //invalid & it gives an error 

// user = { anything: 'anything', anynumber: 5};

// This value does satisfy the interface
user = {username: 'max', password: 'supersecret'};
console.log(user);

// Interfaces can also contain functions (without the function body - as it only is a blueprint/ requirement)

// can drive is a numbered interface which has speed or number as an argument and returns nothing

interface CanDrive {
    accelerate(speed:number): void;
}

//then we have a function  which is implementing the interface
let car:CanDrive = {
    accelerate: function (speed:number) {
    	//
    }
};