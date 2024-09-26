function add(num1, num2, showResult, resultPhrase) {
    return showResult ? console.log(resultPhrase + (num1 + num2)) : num1 + num2;
}
var number1 = 5;
var number2 = 7.2;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
