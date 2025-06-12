const promiseOne = new promise(function(resolve, reject){
    // can do async task
    // can do DB calls , cryptography , network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})

// .then .catch and .finally also used 