//Write a stack. Once you’re done, 
//implement a queue using two stacks to create FIFO behavior. 
//The queue should not have any storage separate from its stacks.


var Stack = function() {
	var storage = [];

	this.push = function(){
		storage.push.apply(storage, arguments);

	};

	this.pop = function(){
		storage.pop.apply(storage, arguments);

	};

	this.size = function(){
		return storage.length;

	};
};

var Queue = function() {

	var inbox = new Stack();
	var outbox = new Stack();

	this.enqueue = function(){
		inbox.push.apply(inbox, arguments);

	};

	this.dequeue = function(){
		if(outbox.size() === 0) {
			while (inbox.size())
				outbox.push(inbox.pop());
		}
		return outbox.pop();
	};

	this.size = function(){
		return inbox.size() + outbox.size();

	};
};