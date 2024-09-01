function upperCaseFirstWord(str){
    str.split(" ").map(function(word) {
        word.charAt(0).toUpperCase() + word.subString(1);
    });
}
console.log(upperCaseFirstWord("my name is harsh goel"))