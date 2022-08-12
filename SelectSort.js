function sort(arrays) {
  var len = arrays.length - 1;
  var minIndex; // The minimum index selected.

  for (var i = 0; i < len; i++) {
    minIndex = i;
    var minValue = arrays[minIndex];
    for (var j = i; j < len; j++) {
      if (minValue > arrays[j + 1]) {
        minValue = arrays[j + 1];
        minIndex = j + 1;
      }
    }

    // Minimum of arrya[i] and swapper by the arrays[minIndex]
    if (i != minIndex) {
      var temp = arrays[i];
      arrays[i] = arrays[minIndex];
      arrays[minIndex] = temp;
    }
  }
}

var scores = [90, 70, 50, 80, 60, 85];
sort(scores);
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i] + ".");
}

//The main idea is to do a linear search to locate the smallest value. The value will the be swapped to the left most had of the array.
//This will consider that number uflly sorted, and then the process will repeat until we end passing the array.
