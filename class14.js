function startMachine(cb){
    setTimeout(() => {
        console.log("Washing Machine is starting...")
        cb()
    }, 3000);
}


function washingClothes(cb){
    setTimeout(() => {
        console.log("Washing Clothes...")
        cb()
    }, 5000);
}

function rinseAndDone(){
    setTimeout(() => {
        console.log("Rinse and Done.")
    }, 2000);
}

startMachine(()=>{
    washingClothes(()=>{
        rinseAndDone()
    })
})
