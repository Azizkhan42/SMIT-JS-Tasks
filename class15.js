// Given an array of users:

var users = [
  { name: "Alice", age: 22 },
  { name: "Foo", age: 26 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

// Find users older than 25

var result = users.filter(function (item) {
  return item.age > 25;
});
console.log("result: ", result);
// Get an array of names only
var namesArray = users.map(function (item) {
  return item.name;
});
console.log("namesArray: ", namesArray);
// Calculate average age
var ageSum = 0;

for (var i = 0; i < users.length; i++) {
  var element = users[i];
  ageSum += element.age;
}

var average = ageSum / users.length;
console.log("average: ", average);

let treasures = [
  { location: "Forest", gold: 50, found: true },
  { location: "Cave", gold: 100, found: false },
  { location: "River", gold: 30, found: true },
];

// 1️⃣ Get total gold collected
var totalGold = 0;
for (var i = 0; i < treasures.length; i++) {
  var element = treasures[i];
  totalGold += element.gold;
}
console.log("totalGold: ", totalGold);

// 2️⃣ List only found treasures
var foundTreasures = treasures.filter(function (item) {
  return item.found;
});
console.log("foundTreasures: ", foundTreasures);

// 3️⃣ Mark all treasures as found

var allFound = treasures.map(function (item) {
  if (item.found === false) {
    return {
      found: true,
    };
  }

  return item;
});
console.log("allFound: ", allFound);

// 🧠 Goal:
// Battle enemies using logic.
let enemies = [
  { name: "Goblin", health: 30, attack: 5 },
  { name: "Orc", health: 50, attack: 10 },
  { name: "Dragon", health: 25, attack: 25 },
  { name: "Pikachu", health: 111, attack: 25 },
];
console.log("enemies: ", enemies);

// 1️⃣ Attack all enemies (reduce health)
var attackedEnemies = enemies.map(function (item) {
  return {
    name: item.name,
    attack: item.attack,
    health: item.health - item.attack,
  };
});
console.log("attackedEnemies: ", attackedEnemies);

// 2️⃣ Remove enemies with health <= 0
var filteredEnemies = attackedEnemies.filter(function (item) {
  return item.health > 0;
});
console.log("filteredEnemies: ", filteredEnemies);

// 3️⃣ Find strongest enemy
var strongestEnemy = filteredEnemies[0];

for (var i = 0; i < filteredEnemies.length; i++) {
  var element = filteredEnemies[i];

  if (element.health > strongestEnemy.health) {
    strongestEnemy = element;
  }
}
console.log("strongestEnemy: ", strongestEnemy);