/* Write a function that reverses a linked list.

Explanation:

Given the below linked list:

A -> B -> C -> D -> E -> null

Return:

E -> D -> C -> B -> A -> null

‘Constraint 1: Do this in linear time’

‘Constraint 2: Do this in constant space’

‘Constraint 3: Do not mutate the original nodes by adding any new properties */
var reverseLinkedList = function(node) {
	if(node.length < 2) {
    return;
  }
  var  first = node.head;
  var  second = first.next;
  while(second) {
    var temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  node.head.next = null;
  node.head = first;
}

