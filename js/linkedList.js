var Node = function(value, next) {
	this.data = value;
	this.next = (next === undefined) ? null : next;
}

var LinkedList = function() {
	this.head = null;
}

//prints [1 , 2 , 3]
LinkedList.prototype.print = function() {
	var temp = this.head;
	var result = "[";
	while (temp != null) {
		result += (temp.next !== null) ? (temp.data + " , ") : (temp.data);
		temp = temp.next;
	}
	result += "]";
	return result;
}

//inserts value at head
LinkedList.prototype.insert = function(value) {
	if (value === undefined) {
		return -2;
	}
	var next = this.head;
	this.head = new Node(value, next);
	//console.log(this.head);
}

//deletes if the given value is found else returns -1
LinkedList.prototype.delete = function(value) {
	if (value === undefined) {
		return -2;
	}
	var current = this.head;
	var previous = null;
	var found = false;
	while (current !== null && !found) {
		if (current.data === value) {
			found = true;
		} else {
			previous = current;
			current = current.next;

		}
	}
	//console.log(found,current,previous);
	if (found) {
		if (previous === null) {
			this.head = this.head.next;
		} else {
			previous.next = current.next;
		}
		//in C have delete operation for current node;
		return 1;
	} else {
		return -1;
	}
}

var ll = new LinkedList();
console.log("print empty list " + ll.print());
console.log("delete on empty list " + ll.delete(1));
console.log("delete with no parameter " + ll.delete());
console.log("insert with no parameter " + ll.insert());
ll.insert(9);
console.log("inserted 1 element " + ll.print());
ll.insert(15);
console.log("inserted another element " + ll.print());
ll.insert(12);
console.log("inserted another element " + ll.print());
ll.insert(3);
console.log("inserted another element " + ll.print());
console.log("delete with value not found " + ll.delete(1));
ll.delete(3);
console.log("deleted 1st element " + ll.print());
ll.delete(15);
console.log("deleted middle element " + ll.print());
ll.delete(9);
console.log("deleted last element " + ll.print());