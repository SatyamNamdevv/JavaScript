// Numbers in js
const score =400;
console.log(score);
const balance = new Number(100);
console.log(balance);

// we can also convert number to string
console.log(balance.toString().length);
console.log(balance.toFixed(2))// important for e commerce

const  otherNumber = 24.99

console.log(otherNumber.toPrecision(3));// for precise value but suru left se hota hai decimal to pahle se

const hundred = 1233445
console.log(hundred.toLocaleString('en-IN'))

//-----------------------Math-------
//Js coms with inbuild math liberary (object in it)
console.log(Math);

// abs for absolute value only positve kr deta hia sbkp
console.log(Math.abs(-4));
console.log(Math.round(2.9));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.4))


console.log((Math.random()*10)+1);//0-1 le beechki value ayegi bs

const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max - min +1))+min)