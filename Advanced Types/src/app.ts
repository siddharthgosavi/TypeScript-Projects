console.log("===== Modules =====");
// type guard
type Admin = {
  name: string;
  previllages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Sid",
  previllages: ["create-server"],
  startDate: new Date()
};

console.log("Emplyee:", e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

console.log(add("Sid ", 4599));
console.log(add(6, 6));

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("name", emp.name);
  if ("previllages" in emp) {
    console.log("privillages", emp.previllages);
  }
  if ("startDate" in emp) {
    console.log("startDate", emp.startDate);
  }
}

printEmployeeInfo(e1);
printEmployeeInfo({ name: "Raj", startDate: new Date() });
// type guard

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(ammount: number) {
    console.log("Loading Cargo of ammount :$" + ammount);
  }
}

type Vehical = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehical(vehical: Vehical) {
  vehical.drive();
  vehical instanceof Truck && vehical.loadCargo(1000);
}

useVehical(v1);
useVehical(v2);

//Discriminated Unions

interface Bird {
  type: "bird";
  flayingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flayingSpeed;

      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed ", speed);
}

moveAnimal({ type: "bird", flayingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 100 });

// Type casting

const paragraph = <HTMLParagraphElement>document.getElementById("p");
const userInput = document.getElementById("user-input") as HTMLInputElement;
userInput.placeholder = "Hi there";

const userInput1 = document.getElementById("user-input");

userInput1 && ((userInput1 as HTMLInputElement).placeholder = "another way of type casting");

//Index Properties

interface errorContainer {
  [prop: string]: string;
}

const errorBag: errorContainer = {
  1: "Not a valid Email",
  2: "Username must start with Capital letter!"
};

console.log(errorBag);

// function overloads
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

const result1 = add1("Sid ", "Gosavi");
console.log(result1.split(""));
const result2 = add1(6, 6);
console.log(result2 + 5);

//optional chaning

const fetchedUserData = {
  id: 1,
  name: "Sid",
  job: {
    title: "Full stack developer",
    company: "Cognizant"
  }
};

console.log(fetchedUserData?.job?.title);

const userInput3 = null;
const storeValue1 = userInput3 || "Default";

const userInput4 = "";
const storeValue2 = userInput4 ?? "Default";

console.log(storeValue1);
console.log(storeValue2);
