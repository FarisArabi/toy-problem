/* Write a function that, given a string, 
finds the longest run of identical characters and 
returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs. */
//Examples:

/* Input	     Output
  
  "abbbcc"	     [ 1, 3 ]

  "aabbc"	    [ 0, 1 ]

    ""	        [ 0, 0 ]

"mississippi"   [ 2, 3 ]

"abcdefgh"	    [ 0, 0 ]

"abccccccc"	    [ 2, 8 ]  */


function longestRun (string) {
  var currCount = 1;
  var currStart = 0;
  var finalCount = 0;
  var fianlStart = 0;
  var finalEnd = 0;
  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      currCount++;
      if (currCount > finalCount) {
        finalCount = currCount;
        finalStart = currStart;
        finalEnd = i;
      }
    } else {
      currCount = 1;
      currStart = i;
    }
  }

  return [finalStart, finalEnd];

}
