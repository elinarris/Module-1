const rl = require("readline-sync");

let stillAlive = true;
let winnerWinner = false;

class Hero {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.inventory = ["Potion"];
  }
}

let enemies = [
  {
    name: "Grizzly Bear",
    attack: 50,
    hp: 100,
    sound: "Grrr",
    heldItem: "Meat",
  },
  { name: "Snake", attack: 20, hp: 70, sound: "Hisss", heldItem: "Scales" },
  {
    name: "Killer Hornets",
    attack: 30,
    hp: 20,
    sound: "Zzzz",
    heldItem: "Stingers",
  },
  {
    name: "Tarantula",
    attack: 60,
    hp: 50,
    sound: "Phssss",
    heldItem: "Sticky Web",
  },
];

console.log("Welcome to the forest! You must find your way out...or not.");

const name = rl.question("What is your name? ");

const player = new Hero(name, 100, 70);

console.log("Hey " + name + "! Thanks for playing."),
  rl.keyIn("Please press 'w' to walk.", { limit: "w" }),
  console.log("Walking..."),
  walking();

function walking() {
  let random = Math.floor(Math.random() * 4) + 1;
  if (random < 2) {
    enemyEncounter();
  } else {
    console.log("You continue walking peacefully...");
  }
}

function enemyEncounter() {
  const randomIndex = Math.floor(Math.random() * enemies.length);
  const randomEnemy = enemies[randomIndex];
  const enemyName = randomEnemy.name;
  console.log("You see a " + enemyName + "!");
  options(randomEnemy);
}

function options(enemy) {
  const enemyFight = Math.floor(Math.random() * enemy.attack);
  let input = rl.keyIn("What will you do now? [a] Attack or [r] Run", {
    limit: "ar",
  });
  if (input === "a") {
    // attack(enemy);
    console.log("atttttack!!")
  } else if (input === "r") {
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      run();
      return 
    } else if (random === 1) {
      console.log("You can't get away! The enemy attacks you!");
      player.hp -= enemyFight;
      if (enemyFight === 0) {
        console.log("They missed you! Whew.");
      } else if (enemyFight > 0) {
        rl.keyInPause(
          `${enemy.name} got you, your HP is at ${player.hp}. Now it's your turn!`
        );
      } else if (player.hp <= 0) {
        isAlive = false
      }
      // attack(enemy);
      console.log("atttttack!!   lower")
    }
  }
  while (enemy.hp > 0 && player.hp > 0) {
    attack(enemy)
  }
}

function attack(enemy) {
  const enemyAttack = Math.floor(Math.random() * enemy.attack);
  const playerAttack = Math.floor(Math.random() * player.attack);
  console.log("Hiyaaaaa!!!");
  //while (enemy.hp > 0 && player.hp > 0) {
    enemy.hp -= playerAttack;
    if (enemy.hp < 0) {
      enemyDefeated(enemy);
      return
    }
    rl.keyInPause(`${enemy.name} got hit, their new HP is ${enemy.hp}`);
    player.hp -= enemyAttack;
    if (player.hp <= 0) {
      playerDefeated(player);
      return
    }
    rl.keyInPause(
      `Now it's ${enemy.name}'s turn! ${player.name} you got hit, your new HP is ${player.hp}.`
    );
    // options(enemy);
  //}
}

function enemyDefeated(enemy) {
  console.log(`You won, ${enemy.name} is defeated!`);
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].name === enemy.name) {
      enemies.splice(i, 1);
    }
  }
  player.hp += 20;
  rl.keyInPause(`${player.name} your new HP is ${player.hp}`);
  addToInventory(enemy.heldItem);
}

function playerDefeated(player) {
  console.log("You lost!");
  stillAlive = false;
}

function run() {
  if (player.hp <= 0) {
    playerDefeated(player);
    return
  } else {
    stillAlive = true
  };
  console.log("Ok, I'm out!!");
}

function printInventory() {
  rl.keyInPause(
    `${player.name} you have a health of ${player.hp}, and currently holding ${player.inventory}.`
  );
}

function addToInventory(item) {
  rl.keyInPause("You search the area, and find " + item + "!");
  const pickUp = rl.keyIn(
    "Will you pick it up? [p] Pick up, [n] Naw, leave it.",
    { limit: "pn" }
  );
  const playerInventory = player.inventory;
  if (pickUp === "p") {
    playerInventory.push(item);
    console.log("You added " + item + " to your inventory!");
  } else if (pickUp === "n") {
    console.log("I dont need " + item + ".");
  }
}

function youWon() {
  console.log(
    "You win the game! You got out of the forest safely! Congratulations " +
      name +
      "!"
  );
}

while (stillAlive && !winnerWinner) {
  if (enemies.length === 0) {
    youWon();
    break;
  } else {
    const action = rl.keyIn(
      "Would you like to continue Walking [w], Print Inventory [p], or Quit [q]?",
      { limit: "wpq" }
    );
    if (action === "w") {
      walking();
    } else if (action === "p") {
      printInventory();
    } else {
      console.log("I quit.");
      stillAlive = false;
    }
  }
}

//-----------------------------------NOTES----------------------------------//
// truthy
// everything else
// falsey
// ''
// 0
// NaN
// null
// undefined
// if(!false){
//     console.log('running')
// }else {
//     console.log('not running')
// }
// for(let i = 0;  true; i++){
// }
