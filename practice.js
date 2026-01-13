let promise = new Promise((resolve, reject)=>{
  console.log("I am a promise")
  reject()
  resolve()
})

console.log(promise)