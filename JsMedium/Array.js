// Array
const myArr = [1,2,3,4,5,6];
console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4)
console.log(myArr2)

myArr.push(8);
console.log(myArr);
myArr.pop(); // removes last element
myArr.pop(); // removes last element
myArr.pop(); // removes last element
myArr.pop(); // removes last element
console.log(myArr)
myArr.unshift(9) // shift element in first index
console.log(myArr)
myArr.shift()
console.log(`this is ${myArr}`)

// Qustion answer in js output
console.log(myArr.includes(4));
console.log(myArr.indexOf(2));

const newArr = myArr.join()
console.log(myArr)
console.log(newArr);

////// SLice ANd Splice Important
console.log("A", myArr);
const myNewArr = myArr.slice(1,3)
//  slice mean kaha se kaha tk kitna include krna hai bs
console.log("B" ,myNewArr)
const myArr3 = myArr. splice(1,3)
console.log("C" ,myArr3);
// splice poora portion hi kaaaat deta hai even from main array.