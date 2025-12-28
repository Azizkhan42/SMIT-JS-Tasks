// function startMachine(cb){
//     setTimeout(() => {
//         console.log("Washing Machine is starting...")
//         cb()
//     }, 5000);
// }
// function washingClothes(cb){
//     setTimeout(() => {
//         console.log("Washing Clothes...")
//         cb()
//     }, 3000);
// }
// function rinseAndDone(){
//     setTimeout(() => {
//         console.log("Rinse and Done.")
//     }, 4000);
// }

// startMachine(()=>{
//     washingClothes(()=>{
//         rinseAndDone()
//     })
// })


// function calculator(a,b, operation){
//     operation(a,b)

// }

// function add(a,b){
//     console.log(a+b)
// }
// function subtract(a,b){
//     console.log(a-b)
// }
// function multiplication(a,b){
//     console.log(a-b)
// }
// function division(a,b){
//     console.log(a-b)
// }

// calculator(2,4, add)



// function loginSystem(username, password, onSuccess){
//     if(username==="admin" && password === 1234)
//         {
//             onSuccess()
//         } 
//     else{
//         console.log("Enter valid credentials!")
//     }

// }

// function onSuccess(){
//     console.log("Login Successfully!")
// }

// loginSystem("admin", 1234, onSuccess)



// function makeGreeting(){
//     return function(){
//         console.log("Hello, Student")
//     }
// }
// let greet = makeGreeting()
// // console.log(greet)
// greet()

function done(){
    console.log("Done")
}
function processUser(name, cb){
    console.log(name)
    cb()
}

processUser("Aziz", done)