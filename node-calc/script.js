var rl = require('readline-sync')
function addition(num1, num2){
    return "The result is: " + (Number(num1)+Number(num2))
}
function subtraction(num1, num2){
    return(Number(num1)-Number(num2))
}
function multiplication(num1, num2){
    return(Number(num1)*Number(num2))
}
function division(num1, num2){
    return(Number(num1)/Number(num2))
}

var firstNum = rl.question("Please enter your first number: ", (userInput) => {console.log(userInput)});
var secondNum = rl.question("Please enter your second number: ", (userInput) => {console.log(userInput)});
var operation = rl.question("Please enter the operation to perform: ", (userInput) => {console.log(userInput)}) 
if (operation == "multiplication") {
    console.log(multiplication(firstNum, secondNum));
} else if (operation == "division") {
    console.log(division(firstNum, secondNum));
} else if (operation == "addition") {
    console.log(addition(firstNum, secondNum));
} else if (operation == "subtraction") {
    console.log(subtraction(firstNum, secondNum));
};