/* Note:
Primitive Datatype uses **Stack** Memory
Non Primitive Datatype uses **Heap** Memory
*/
let name = "Satyam";
let newName = name
newName= "SatyamNAmdev"
console.log(newName);
console.log(name);
// Here memeory is in stack formate and this is giving the copy of the value thats why it called call by value


//--------------------------

let user = {
    namee :"satyam",
    age : 23,
    email: "satyam@gmail.com"
    

}
let User2 = user;
//this will give directly refrence so any modification can be directly reflect
User2.email= "ssnamdev2117@gmail.com"
console.log(user.email);
console.log(User2.email);