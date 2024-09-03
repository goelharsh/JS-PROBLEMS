function typeTeller(arg){
    return typeof arg
}

console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("harsh"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function(){}));