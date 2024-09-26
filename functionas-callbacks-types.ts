function add(n1: number, n2: number) {
  return n1 + n2;
}

// following function have type void
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

//Function types
let combineValues: (a: number, b: number) => number;

combineValues = add;
// Type 'void' is not assignable to type 'number'
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

//Function types and callbacks

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result1 = n1 + n2;
  callback(result1);
}

addAndHandle(12, 20, result => {
  console.log("printed using callback : ", result);
});
