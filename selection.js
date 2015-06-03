// Selection Sort
// Selection sort works as follows: Build a sorted subarray from the left by finding the minimum value in the unsorted subarray and swapping it with the leftmost value in the unsorted subarray (thereby adding it to the sorted subarray). Simply put you start by finding the minimum value and swapping it with the first value then find the second minimum and swap it with the second value, etc.

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
  for(var i = 0; i < 100; i++) {
    test.push(Math.floor(Math.random()*100));
  }
  sortFunc(test);
  if(isSorted(test)) {
    console.log("Sort worked!");
  } else {
    console.log("Sort failed...", test);
  }
}
// run the test function pass in the sort to test
testArray(selectionSort);
// selectionSort function takes in an array and modifies it
function selectionSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    var min = i;
    for(var j = i; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    swapArr(arr, i, min);
  }
}
