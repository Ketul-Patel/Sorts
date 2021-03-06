// Merge Sort
// Merge sort works as follows: continuously split the array into smaller chunks and then merge those chunks as soon as they become a sorted subarray (an array with one value is considered sorted)
// This version of Merge sort improves the algorithm by using insertion sort for small subarrays, testing whether the array is already in order by comparing the midpoints, and eliminating the loop to copy values to the copy array

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
// merge function that takes in an array with a low mid and high to merge on uses a copied array to help merge
function merge(src, dst, low, mid, hi) {
  var i = low,
      j = mid+1;
  for(var k = low; k <= hi; k++) {
    if(i > mid) { dst[k] = src[j++] } // if we have no more in the lower array
    else if(j > hi) { dst[k] = src[i++] } // if we have no more in the higher array
    else if(src[j] > src[i]) { dst[k] = src[i++] }
    else { dst[k] = src[j++] }
 }
}
// mergeSort function that splits runs recursively and then merges
function mergeSort(src, dst, low, hi) {
  if(hi <= low + 7) { 
    insertionSort(dst, low, hi);
    return;
  }
  var mid = Math.floor(low + (hi - low) / 2)
  mergeSort(dst, src, low, mid)
  mergeSort(dst, src, mid+1, hi)
  merge(src, dst, low, mid, hi)
}
// actual sort function creates a copy and then starts sorting
function sort(array) {
  var copy = array.slice();
  mergeSort(copy, array, 0, array.length-1);
}
// insertionSort implementation
function insertionSort(arr, low, hi) {
  // loop over array starting at 1 because we a subarray of 1 value is already sorted
  for(var i = low+1; i <= hi; i++) {
    var sortee = arr[i];
    var j = i;
    // loop backwards from j and keep shifting values forward until you find the right spot for sortee
    while(j > low && sortee < arr[j-1]) {
      arr[j] = arr[j-1];
      j--
    }
    // place sortee
    arr[j] = sortee;
  }
}
