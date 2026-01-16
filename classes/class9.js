// var num = [1,2,3,4,5];

// for(var i=0; i<=num.length-1; i++){
//     // console.log(i)   // Print array indexes
//     console.log(num[i])   
// }


// reverse loop

// for(var i = num.length-1; i>=0; i--){
//     console.log(num[i])
// }


// var sum = 0;
// var average;

// var numbers = [4,5,2,5,6,8,0,1,2,8];

// for(var i=0; i<numbers.length; i++){
//     sum += numbers[i]

// }
// console.log(sum)


// return positive and negative values from the array using function

let nums = [2,4,1,4,2,-2,-4,6,3,-1,-4,8,3];


var positive = []
var negative = []

for(var i=0; i<nums.length; i++){
    if(nums[i]>0){
        positive.push(nums[i])
    }
    else
    {
        negative.push(nums[i])
    }

}

console.log(nums)