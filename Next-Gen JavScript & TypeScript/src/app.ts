const userName1 = "Sid1";

console.log(userName1);

const button = document.querySelector("button")!;
//test
button.addEventListener("click", () => {
  console.log("clicked");
});

const add = (n1: number, n2: number = 10): number => {
  return n1 + n2;
};

const sub = (n1: number, n2: number) => n1 - n2;
console.log(add(2));
console.log(sub(2, 10));

const printOutput: (output: number | string) => void = output => console.log(output);

//default function papameters
const mul = (n1: number, n2: number = 1): number => {
  return n1 * n2;
};
printOutput(mul(5));
// (...) operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  fname: "Siddharth",
  age: 30
};

const copiedPerson = { ...person };

console.log(copiedPerson);
// rest paprameters
const add1 = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0);
};

const addedNumbers = add1(5, 10, 11, 34, 4);
console.log(addedNumbers);

// arrayObjects and destructuring

const [hobby1, hobby2, ...remaining] = hobbies;

console.log(hobby1);
console.log(hobby2);
console.log(remaining);

const { fname: name1, age } = person;

console.log(name1);
console.log(age);
