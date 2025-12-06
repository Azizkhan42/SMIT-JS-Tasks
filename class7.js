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