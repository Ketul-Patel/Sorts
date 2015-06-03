// Insertion Sort
// Insertion sort works as follows: Build a sorted subarray from the left by constantly taking the next value and placing it in its appropriate place relative to the rest of the sorted subarray. Simply put you iterate over the array taking each consecutive value and placing it in its sorted position relative to all of the previous values in the array.

// Standard swap function that takes an array and two indices to swap
// The arr parameter has its properties or values passed by reference so this function will modify the passed array
function swapArr(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
// O(n) isSorted function that returns a bool to tell if the array is sorted
function isSorted(arr) {
  for(var i = 1; i < arr.length; i++) {
    if(arr[i-1] > arr[i]) {
      return false;
    }
  }
    return true;
}
// Test function for sorting algorithm
function testArray(sortFunc) {
  var test = [];
  for(var i = 0; i < 1000000; i++) {
    test.push(Math.floor(Math.random()*100));
  }
  var before = new Date()
  sortFunc(test);
  var after = new Date()
  if(isSorted(test)) {
    console.log("Sort worked!", after-before);
  } else {
    console.log("Sort failed...", test);
  }
}
// run the test function pass in the sort to test
testArray(insertionSort);
// insertionSort implementation
function insertionSort(arr) {
  // loop over array starting at 1 because we a subarray of 1 value is already sorted
  for(var i = 1; i < arr.length; i++) {
    var sortee = arr[i];
    var j = i;
    // loop backwards from j and keep shifting values forward until you find the right spot for sortee
    while(j > 0 && sortee < arr[j-1]) {
      arr[j] = arr[j-1];
      j--
    }
    // place sortee
    arr[j] = sortee;
  }
}
