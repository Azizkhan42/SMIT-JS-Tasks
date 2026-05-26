// let timerId = setTimeout(() => {
//   console.log("This is timer function");
// }, 3000);

// clearTimeout(timerId);

// let intervaltime = setInterval(() => {
//     console.log("Starting from 0...")
// }, 1000);

// clearInterval(intervaltime)

let promise = new Promise((resolve, reject) => {
  resolve("The promise is resolved");

  reject("The promise is rejected");
});

promise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
