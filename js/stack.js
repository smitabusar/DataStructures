var Node = function(value, next) {
	this.data = value;
	this.next = next;
}

var Stack = function() {
	this.top = null;
}

//prints [1 , 2 , 3]
Stack.prototype.print = function() {
	var temp = this.top;
	var result = "[";
	while (temp != null) {
		result += (temp.next !== null) ? (temp.data + " , ") : (temp.data);
		temp = temp.next;
	}
	result += "]";
	return result;
}

//inserts value at top
Stack.prototype.push = function(value) {
	if (value === undefined) {
		return -2;
	}
	var next = this.top;
	this.top = new Node(value, next);
	//console.log(this.top);
}

//deletes from top else return "underflow"
Stack.prototype.pop = function(callback) {
	var errorMsg = "",
		data;
	if (this.top === null) {
		errorMsg = "Underflow";
	} else {
		var temp = this.top;
		data = temp.data;
		this.top = temp.next;
	}
	callback(errorMsg, data);
}

//function given as input to pop
function show(error, data) {
	if (error === "Underflow") {
		console.log("list is empty");
	} else {
		console.log(data + " from " + stack.print());
	}
}

var stack = new Stack();
console.log("print empty list " + stack.print());
console.log("push with no parameter " + stack.push());
stack.push(12);
stack.push(3);
stack.push(6);
console.log("pushed another element " + stack.print());
stack.pop(show);
stack.pop(show);
stack.pop(show);
stack.pop(show);