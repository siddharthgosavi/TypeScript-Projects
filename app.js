// Object Type
var person1 = {
    name: "Siddharth",
    age: 30
};
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
