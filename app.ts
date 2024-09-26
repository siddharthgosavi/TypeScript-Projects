// Object Type

const person1: {
  name: string;
  age: number;
} = {
  name: "Siddharth",
  age: 30
};

// array type
const person2 = {
  name: "Siddharth",
  age: 30,
  hobbies: ["reading", "coding"]
};

let favActivity: string[];
favActivity = ["sports"];

console.log(person2.name + "'s hobbies are : ");

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}

//Tuple

const person3: {
  name: string;
  age: number;
  hobbies: string[];
  //role is having type tuple
  role: [number, string];
} = {
  name: "Siddharth",
  age: 30,
  hobbies: ["reading", "coding"],
  role: [2, "author"]
};

person3.role.push("admin");
// person3.role[1] = 10;

console.log("Tuple Type: ", person3);

//Enum type
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}
const person4 = {
  name: "Siddharth",
  age: 30,
  hobbies: ["reading", "coding"],
  role: Role.ADMIN
};

console.log("Enum Type: ", person4);
if (person4.role === Role.ADMIN) {
  console.log(person4.name + " is Admin!");
}

// Any type

let fruites: any[];
fruites = ["apple", 2];
