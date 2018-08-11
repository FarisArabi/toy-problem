//Words within Words
//Given an array of unique words, find the word that contains the greatest number of other words. 
//A word must be at least two letters long.
//input:
//wordList:
//[ "gray", "grays", "ray", "rays", "strays" ]	
//output:"grays"
function containword(array) {
	var count;
	var max = 0;
	var theWord;
	for(var i = 0; i < array.length; i++) {
		count = 0;
		element = array[i];
		var newArr = array.slice();
		newArr.splice(i,1);
		for(var j = 0; j < newArr.length; j++) {
			if(element.includes(newArr[j])) {
				count++;
			}
			if(count > max) {
				max = count;
				theWord = element;
			}
		}
	}
	return theWord;
}
