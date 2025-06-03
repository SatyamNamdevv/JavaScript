// Sigleton object creation constructor
const tinderUser ={}
tinderUser.id= "123"
tinderUser.name ="Ranny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fillname :{
        firstname: "Satyam",
        lastname:"choudhary"
    }
}
console.log(regularUser.fillname.firstname)

const obj1 ={1:"a", 2:"b",3:"c",4:"d"}
const obj2 ={5:"a", 6:"b",7:"c",8:"d"}
//const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const obj4 ={...obj1,...obj2}
console.log(obj4)

// database value retrieval
