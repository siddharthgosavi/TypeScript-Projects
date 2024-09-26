// number,string,boolean type
function add(num1: number, num2: number, showResult: boolean, resultPhrase: string) {
  return showResult ? console.log(resultPhrase + (num1 + num2)) : num1 + num2;
}

const number1 = 5;
const number2 = 7.2;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
