let a;
a=10;
a=true;
let b=20;
let multiType : number | boolean;
multiType = 20;
multiType = true;
let anyType: any;
anyType = 20;

function add(num1 : number,num2 : number)
{
	return num1+num2;

}
console.log(add(5,10));


function fullName(person :{firstname:string,lastname:string})
{
	console.log(`${person.firstname} ${person.lastname}`);
	
}

let var_name={
	firstname : 'Clarke',
	lastname:'Kent'
}



fullName(var_name);