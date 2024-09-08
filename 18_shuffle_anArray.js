function shuffle(arr) {
  // using floor the point get removed

  // find a shuffle area
  // var totalShuffleArea = arr.length;
  // finding a random number
  // totalShuffleArea--;
  // var indexToBeChanged = Math.floor((Math.random()*totalShuffleArea))

  //   do this thing till we get shuffle area as 0 so we will use loop
  // var temp = arr[totalShuffleArea];
  // arr[totalShuffleArea] = arr[indexToBeChanged];
  // arr[indexToBeChanged] = temp;



  var totalShuffleArea = arr.length;
  while (totalShuffleArea > 0) {
    // finding a random number
    totalShuffleArea--;
    var indexToBeChanged = Math.floor(Math.random() * totalShuffleArea);

    //   do this thing till we get shuffle area as 0 so we will use loop
    var temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexToBeChanged];
    arr[indexToBeChanged] = temp;
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
