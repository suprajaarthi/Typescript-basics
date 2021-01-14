"use strict";
exports.__esModule = true;
var msg = 'Hello';
var m = '0';
console.log(msg);
/**Types*/
var x = 10;
var y = 20;
/** Assign type name to variable */
var isBrilliant = true;
var total = 0;
var name = '10';
/** using template strings*/
var sentence = "My name is " + name + " , I love to learn";
console.log(sentence);
/** null & undefined */
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
/** Array*/
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Arthi', 1999];
/**enum - set of values to be declared as type */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
/** enum is more code friendly /*
/** enum vals start with 1 , to start with a diff val decalre it*/
var Colornew;
(function (Colornew) {
    Colornew[Colornew["Red"] = 5] = "Red";
    Colornew[Colornew["Green"] = 6] = "Green";
    Colornew[Colornew["Blue"] = 7] = "Blue";
})(Colornew || (Colornew = {}));
;
var next = Colornew.Blue;
console.log(next);
/** Random num assignment - any type
where the user has tp enter the input or the i/p is dynamically typed */
var randomval = 10;
randomval = true;
randomval = 'Supraja Arthi!!';
/** Compiler doesn't throw an error */
var myval = 10;
console.log(myval.name);
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myval)) {
    console.log(myval.name);
}
console.log(myval.name);
myval();
myval.toUpperCase();
