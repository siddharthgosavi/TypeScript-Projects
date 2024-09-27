// unknown type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
//this will give error
//we can add typecheck which typescript understands
typeof userInput === "string" ? (userName = userInput) : "";

//never type
function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
}

generateError("An error occured!", 500);
