function addition(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}

function calculator(a,b, cb){
    cb(a,b)
}

calculator(3,4, addition)
calculator(3,4, sub)
calculator(3,4, mul)
