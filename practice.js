function Api(data) {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    setTimeout(() => {
      console.log("Data1", data)
      // resolve("Success");
      reject("failed")

    }, 3000);
  });
}

let final = Api(1)
final.then((res)=>{
  console.log("Api successful", res)
})

final.catch((err)=>{
  console.log("Api rejected", err)
})
