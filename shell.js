// Shell Sort
// Shell Sort works as follows: Shell sort runs insertion sort on subarrays that are created using gaps. These gaps get progressively smaller until the gap=1 case runs which acts as a highly efficient insertion sort

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
testArray(shellSort);
// shell sort function
function shellSort(arr) {
  var gaps = gapsCreator(arr.length)
  for(gap in gaps) {
    for(var i = gaps[gap]; i < arr.length; i++) {
      var sortee = arr[i]
      var j = i - gaps[gap];
      while(j >= 0 && arr[j] > sortee) {
        arr[j+gaps[gap]] = arr[j]
        j -= gaps[gap]
      }
      arr[j+gaps[gap]] = sortee;
    }
  }
}
// gap creator helper function
function gapsCreator(length) {
  var gaps = [];
  var counter = 1;
  while(gaps[gaps.length-1] > 1 || gaps.length == 0) {
    gaps.push(Math.floor(2*(length/Math.pow(2,counter+1)))+1)
    counter++
  }
  if(gaps[gaps.length-1] != 1) {
    gaps.push(1)
  }
  return gaps
}
