

export{}
var msg ='Hello';
let m='0';
console.log(msg);

/**Types*/

let x =10;
const y=20;


/** Assign type name to variable */
let isBrilliant : boolean = true;
let total: number =0;
let name : unknown ='10';

/** using template strings*/

let sentence : string =`My name is ${name} , I love to learn`;
console.log(sentence);

/** null & undefined */

let n : null =null;
let u : undefined=undefined;
let isNew : boolean =null;
let myName : string = undefined;


/** Array*/
let list1 : number[] =[1,2,3];
let list2: Array<number>=[1,2,3];

let person1:[string,number]=['Arthi',1999];

/**enum - set of values to be declared as type */
enum Color {Red,Green,Blue};
let c : Color = Color.Green;
console.log(c);

/** enum is more code friendly /*
/** enum vals start with 1 , to start with a diff val decalre it*/
enum Colornew {Red=5,Green,Blue};
let next : Colornew = Colornew.Blue;
console.log(next)

/** Random num assignment - any type 
where the user has tp enter the input or the i/p is dynamically typed */

let randomval : any =10;
randomval = true;
randomval = 'Supraja Arthi!!';

/** Compiler doesn't throw an error */


let myval : unknown =10;
console.log(myval.name);


function hasName(obj : any) : obj is {name:string}
{
	return !! obj &&
		typeof obj === "object" &&
		"name" in obj

}
if(hasName(myval)){
	console.log(myval.name);
}
console.log(myval.name);
myval();
(myval as string).toUpperCase();




