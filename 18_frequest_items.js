function freq(arr){
    var freq = {};
    arr.forEach(elem => {
       if(freq.hasOwnProperty(elem)) freq[elem]++;
       else freq[elem] = 1; 
    })
    // console.log(freq)
    // console.log(Object.keys(freq));
    var ans = Object.keys(freq).reduce(function(acc, num){
        return freq[acc] > freq[num] ? acc : num;
    })
    console.log(ans)
}

freq([1,2,3,12,2,3,12,1,2,3,2121]);