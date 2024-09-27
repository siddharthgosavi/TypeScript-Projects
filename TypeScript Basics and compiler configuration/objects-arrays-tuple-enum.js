"use strict";
// Object Type
const person1 = {
    name: "Siddharth",
    age: 30
};
// array type
const person2 = {
    name: "Siddharth",
    age: 30,
    hobbies: ["reading", "coding"]
};
let favActivity;
favActivity = ["sports"];
console.log(person2.name + "'s hobbies are : ");
for (const hobby of person2.hobbies) {
    console.log(hobby.toUpperCase());
}
//Tuple
const person3 = {
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
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
let fruites;
fruites = ["apple", 2];
