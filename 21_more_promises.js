const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: 'js', pin: '123' })
        }
        else {
            reject('Error: JS went wrong');
        }
    }, 1000)
})


// while using async/await we are not able to use catch things, so we implmenet concept of try and catch block
async function consumePromiseFice() {
    const response = await promiseFive;
    console.log(response);
}
consumePromiseFice();



async function consumePromiseFice() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFice();    