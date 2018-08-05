//Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.
//Examples


//input:[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
//output:2
//input:[ "cat", "dog", "dig", "cat" ]
//output:"cat"



function evenOccurrence (arr) {
  // Write your code here, and
  // return your final answer.
  var occurrence = {};
  arr.forEach(function(value) {
  	occurrence[value] = occurrence[value] +1 || 1;
  })
  for(var i = 0; i < arr.length; i++) {
	var element = arr[i]
	if(occurrence[element] % 2 === 0){

	return element;
}
}
}


