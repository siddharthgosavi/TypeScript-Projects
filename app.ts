// Object Type

const person1: {
  name: string;
  age: number;
} = {
  name: "Siddharth",
  age: 30
};

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
