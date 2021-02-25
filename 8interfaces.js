//interfaces are used to provide a secure form of communication between two options
//we know that a certain object implements either and method or property
//when we create a variable with a custom type we created with interface
var user;
//my interface should definitely have the username and password field if it is not present it is going to be //invalid & it gives an error 
// user = { anything: 'anything', anynumber: 5};
// This value does satisfy the interface
user = { username: 'max', password: 'supersecret' };
console.log(user);
//then we have a function  which is implementing the interface
var car = {
    accelerate: function (speed) {
        //
    }
};
