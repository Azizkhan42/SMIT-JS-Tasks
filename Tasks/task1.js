/* Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
        Use the reduce method to calculate sum of all numbers in the array.
        Use the reduce method to calculate product of all numbers in the array.   
*/

let inp = +prompt("Enter the number : ")

let arr = [];

for(let i = 1; i<=inp; i++){
  arr[i-1] = i  // 1-1 = 0, 2-1 = 1, 3-1=2; ---> store at index
}

console.log(arr)

let output = arr.reduce((result, val)=>{
  return result + val
})

console.log("Sum : ", output)

let fact = arr.reduce((result, val)=>{
  return result * val
})

console.log("factorial : ", fact)


// for(let i=0; i<5; i++){
//   let str = ""
//   for(let j=0; j<5; j++){
//     str = str + j;
//   }
//   console.log(i, str)
// }