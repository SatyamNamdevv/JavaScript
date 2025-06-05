//filter discussion

 const myNums = [1,2,3,4,5,6,7,8]
// const newNumm = myNums.filter((num) =>{
//    return num>4

// }) 
// console.log(newNumm)

// Using for each

const newNumm =[]
myNums.forEach((num)=>{
    if(num>4){
        newNumm.push(num)
    }
})
    console.log(newNumm)