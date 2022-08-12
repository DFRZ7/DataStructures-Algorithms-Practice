//Utilized to srot sequence of numbers. The leftmost number wil be condered fully sorted. From the remaining numbers, the leftmost is taken out.
//Meaning from an array of [5, 3, 4,7] 5 would be left most, but reamining 3 leftmost now and taken out. This number will be compared to the one that was considered sorted, meaning
//The 5. If this number is larger, we will do a swap. 

function sort(arrays) {
    for (var i = 0; i < arrays.length; i++) {
        var insertElement = arrays[i]; // Take the new elements that are not classified.
        var inserPosition = i;
        for (var j = inserPosition - 1; j>=0;j--) {
            // Insert is moved to the right.
            if (insertElement < arrays[j]) {
                arrays[j+1] = arrays[j] 
                inserPosition--;
            }
        }
        arrays[inserPosition] = insertElement
    }
  }
  
  var scores = [90, 70, 50, 80, 60, 85];
  sort(scores);
  for (var i = 0; i < scores.length; i++) {
    console.log(scores[i] + ".");
  }
