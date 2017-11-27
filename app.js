var size = 0;
// 1. Receive posts
function postMessage() {
	console.log(document.getElementById("postedMessage").value);
	if (size < 8) {
		createMessage();
	}
	document.getElementById("form").reset();
	
}

// 2. Create new post with previous value
function createMessage () {
	var listItem = document.createElement("li");
	var node = document.createTextNode(document.getElementById("postedMessage").value);
	listItem.appendChild(node);

	var element = document.getElementById("divNewMessages");
	element.appendChild(listItem);
	
	listItem.classList.add('Messages');
	
	size++;
}


// 3. Like/Echo Function

