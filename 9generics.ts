//generics allows us to be flexible regarding the time certain objects use
//array is a generic class available for almost all the data types
//but we can limit it to runtime saying that in the specific area this variable is limited only to use numbers


// Generics are types which can hold/ use several types

// Consider the Array object

let numberArray: Array<number>; // This array will only accept numbers

// Try to initialize it with strings

// numberArray = ['test']; // => Error
numberArray = [1,2,3];