let myString: string;

myString = 'This is a string';

// Try to assign a number to a string => Error
//myString = 4;
console.log(myString);

// Need not declare type of var 

let anotherstring = 4; 
console.log(anotherstring);

// Other basic types

let aString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>; // This is a generic type => May only hold 'strings' in this case
let anything: any; // Any can be used if we don't know the actual type => Use it rarely!
// We also got void (=> nothing) and enums (a set of numeric values)
