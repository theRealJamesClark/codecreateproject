
var fireHeading = document.getElementById("fireHeading");
var firebaseHeadingRef = firebase.database().ref().child("Heading");
firebaseHeadingRef.on('value', function(data) {
	fireHeading.innerText = data.val();
}

// Page Loadup
function pageLoadUp() {
	// ??
	let reference = 0;
	while (reference < size) {
		loadItem(reference);
		reference++;
	}
}

function loadItem(reference) {
}

// New Message Functions
var size = 0;
var newMessage;
// 1. Receive posts
function postMessage() {
	newMessage = document.getElementById("postedMessage").value;
	console.log(newMessage);
	//createMessage();
	storeMessage();
	
	document.getElementById("form").reset();
}

// 2. Store in database
function storeMessage() {
	var firebaseRef = firebase.database().ref();
	firebaseRef.push().set(newMessage);
}
/*
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

*/