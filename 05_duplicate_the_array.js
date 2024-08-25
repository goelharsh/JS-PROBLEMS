
// function duplicate(arr){
//     arr.forEach(element => {
//         arr.push(element);
//     });
//     return arr;
// }

// METHOD 2 
function duplicate(arr){
    return arr.concat(arr);
}

const result= duplicate([1,2,3,4,5]);
console.log(result)