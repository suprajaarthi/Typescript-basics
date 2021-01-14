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
