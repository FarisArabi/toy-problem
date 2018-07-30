//Given an array of words (array of strings), return all words that are palindromes.
// Example: filterPalindromes([ "word", "Ana", "race car" ])
// output: [ "Ana", "race car" ]








function filterPalindromes (words) {
  // Write your code here, and
  // return your final answer.
    var allPali=[];
    for(var i=0; i < words.length; i++) {
	  words[i] = words[i].toLowerCase().split(' ').join('');
	  flage = true;
	  for(var j = 0; j < words[i].length; j++) {
		  flage = (words[i][j] === words[i][words[i].length -(j+1)]) && flage ;
	  }
	  if(flage) {
		allPali.push(words[i])
	  }
    }
  return allPali;
}