/**use interface as a function parameter which is an object having first & last name */
interface Person{
	firstname:string;
	lastname:string;
}


/** now the code looks more cleaner passing only the interface as parameter*/

function fullName(person :{person:Person})
{
	console.log(`${person.firstname} ${person.lastname}`);
	
}

let var_name={
	firstname : 'Clarke'
}



fullName(var_name);