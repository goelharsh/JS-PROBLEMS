function upperCaseFirstWord(str){
    var allwords = str.split(" ").map(function(word) {
       return word.charAt(0).toUpperCase() + word.substring(1);
    });
    return allwords.join(" ");
    // console.log(allwords)
}
console.log(upperCaseFirstWord("my name is harsh goel"))