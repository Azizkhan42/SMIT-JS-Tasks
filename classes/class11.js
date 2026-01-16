// var arr = ["Karachi", "Lahore", "Multan", "Peshawar", "Swabi"];

// var matchFound = false;

// var cityToCheck = prompt("Enter the city name")

// for(let i = 0; i<arr.length; i++){
//     if(cityToCheck===arr[i]){
//         matchFound = true;
//          break
//         }
//         console.log(cityToCheck)
// }

// if(matchFound){
//     alert("Match found")
// }
// else{
//     alert("Not found")
// }


// var firstNames = ["Ali", "Aziz", "waqas"]
// var lastNames = ["Khan", "shah", "badshah"]

// var fullNames = [];

// for(var i =0; i<firstNames.length; i++){
//     for(var j=0; j<lastNames.length; j++){
//         fullNames.push(firstNames[i], lastNames[j]);
//         console.log(fullNames)
//     }
// }


var words = prompt("Enter some text")
var numChars = words.length;
console.log(numChars)
for(var i =0; i<numChars; i++){
    if(words.slice(i, i+2)==="  "){
        alert("No double spaces!")
        break;
    }
    else{
        alert("its ok");
        break;
    }
}