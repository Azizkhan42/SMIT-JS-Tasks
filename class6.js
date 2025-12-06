// variable scope

// global scope -->variable declared whether with var/let/const is accessible anywhere in the code.
// local scope --> variables declared within block or functions.
//              2 types. 
//                 i) block scope, 
//                 ii) function scope

// function scope --> Only accessible within the function whether declared with var/let/const.

// block scope --> declared with var ignores block and accessible anywhere. while with let/const can't ignores block and limited the scope.


var fullName= "Aziz Ur Rehman";  // global scope

function greet(){
    fullName = "ali";
    console.log("hello", fullName)
}

console.log(fullName)
greet()



// Arrays

var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"]
// console.log("Cities", cities)
console.log("Cities", cities[0])

// for length
console.log("cities", cities.length);

// we can change array values
cities[0] = "Charsadda";
console.log("cities", cities)
console.log("cities", cities.length-1) // to print last index of array  


// to add one item in last of an array, as we know length of an array
cities[5] = "skardu"; 
// or
cities.push("Hyderabad")