var arr = [12,3,45,5,53,2];

var totals = 0;


for(var i = 0; i<arr.length; i++){
    totals = totals+arr[i]
}
console.log(totals)

var average = totals/arr.length;
console.log(average)




// var total = arr.reduce((totals, value)=>{
//     return totals+value
// })
// console.log(total)


