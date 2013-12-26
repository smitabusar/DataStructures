var Node = function(value) {
	this.data = value;
	this.next = null;
	this.previous = null;
}

var DoublyLinkedList = function() {
	this.head = null;
	this.tail = null;
}

//prints [1 , 2 ,3]
DoublyLinkedList.prototype.print = function() {
	var temp = this.head;
	var result = "[";
	while (temp != null) {
		result += (temp.next !== null) ? (temp.data + " , ") : (temp.data);
		temp = temp.next;
	}
	result += "]";
	return result;
}

//prints [3 , 2 , 1]
DoublyLinkedList.prototype.reversePrint = function() {
	var temp = this.tail;
	var result = "[";
	while (temp != null) {
		result += (temp.previous !== null) ? (temp.data + " , ") : (temp.data);
		temp = temp.previous;
	}
	result += "]";
	return result;
}

//inserts the data at the head
DoublyLinkedList.prototype.prepend = function(value) {
	if (value === undefined) {
		return -2;
	}
	if (this.head === null) {
		this.head = new Node(value);
		this.tail = this.head;
	} else {
		var temp = new Node(value);
		temp.next = this.head;
		this.head.previous = temp;
		this.head = temp;
	}
	//console.log(this.head);
}

//deletes from head of the list and uses callback to return data or error
DoublyLinkedList.prototype.pop_front = function(callback) {
	var errorCode = 0;
	var data;
	if (this.head === null) {
		errorCode = -1; //empty list
	} else if (this.head === this.tail) {
		data = this.head.data;
		this.head = null;
		this.tail = null;
	} else {
		var temp = this.head;
		data = temp.data;
		this.head = temp.next;
		this.head.previous = null;
	}
	//console.log(this.head);
	callback(errorCode, data);
}
//inserts the data at the tail
DoublyLinkedList.prototype.append = function(value) {
	if (value === undefined) {
		return -2;
	}
	if (this.head === null) {
		this.head = new Node(value);
		this.tail = this.head;
	} else {
		var temp = new Node(value);
		temp.previous = this.tail;
		this.tail.next = temp;
		this.tail = temp;
	}
	//console.log(this.head);
}

//deletes from tail of the list and uses callback to return data or error
DoublyLinkedList.prototype.pop_back = function(callback) {
	var errorCode = 0;
	var data;
	if (this.head === null) {
		errorCode = -1; //empty list
	} else if (this.head === this.tail) {
		data = this.head.data;
		this.head = null;
		this.tail = null;
	} else {
		var temp = this.tail;
		data = temp.data;
		this.tail = temp.previous;
		this.tail.next = null;
	}
	//console.log(this.head);
	callback(errorCode, data);
}

//function given as input to pop_front & pop_back
function show(error, data) {
	if (error === -1) {
		console.log("list is empty");
	} else {
		console.log(data  + " from " + dll.print());
		//console.log(dll.reversePrint());
	}
}

var dll = new DoublyLinkedList();
console.log("print empty list " + dll.print());
console.log("reverse print empty list " + dll.reversePrint());
console.log("prepend with no parameter " + dll.prepend());
console.log("append with no parameter " + dll.append());
dll.prepend(12);
console.log("prepended another element " + dll.print());
//console.log("prepended another element reverse " + dll.reversePrint());
dll.prepend(3);
console.log("prepended another element " + dll.print());
//console.log("prepended another element reverse " + dll.reversePrint());
dll.prepend(6);
console.log("prepended another element " + dll.print());
//console.log("prepended another element reverse " + dll.reversePrint());
console.log("popping front");
dll.pop_front(show);
dll.pop_front(show);
dll.pop_front(show);
dll.pop_front(show);

dll.append(23);
console.log("appended another element " + dll.print());
//console.log("appended another element reverse " + dll.reversePrint());
dll.append(1);
console.log("appended another element " + dll.print());
//console.log("appended another element reverse " + dll.reversePrint());
dll.append(15);
console.log("appended another element " + dll.print());
//console.log("appended another element reverse " + dll.reversePrint());
dll.pop_back(show);
dll.pop_back(show);
dll.pop_back(show);
dll.pop_back(show);

dll.prepend(12);
console.log("prepended another element " + dll.print());
//console.log("prepended another element reverse " + dll.reversePrint());
dll.prepend(3);
console.log("prepended another element " + dll.print());
//console.log("prepended another element reverse " + dll.reversePrint());
dll.prepend(6);
console.log("prepended another element " + dll.print());
//console.log("prepended another element reverse " + dll.reversePrint());

dll.append(23);
console.log("appended another element " + dll.print());
//console.log("appended another element reverse " + dll.reversePrint());
dll.append(1);
console.log("appended another element " + dll.print());
//console.log("appended another element reverse " + dll.reversePrint());
dll.append(15);
console.log("appended another element " + dll.print());
//console.log("appended another element reverse " + dll.reversePrint());
console.log("popping back");
dll.pop_back(show);
dll.pop_back(show);
dll.pop_back(show);
dll.pop_back(show);
console.log("popping front");
dll.pop_front(show);
dll.pop_front(show);
dll.pop_front(show);
dll.pop_front(show);
