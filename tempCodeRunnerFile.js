function greet(name){
    console.log("Hi, " + name)
}

function goodBye(bye){
    bye("Aziz")
}

goodBye(greet)