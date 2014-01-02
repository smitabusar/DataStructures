var Node = function(value, next) {
	this.data = value;
	this.next = next;
}

var Queue = function() {
	this.head = null;
	this.tail=null;
	this.nElements=0;
}

//prints [1 , 2 , 3]
Queue.prototype.print = function() {
	var temp = this.head;
	var result = "[";
	while (temp != null) {
		result += (temp.next !== null) ? (temp.data + " , ") : (temp.data);
		temp = temp.next;
	}
	result += "]";
	return result;
}

//returns number of nodes in the queue
Queue.prototype.size = function() {
	return this.nElements;
}


//inserts value at head
Queue.prototype.enqueue = function(value) {
	if (value === undefined) {
		return -2;
	}
	temp=new Node(value,null);
	if(this.head===null){
		this.head=temp;
		this.tail=temp;
	} else {
		this.tail.next=temp;
		this.tail=temp;
	}
	this.nElements++;
	console.log(this.head);
}

//deletes from head else return "Empty"
Queue.prototype.dequeue = function(callback) {
	var errorMsg="",
		data;
	if(this.head===null){
		errorMsg="Empty";
	} else if (this.head===this.tail){
		data=this.head.data;
		this.head=null;
		this.tail=null;
		this.nElements--;
	}else{
		var temp = this.head;
		data=temp.data;
		this.head=temp.next;
		this.nElements--;
	}
	callback(errorMsg,data);
}

//function given as input to dequeue
function show(error, data) {
	if (error === "Empty") {
		console.log("list is empty");
	} else {
		console.log(data  + " from " + queue.print() + queue.size());
	}
}

var queue = new Queue();
console.log("print empty list " + queue.print() + queue.size());
console.log("enqueue with no parameter " + queue.enqueue());
queue.enqueue(12);
console.log("list " + queue.print() + queue.size());
queue.enqueue(3);
console.log("list " + queue.print() + queue.size());
queue.dequeue(show);
queue.dequeue(show);
queue.enqueue(6);
queue.dequeue(show);
queue.dequeue(show);

