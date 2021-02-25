"use strict";
//modularity is used generally in typescript to tell if a variable or a class or interface or whatever to lie // out of the file by default using Export kw
//model driven approach  is used to share the code basically
exports.__esModule = true;
exports.ExportedClass = void 0;
// TypeScript is modular, we can divide our code up over several files
// In Angular 2 we then use  "import {} from ''" to access the code in these files
// We export a class, interface, variable, ... by adding 'export' keyword in front of it
var ExportedClass = /** @class */ (function () {
    function ExportedClass() {
    }
    return ExportedClass;
}());
exports.ExportedClass = ExportedClass;
