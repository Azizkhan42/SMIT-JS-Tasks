var arr = ["Karachi", "Lahore", "Multan", "Peshawar", "Swabi"];

var matchFound = false;

var cityToCheck = "Peshawar";

for(let i = 0; i<arr.length; i++){
    if(cityToCheck===arr[i]){
        matchFound = true;
         break
        }
        console.log(cityToCheck)
}

if(matchFound){
    alert("Match found")
}
else{
    alert("Not found")
}