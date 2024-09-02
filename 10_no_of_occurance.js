function noOfOccurances(str){
    var occurances = {};
    var strArray = str.split("");
    strArray.forEach(function(character){
        if(occurances.hasOwnProperty(character)===false){
            occurances[character]=1;
        }else{
            occurances[character]++;
        } 
    })
    return occurances;
}

console.log(noOfOccurances("harsh"));