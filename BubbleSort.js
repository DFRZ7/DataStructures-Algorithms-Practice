function sort(arrays) {
  for (var i = 0; i < arrays.length - 1; i++) {
    var isSwap = false;
    for (var j = 0; j < arrays.length - i - 1; j++) {
      //Swap
      if (arrays[j] > arrays[j + 1]) {
        var flag = arrays[j];
        arrays[j] = arrays[j + 1];
        arrays[j + 1] = flag;
        isSwap = true;
      }
    }
    if (!isSwap) {
      //No swap, stop classification.
      break;
    }
  }
}

var scores = [90, 70, 50, 80, 60, 85]; //Unsorted list.

sort(scores);
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i] + ".");
}

//Bubble sort, it will take an array of numbers, it will compare 2 values of the array, one next to the other.
//if the value on the left is less then on the right, it will not swap, if not, it will leave as it is, and continue to the next index in the array.
