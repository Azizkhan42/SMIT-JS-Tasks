// var name = "Aziz";

// function User(){
//     console.log(name)
// }
// User()


function outer(){
    var outerVar = "This is outer variable";

    function inner(){
        var innerVar = "This is inner variable"
        console.log(innerVar)
        console.log(outerVar)
    }
    console.log(outerVar)
    return inner()

    
    // console.log(innerVar)
}


var out = outer();
console.log(out)