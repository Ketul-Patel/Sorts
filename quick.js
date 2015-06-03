// Quick Sort
// Quick sort works as follows: recursively partition the array and place pivots in their final sorted spot. After partitioning, the recursive call will perform a partition on the remaining left and right sections.

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
    test.push(Math.floor(Math.random()*1000000));
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
testArray(sort);
// partition function takes in an array, low, and hi
function partition(array, lo, hi) {
  var i = lo;
  var j = hi;
  var pivot = array[lo];
  var leftSwapReady = false;
  var rightSwapReady = false;
  while(i <= j) {
    if(array[i] > pivot) {
      leftSwapReady = true;
    } else {
      i++
    }
    if(array[j] < pivot) {
      rightSwapReady = true;
    } else {
      j--
    }
    if(leftSwapReady && rightSwapReady) {
      swapArr(array, i, j)
      leftSwapReady = false;
      rightSwapReady = false;
    }
  }
  swapArr(array, lo, i-1);
  return i-1;
}
// quickSort that takes in array lo and hi and runs the partition and then recursively calls on each side of the pivot
function quickSort(array, lo, hi) {
  if (hi <= lo) { return }
  var i = partition(array, lo, hi);
  quickSort(array, lo, i-1);
  quickSort(array, i+1, hi);
}
// actual sort function that starts the recursive quicksort call
function sort(array) {
  quickSort(array, 0, array.length-1)
}
