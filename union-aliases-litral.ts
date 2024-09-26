//Union types Combinable
type Combinable = number | string;
function combine(input1: Combinable, input2: number | string) {
  let result;
  if (typeof input1 === "number" && input2 === "number2") {
    result = input1 + input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);
const fullName = combine("Siddharth", "Gosavi");

console.log("combinedAges  : " + combinedAges);

console.log("fullName  : " + fullName);

//litral types on resultConversion
type CombinableDescriptor = "as-number" | "as-text";
function combine1(input1: number | string, input2: number | string, resultConversion: CombinableDescriptor) {
  let result;
  if ((typeof input1 === "number" && input2 === "number") || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }

  return result;
}

const combinedAges1 = combine1(30, 26, "as-number");
const combinedAges2 = combine1("30", "26", "as-number");
const fullName1 = combine1("Siddharth", "Gosavi", "as-text");

console.log("combinedAges as-number : " + combinedAges1);
console.log("combinedAges as-number : " + combinedAges2);

console.log("fullName as-text : " + fullName);
