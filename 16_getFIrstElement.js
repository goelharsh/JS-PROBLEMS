function retreive(arr, n=1){
    if(n<=arr.length){
        for(var i=0;i<n;i++){
            console.log(arr[i]);
        }
    }
    else{
        console.log(`${n} to elements hi nhi hain`); 
    }
}
(retreive([5,7,3,6,3,6,7],6));