// function name(){
//     console.log("Aziz")
// }
// console.log(name instanceof Object)

let user = {
    name: "Aziz",
    age: 22,
    city: "Peshawar",
    notice: function(){
        console.log(`Hello, ${user.name}  you are eligible for this role.`)
    }
};

const {name, age, city} = user;

console.log(name, age, city)
// for(const values in user){
//     console.log(user[values])
// }