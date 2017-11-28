
var nextItem;

// Page Loadup
function pageLoadUp() {
	
	var messageDb = firebase.database();
	var messageRef = messageDb.ref("Messages");
	messageRef.on("child_added", function(snapshot, prevChildKey) {
		nextItem = snapshot.val();
		createMessage();
		console.log(snapshot);
	});
}


// New Message Functions
var size = 0;
var newMessage;
// 1. Receive posts
function postMessage() {
	newMessage = document.getElementById("postedMessage").value;
	console.log(newMessage);
	storeMessage();
	
	document.getElementById("form").reset();
}

// 2. Store in database
function storeMessage() {
	var firebaseRef = firebase.database().ref("Messages");
	firebaseRef.push().set(newMessage);
}

// 3. Create new post with previous value
function createMessage () {

	var listItem = document.createElement("li");
	var node = document.createTextNode(nextItem);
	listItem.appendChild(node);

	var element = document.getElementById("divNewMessages");
	element.appendChild(listItem);
	
	listItem.classList.add('Messages');
	
	
	size++;
	

}