//Strings

const name = "Satyam"
const repoCount = 30;

console.log( name + repoCount + +" value");
// we do not use this method to print anymore coz it is not professional and its outdating
//------------------

// SO we use string interpolation to do this 

console.log(`hello my name is ${name}and my repo count is ${repoCount}`);
// this is professional in modern

const getName = new String("Satyam-Namdev");
console.log(getName)

//this is another way to declare string 
// String is og keyvalue pair
console.log(getName[0])
console.log(getName.__proto__)

//mastering function of string
console.log(getName.toUpperCase());
console.log(getName.charAt(2));

console.log(getName.indexOf('m'));
const newString = getName.substring(1,4)
console.log(newString);
// and this does not contain last indec value element

const anotherString =getName.slice(-2,5)
console.log(anotherString);

const newString2 = "      Satyammm.   "
console.log(newString2);
console.log(newString2.trim());

const url = "https://satyam.com/satyam namdev";
console.log(url.replace('namdev','oye'))

console.log(url.includes('satyam'))

// String to Array COnversion
console.log(getName.split('-'))