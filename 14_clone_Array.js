function cloneArray(arr){
    // FIRST METHOD:
    // return [...arr]

    // SECOND METHOD:
    // var newArr = [];
    // arr.forEach(element => {
    //     newArr.push(element);
    // });
    // return newArr 

    //THIRD METHOD
    var neaRR = arr.map(function(e){
        return e;
    })
    return neaRR
}

console.log(cloneArray([1,2,3,4,5])); 