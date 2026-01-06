function learn(cb){
  setTimeout(() => {
    console.log("Learn")
    cb()
  }, 1000);
}

function done(){
  setTimeout(() => {
    console.log("Done")
  }, 5000);
}

function Earn(cb){
  setTimeout(() => {
    console.log("Earn")
    cb()
  }, 2000);
}

learn(()=>{
  Earn(()=>{
    done()
  })
})

