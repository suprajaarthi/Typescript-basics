/** a constructor to initialize the employee */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning !! " + this.employeeName);
    };
    return Employee;
}());
/** prop class called employee , constructor and method */
/** create an instance of the employee class */
var emp1 = new Employee('Supraja');
console.log(emp1.employeeName);
emp1.greet();
/** class based inheritance - create a class with some extra priveleges - instead of repeating the prop of employee - use extends keyword*/
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    /** the derived class also has a constructor */
    function Manager(managerName) {
        /** const has to acept a name that initializes base class para
        so use - super keyword */
        return _super.call(this, managerName) || this;
    }
    /** method to manager class*/
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Supraja");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
