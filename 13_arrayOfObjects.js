var arr = [
  { name: "harsh", gender: "male" },
  { name: "goel", gender: "female" },
  { name: "arun", gender: "male" },
  { name: "neha", gender: "female" },
  { name: "dhruv", gender: "male" },
];

// it will make a new array
// var newArr = arr.filter(function(elem){
//     return elem.gender ==='male'
// })
// console.log(newArr)

// to remove values from actual arrays
//first count non-male
// then write code to remove one non-male
// then run that code for total non-male

var count = 0;
arr.forEach((elem) => {
  if (elem.gender !== "male") {
    count++;
  }
});

for (var j = 1; j <= count; j++) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].gender !== "male") {
      arr.splice(i, 1);
    }
  }
}
console.log(arr);
