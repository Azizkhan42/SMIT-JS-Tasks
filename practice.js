function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User("Aziz", 21);
let user2 = new User("Ali", 22);

console.log(user1.name); // Aziz
console.log(user1.age); // 22
