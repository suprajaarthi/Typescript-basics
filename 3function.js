var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
function fullName(person) {
    console.log(person.firstname + " " + person.lastname);
}
var var_name = {
    firstname: 'Clarke',
    lastname: 'Kent'
};
fullName(var_name);
