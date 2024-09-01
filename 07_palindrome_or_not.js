function palCheck(str){
    var reversed = str.split("").reverse().join("")
    if(str === reversed){
        return true
    }else return false;
}


console.log(palCheck("loop"));
console.log(palCheck("lool"));
