// let fruits = ["orange", "mango", "apple", "peach"];

// let nums = [1, 2, 3, 4, 5, 6];

// let addeditems = nums.splice(0, 0, 45,45,45);

// console.log(nums)

// const user = {
//   name: "Aziz",
//   id: 15465,
//   isStudent: true,
//   Semester: "6th",
//   courses: {
//     subject1: "Operating System",
//     subject2: "Web Engineering",
//     Teachers: {
//         name: "Mohsin"
//     }
//   }
// };

// for(let key in user){
//     console.log(key, user[key])
// }

// let data = new Object();
// data.name = "Aziz";
// data.id = 15465;
// data.isStudent = true

// console.log(data)

// let name = prompt("Enter your name...");

// try {
//   let customeError = new Error("Enter your name first...");
//   customeError.name = "name not entered";
//   if (name === "") {
//     throw customeError;
//   }
//   console.log(name);
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log("catch block caught it successfully...");
// }


// let age = 22;

// age = "Twenty two"
// console.log(age)

let num = 123;
let str = `${num}`

console.log(typeof str, str)
