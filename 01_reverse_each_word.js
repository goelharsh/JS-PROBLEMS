
var str = "Harsh Bhai kaise ho"

var newArray = str.split(" ");

var ansStr = newArray.map(function(word){
    return word.split("").reverse().join("");
});
console.log(ansStr); 