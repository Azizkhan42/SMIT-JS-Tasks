let arr = [true, 0, false, "", undefined, 1, " ", null, 22]

let print = arr.filter((val)=>{
    if(val>0 || " "){
        return val;
    } 
})

console.log(print)