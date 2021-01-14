/** a constructor to initialize the employee */

class Employee{
/**choose as public or private */
	public employeeName:string;
	constructor(name:string)
	{
	this.employeeName=name;
	}	
	greet(){
	console.log(`Good Morning !! ${this.employeeName}`);

	}
}

/** prop class called employee , constructor and method */
/** create an instance of the employee class */
let emp1 = new Employee('Supraja');
console.log(emp1.employeeName);
emp1.greet();


/** class based inheritance - create a class with some extra priveleges - instead of repeating the prop of employee - use extends keyword*/

class Manager extends Employee{

/** the derived class also has a constructor */
	constructor(managerName : string)
	{
	/** const has to acept a name that initializes base class para 
	so use - super keyword */
		super(managerName);
	}

	/** method to manager class*/
	delegateWork(){
		console.log(`Manager delegating tasks`);
	}
}

let m1 = new Manager("Supraja");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
