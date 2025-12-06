// var countryNames = ["Pakistan", "India", "Afghanistan", "Qatar", "Dubai", "Saudi Arabia", "USA", "Uk"];
// console.log("Countries Names : ", countryNames);
// console.log(countryNames.length-1)

// countryNames.push("Oman", "Srilinka", "Bangladesh", "India")
// console.log("Countries Names : ", countryNames);
// console.log(countryNames.length-1)

// Task-1
function largest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(largest(10, 5));  // Output: 10



// Task-2
function addElement(a, b) {
    a.push(b);   // add new element to array
    return a;    // return updated array
}

console.log(addElement([1, 2, 3], 4));
// Output: [1, 2, 3, 4]



// Task-3
function sumArray(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));  // Output: 10


// Task-4
let users = [];

function addUser(username) {
    users.push(username);   // add username to array
    return users;           // return updated list
    
}

// Adding users
addUser("Aziz");
addUser("Ali");
addUser("Hamza");

// Printing list of users
console.log("User List:", users);





