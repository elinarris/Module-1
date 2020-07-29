var rl = require("readline-sync");

var name = rl.question("What is your name? ");
choices = ["Put hand in hole", "Find the key", "Open the door"];
index = rl.keyInSelect(choices, "Which will you do?");
console.log("Ok, " + name + ", you chose " + choices[index] + "!");
function startingOver() {
  // Ask the user what choice they want to make (this choice will change the `userChoice` variable)
  // if they choose to pick up the key, change the `userHasKey` variable to true

  index = rl.keyInSelect(choices, "Which will you do?");
    console.log("Ok, " + name + ", you chose " + choices[index] + "!");
}

// if (index === 0) {
//   console.log("You died. Please start over if you want to play again.");
// } else if (index === 1) {
//   console.log("Nice! You found it! Now what?");
//   startingOver();
//   if (index === 2) {
//     return congratsFunc();
//   }} else if (index === 2) {
//   console.log("Wait! You need a key first! Let's start over...");
//   startingOver();
//   if (index === 1) {
//     console.log("Nice! You found it! Now what?");
//       startingOver();
//       if (index === 2) {
//           return congratsFunc();
//       }
//   }
// }

var userHasKey = false
var userChoice;

//let countTwo = choices[2];
while (userHasKey === false && userChoice !== choices[2]) {
  startingOver();
}

console.log("Congratulations! You escaped.")
