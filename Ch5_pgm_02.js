// Breaking a function by changing a variable name
var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(msg);
};

showMessage();



// 1) Update the console.log so the program works.
console.log("");

// 2) Declare another message variable and assign it a value.
var newMsg = "Hello, universe!";

// 3) Display the new message as well as the old one.
console.log(msg); // Output: It's full of stars!
console.log(newMsg); // Output: Hello, universe!

// 4) Display a single message created by joining the two strings.
var combinedMsg = msg + " " + newMsg;
console.log(combinedMsg); // Output: It's full of stars! Hello, universe!




/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */