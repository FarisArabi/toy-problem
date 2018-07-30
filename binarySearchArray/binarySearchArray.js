/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
	var L = array.length -1;
	var I = 0;
	var mid = 0;
	while(I <= L) {
		mid = Math.floor((L + I)/2);
		if(array[mid] === target) {
			return mid;
		} else 
		if(target > array[mid]) {
		I = mid + 1;
		} 
		else {
		L = mid -1;
		}
	}
};

