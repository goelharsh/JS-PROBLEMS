
// here we are creating promse and not consuming 

// after that we have hold that promise in our promiseOne variable 
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task completed");
    }, 2000);  
})


// here we are CONSUMING the promise 
promiseOne.then(function(){
    console.log("Promise resolved")
})

// OP of above code : Asyn task completed


// ___________________________________________________________

// in above example, promise resolved was not printed because abhi hmara then function resolve se attatch se ni hua tha
// But now we have attached the resolved paramter with then function using

// resolve()

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task 2 completed");
        resolve();
    }, 2000);  
})


// here we are CONSUMING the promise 
promiseTwo.then(function(){
    console.log("Promise 2 resolved")
})


// __________________________________________________


// Here we will not hold the promise in any variable 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 3");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 3 resolved");
})
// ___________________________________________________

// Here we will work with data

// here when we have passed an object in the resolved function 
// then we can consume that object 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("User info fetching");
        resolve({username: 'harsh', email: 'koderdost@gmailc.com'})
    },1000)
}).then(function(user){
    console.log(user);
})


// _______________________________________________

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'harsh', pin: '12'});
        }else{
            reject('Error: Something went wrong');
        }
    },1000)
})

// we now want only username : but if we use this thing ten it will be wrong , becuase we not find username like this 
// const username = promiseFour.then( (user) =>{
//     console.log(user);
//     return user.username
// })
// console.log(username);


// so we have to do PROMISE CHAINING
promiseFour
    .then( (user) =>{
    console.log(user);
    return user.username
})
    .then((username)=>{
    console.log(username)
})
    .catch(function(error){
    console.log(error)
})


