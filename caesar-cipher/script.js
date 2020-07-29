var rl = require('readline-sync');
var name = rl.question ('What is your name? ');
console.log("Hello " + name + ".");
var input = rl.question('What phrase would you like to encrypt? ').toLowerCase();
console.log("Ok, you want to encrypt " + input + ".");
var shift = parseInt(rl.question('How many letters would you like to shift? '));
console.log("So you want to shift " + shift + ". Perfect!");
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

function cipher() {

for (let i = 0; i < input.length; i++) {
    console.log(input[i] + shift)
}
}

cipher()


// if (input.length === [0,26]) {
//     console.log(shift.length)
// }

// 1// take word
// 2// move 2 letters
// 3// ouput final word

















// -------------------------------------------------------------------------------//
// var rl = require("readline-sync");

// var name = rl.question("What is your name? ");
// choices = ["Put hand in hole", "Find the key", "Open the door"];
// index = rl.keyInSelect(choices, "Which will you do?");
// console.log("Ok, " + name + ", you chose " + choices[index] + "!");
// function startingOver() {
//   // Ask the user what choice they want to make (this choice will change the `userChoice` variable)
//   // if they choose to pick up the key, change the `userHasKey` variable to true

//   index = rl.keyInSelect(choices, "Which will you do?");
//     console.log("Ok, " + name + ", you chose " + choices[index] + "!");
// }

// // if (index === 0) {
// //   console.log("You died. Please start over if you want to play again.");
// // } else if (index === 1) {
// //   console.log("Nice! You found it! Now what?");
// //   startingOver();
// //   if (index === 2) {
// //     return congratsFunc();
// //   }} else if (index === 2) {
// //   console.log("Wait! You need a key first! Let's start over...");
// //   startingOver();
// //   if (index === 1) {
// //     console.log("Nice! You found it! Now what?");
// //       startingOver();
// //       if (index === 2) {
// //           return congratsFunc();
// //       }
// //   }
// // }

// var userHasKey = false
// var userChoice;

// //let countTwo = choices[2];
// while (userHasKey === false && userChoice !== choices[2]) {
//   startingOver();
// }

// console.log("Congratulations! You escaped.")