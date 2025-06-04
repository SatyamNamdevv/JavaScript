//hoisting

function one() {
const username = "ishyam"
function two() {
    const website = "youtube"
    console.log(username);
    
}    
//console.log(website)
two()
}
//child can accees parent elements
one()

console.log("----------------------------------")


function addone(num) {
    return num+1
    
}
addone(5);

const addtwo = function(num){
    return num+2
}
addtwo(5)/// this example is called hoisting
