// Date
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
//console.log(typeof(myDate))

// To create own date
let mycdate = new Date("11,10,2001");
//console.log(mycdate)
console.log(mycdate.toLocaleString());


// For Time stamp
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mycdate.getTime());
console.log(Math.floor((Date.now()/1000)))


let newDate = new Date()
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1);// coz month ki counting 0 se hoti
newDate.toLocaleString('default', {
    weekday: "long",
})