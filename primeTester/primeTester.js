//A prime number is an integer greater than 1 that has no divisors other than itself and 1.
//Write a function that accepts a number and returns true if it’s a prime number, false if it’s not.
//The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 
//Input: n=2
//Output:true
//Input:1
//Output:false


function primeTester (n) {
  // Write your code here, and
  // return your final answer.
  var count = 0;
  for(var i = n; i >= 1; i--) {
  	if(n % i === 0) {
  		count += 1;
  	}
  }
  if(count === 2) {
  	return true;
  } else {
  	return false;
  }
}
