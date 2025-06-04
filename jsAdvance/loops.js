// Important loops for array

// 1 For of loop

const arr = [1,2,3,4,5]
for (const value of arr) {
    console.log(value)
    
}
const greeting = "Hello Satyam"
for (const value of greeting) {
    console.log(value)
    
}
// Maps {Important}
const map =  new Map()
map.set('IN',"India")
map.set('USA', "USAAAA")
console.log(map)
// for loop for mapp
for(const[key, value] of map){
    console.log(key, value);
}
// forof for object  // not work
// const myObj = {
//     'game':"NFS",
//     'game2':'Spiderman'

// }
// for(const [key , value] of myObj)
//     console.log(key, value)