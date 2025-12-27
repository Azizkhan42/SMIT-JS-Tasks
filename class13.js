let arr = [1,2,3,4,5,6,7,8,9];

let doubleArrayValues = arr.reduce((add, data)=>{
    return  add + data;
},0)

console.log(doubleArrayValues)