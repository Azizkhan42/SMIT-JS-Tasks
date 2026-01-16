function getDiscount() {
    var inp = Number(prompt("Enter your amount"));

    var discount = inp * 5 / 100; // 10% of the amount
    var output = inp - discount;
    
    console.log("Discounted amount: " + output);
}

getDiscount();


function getDiscountAmount(value, percentage){
    var discountedAmount = (value*percentage/100)
    return discountedAmount;
}

console.log(getDiscountAmount(2000, 10))