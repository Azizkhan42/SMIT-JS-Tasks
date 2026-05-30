// let arr1 = [1,2,3]

// let arr2 = [4,5,6]

// let combinedArr = arr1.concat(arr2)

// console.log(combinedArr)


// let msg = "Hello";
// let name = "Aziz";

// console.log(msg + name)

let stdMarks = [78,87,69,36,46,37,87,90];

function percentage(){
    let sum = stdMarks.reduce((acc, add)=>acc + add)
    let percent = sum/800 * 100;
    console.log(percent)
}

percentage()




