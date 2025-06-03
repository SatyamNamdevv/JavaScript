// // Can be declared in two types
// // 1 literal (NO Singletone), 2 constructor(SIngletone)

// // Object literal
 const mySym = Symbol("Key1")
const jsUser ={
    // Key and value pair
    [mySym]:"mykey1",
    name: "satyam",
     age : 21,
     location : "Bhopal",
     email: "ssnamdeb2117@gmail.com",
     isLoggedIn: false,
}
console.log(jsUser[Symbol])
console.log(jsUser.email)// this is not right way
console.log(jsUser["email"]) // this is prfessional
// eg if key is First name then we can not provoke using first way
jsUser.email = "ss@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "AAlu@gmail,com"
console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello Satyam")
    
}
console.log("hhereeeee")
console.log(jsUser.greeting)


jsUser.greeting2 = function() {
    console.log(`hello user , ${this.name}`);
    
}
console.log(jsUser.greeting2)
