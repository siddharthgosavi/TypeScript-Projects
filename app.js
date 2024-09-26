function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && input2 === "number2") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
var fullName = combine("Siddharth", "Gosavi");
console.log("combinedAges  : " + combinedAges);
console.log("fullName  : " + fullName);
function combine1(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && input2 === "number") || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var combinedAges1 = combine1(30, 26, "as-number");
var combinedAges2 = combine1("30", "26", "as-number");
var fullName1 = combine1("Siddharth", "Gosavi", "as-text");
console.log("combinedAges as-number : " + combinedAges1);
console.log("combinedAges as-number : " + combinedAges2);
console.log("fullName as-text : " + fullName);
