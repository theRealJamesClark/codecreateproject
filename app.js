var size = 0;
// 1. Receive posts
function postMessage() {
	console.log(document.getElementById("postedMessage").value);
	if (size < 8) {
		createMessage();
	}
	
}

// 2. Create new post with previous value
function createMessage () {
	var para = document.createElement("p");
	var node = document.createTextNode(document.getElementById("postedMessage").value);
	para.appendChild(node);

	var element = document.getElementById("divNewMessages");
	element.appendChild(para);
	size++;
}




