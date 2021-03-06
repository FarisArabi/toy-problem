//Given a string, return true if its arrangement of parenthesis (), 
//curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
//Examples:
//Input:"(x + y) - (4)"
//output:true
//input:"(((10 ) ()) ((?)(:)))"
//output:true
//input:"[{()}]"	
//output:true
//input:"(50)("
//output:false
//input:"[{]}"	
//output:false

function isBalanced (str) {
  // Write your code here, and
  // return your final answer.
  var array = [];
  var open = { 
  	'{': '}',
  	'[': ']',
  	'(': ')'
  	 };
  var closed = { 
  	'}': true, 
  	']': true, 
  	')': true
  	 };
  
  for (var i = 0; i < str.length; i ++) {
    var chr = str[i];
    if (open[chr]) {
      array.push(chr);
    } else if (closed[chr]) {
      if (open[array.pop()] !== chr) return false;
    }
  }
  
  return array.length === 0;
}

