// function reverseNo(no){
//    return Number(no.toString().split("").reverse().join(""))  
// }

// METHOD 2 
function reverseNo(num){
   var rev = 0
  while(num>0){
   var rem = num%10;
   rev = rev*10+rem;
   num = Math.floor(num/10);
  }
  return rev
}

console.log(reverseNo(134))