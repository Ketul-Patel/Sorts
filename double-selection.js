function doubleSelection(array) {
	for(var i = 0; i < array.length/2; i++) {
		var min = i
		var max = array.length - i - 1
		for(var j = i; j < array.length - i; j++) {
			if(array[min] > array[j]) {
				min = j
			}
			if(array[max] < array[j]) {
				max = j
			}
		}
		console.log('max idx, min idx', max, min)
		if(i == max) {
			if(array.length - i - 1 == min) {
				swapArray(array, i, min)
			} else {
				console.log('changing max b/c of conflict')
				max = min;
				// swap min
				swapArray(array, i, min)
				// swap max
				swapArray(array, array.length-i-1, max)
			}
		} else {
			// swap min
			swapArray(array, i, min)
			// swap max
			swapArray(array, array.length-i-1, max)
		}
		console.log('i:', i, 'array:', array)
	}
	return array
}

function swapArray(array, idx1, idx2) {
	var temp = array[idx1]
	array[idx1] = array[idx2]
	array[idx2] = temp
}

console.log(doubleSelection([7, 1, 3, 2, 4]))

var testarray = []
for(var i = 0; i < 100; i++) {
	testarray.push(Math.floor(Math.random()*100))
}
console.log(testarray)
console.log(doubleSelection(testarray))
