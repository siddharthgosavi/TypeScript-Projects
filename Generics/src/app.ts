console.log("===== Generics =====");

const names: Array<string | number> = ["Sid", "Max"];
const names2: [string, number] = ["sid", 1];
console.log();

const promise: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then(data => {
  return console.log(data.split(" "));
});

// creating generic function

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({name:'max'},{age:30}));
const mergeObj = merge({ name: "Sid", hobbies: ["Sports"] }, { age: 30 });
console.log(mergeObj.name);
{
  {
  }
}
console.log(mergeObj.age);
console.log(mergeObj.hobbies);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(value: T): [T, string] {
  let descriptionText = "Got no value.";
  if (value.length === 1) {
    descriptionText = "Got 1 value.";
  } else if (value.length > 1) {
    descriptionText = "Got " + value.length + " values.";
  }
  return [value, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(countAndDescribe([]));

//key of constraints

function extractAndConvert<T extends object, U extends keyof T>(objA: T, key: U): string {
  return "Value : " + objA[key];
}

console.log(extractAndConvert({ name: "Sid" }, "name"));

// Generic classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStoarge = new DataStorage<string>();
textStoarge.addItem("Sid");
textStoarge.addItem("Menu");
textStoarge.addItem("Raj");
console.log(textStoarge.getItems());
textStoarge.removeItem("Menu");
console.log(textStoarge.getItems());

const numStorage = new DataStorage<number>();
numStorage.addItem(1);
numStorage.addItem(2);
numStorage.addItem(3);
console.log(numStorage.getItems());
numStorage.removeItem(3);
console.log(numStorage.getItems());

//Generic Utility types
// /Partial
interface CourseGoal {
  title: string;
  description: string;
  complitionUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.complitionUntil = date;

  return courseGoal as CourseGoal;
}

//Readonly

const names1: Readonly<string[]> = ["max", "anna"];
// names1.push("manu");
// names1.pop()
