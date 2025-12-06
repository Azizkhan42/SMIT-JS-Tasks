// calculator

var num1 = +prompt("Enter number one");
var operator = prompt("Enter operator (+, -, *, /");
var num2 = +prompt("Enter number two");

var result;
if(operator== "+"){
    result = num1+num2
}
else if(operator== "-"){
    result = num1-num2
}
else if(operator== "*"){
    result = num1*num2
}
else if(operator== "/"){
    result = num1/num2
}
else{
    "Enter only numbers"
}

console.log("your result is : ", result)
