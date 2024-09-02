var arr = [1,"redds", 45,67,544,"sdf", "sdf", "dfs", 5, "sfs"];
var ans = 0;
arr.forEach(element=>{
    if(typeof element=== 'number'){
        ans+=element
    }
})
console.log(ans)