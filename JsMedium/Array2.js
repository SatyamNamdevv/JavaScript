//
const mHero = ["ironman", "flash", "spiderman", "Thor"]
const hHero = ["nagraj", "shaktiman","joro"]

mHero.push(hHero);
console.log(mHero);

console.log("--------")
 const allhero = mHero.concat(hHero)
console.log(allhero)

// to spread all heoros

const detailhero =  [...mHero, ...hHero]
console.log(detailhero)
console.log("New OUTPUT HERRE")
// single all array
const conArray = [1,2,3,[3,6,5],[6,7,8,[9,7,8]]]
const flatarray = conArray.flat(Infinity);
console.log(flatarray)

// for data scraping 
console.log(Array.isArray("satyam"))
console.log(Array.from("Satyam")) // to make new array

console.log(Array.from({name: "satyam"})) // interesting case

// to make array from elements

let score1 = 100;
let score2 =200;
let score3=300;
console.log(Array.of(score1,score2,score3))
