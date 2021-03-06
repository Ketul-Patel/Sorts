// Bottom Up Merge Sort
// Bottom Up Merge Sort works as follows: merge the smallest splits and gradually work your way up to the larger merge

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
function merge(array, copy, low, mid, hi) {
  for(var x = low; x <= hi; x++) {
    copy[x] = array[x]
  }
  var i = low,
      j = mid+1;
  for(var k = low; k <= hi; k++) {
    if(i > mid) { array[k] = copy[j++] } // if we have no more in the lower array
    else if(j > hi) { array[k] = copy[i++] } // if we have no more in the higher array
    else if(copy[j] > copy[i]) { array[k] = copy[i++] }
    else { array[k] = copy[j++] }
 }
}
// actual sort function creates a copy and then starts sorting
function sort(array) {
  var copy = array.slice();
  // This loop determines the size of the merges starting with 1
  for(var n = 1; n < array.length; n = n+n) {
    // loop through the array and actually merge the values
    for(var i = 0; i < array.length - n; i += n+n) {
      var low = i;
      var mid = i + n-1;
      var hi = Math.min(i+n+n-1, array.length-1);
      merge(array, copy, low, mid, hi);
    }
  }
}
