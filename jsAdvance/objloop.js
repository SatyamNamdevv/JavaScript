const myObj={
    js: 'javascript',
    cpp: 'c++',
    java: 'java',
    py: 'python'
}
// we will use for in loop here for object

for (const key in myObj) {
    console.log(`${key} is the shortcut for ${myObj[key]}`);
}
// for im return key as value in array
// Map is not iteratable

// FOR each loop in detail
console.log("---------------")
// it is call back function
const coding=["js","python","ruby","java","c++"]
coding.forEach(function (value){
    console.log(value)
})
// ANOTHER WAY ARROW FUNCTION
coding.forEach((item)=>{
    console.log(item);
})
//another way
function printme(item2){
    console.log(item2)
}coding.forEach(printme)