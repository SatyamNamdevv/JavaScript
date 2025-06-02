/*Types of data type 
1. primitive(Call by value) {
String
Number
Boolean
Null
Undefined
Symbol(Use to make value unique)
BigInt
}
2. NON Primitive(Call by Refrence){
Array
Objects
Functions
}
datatype for non primitive is function except function cos is has objectFunction
JavaScipt is a dynamically typed language
*/

const score =100
const scoreValue =100.4

const isLoggedIn = false
const outsideTemp= null
let userEmail;

// Declaring the symbol
const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId);

// Ref (NOn primitive)

const heros = ["shaktiman", "naagraaj", "doja"]

// Declaring an object
let myObj ={
    name: "Satyam",
    age: 23,
}
// FUnction as variable
const myFunction = function(){
    console.log("Hello Satyam")
}