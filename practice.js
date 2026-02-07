const element = document.getElementById("btn")
const heading = document.querySelector("h1")
console.log(heading)

element.addEventListener("click", function(){
    heading.innerText = "JavaScript course"
})


