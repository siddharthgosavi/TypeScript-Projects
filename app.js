// Object Type
var person1 = {
    name: "Siddharth",
    age: 30
};
// array type
var person2 = {
    name: "Siddharth",
    age: 30,
    hobbies: ["reading", "coding"]
};
var favActivity;
favActivity = ["sports"];
console.log(person2.name + "'s hobbies are : ");
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//Tuple
var person3 = {
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
var person4 = {
    name: "Siddharth",
    age: 30,
    hobbies: ["reading", "coding"],
    role: Role.ADMIN
};
console.log("Enum Type: ", person4);
if (person4.role === Role.ADMIN) {
    console.log(person4.name + " is Admin!");
}
