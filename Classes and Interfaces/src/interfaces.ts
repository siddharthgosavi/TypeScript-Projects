console.log("===== Interfaces =====");
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// type Person =  {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

let user1: Person;

user1 = {
  name: "Siddharth",
  age: 30,
  greet(phrase) {
    console.log(phrase + " " + this.name);
  }
};

user1.greet("Hi there my name is");

interface Named {
  readonly name?: string;
  // optional property
  outpurName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Persons implements Greetable {
  //optional property in class
  name?: string;
  age: number;
  constructor(n1: string, a1: number) {
    this.name = n1;
    this.age = a1;
  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name + " age is " + this.age);
  }
}

let user2: Greetable;

user2 = new Persons("Sid", 30);
// user2.name = "asdasd";
user2.greet("Hello there ");

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
