"use strict";
// unknown type
let userInput;
let userName;
userInput = 5;
userInput = "Max";
//this will give error
//we can add typecheck which typescript understands
typeof userInput === "string" ? (userName = userInput) : "";
//never type
function generateError(message, errorCode) {
    throw { message, errorCode };
}
generateError("An error occured!", 500);
