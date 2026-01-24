// let day = "friday";

// switch (day) {
//   case "monday":
//     console.log("It is monday!");
//     break;

//     case "tuesday":
//     console.log("It is tuesday!");
//     break;

//     case "wednesday":
//     console.log("It is wednesday!");
//     break;

//     case "thrusday":
//     console.log("It is thrusday!");
//     break;

//     default:
//     console.log("Not match")

// }

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function(){
//     console.log(`Hello, my name is ${this.name}`)
//   }
// }

// let p1 = new User("Aziz",22)
// console.log(p1)

// console.log("Hello")

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
   console.log(`Hello, my name is ${this.name}`)
}

const p1 = new Person("Aziz", 22);
const p2 = new Person("Osama", 24);

console.log(p1)