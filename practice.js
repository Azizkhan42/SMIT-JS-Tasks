var users = [
  { name: "Alice", age: 22 },
  { name: "Foo", age: 26 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

let oldAge = users.filter((item)=>{
  return item.age > 25;
})

// console.log(oldAge)

let names = users.map((item)=>{
  return item.name;
})
console.log(names)
