"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// following function have type void
function printResult2(num) {
    console.log("Result: " + num);
}
printResult2(add(5, 12));
//Function types
let combineValues;
combineValues = add;
// Type 'void' is not assignable to type 'number'
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
//Function types and callbacks
function addAndHandle(n1, n2, callback) {
    const result1 = n1 + n2;
    callback(result1);
}
addAndHandle(12, 20, result => {
    console.log("printed using callback : ", result);
});
