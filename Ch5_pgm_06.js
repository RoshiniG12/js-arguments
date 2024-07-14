// A function with two arguments

// A function with two arguments
var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

// Further Adventures

// 1) Use the showSum function to add 56 and 74.
showSum(56, 74);

// 2) Create a showProduct function to multiply two numbers.
var showProduct = function (number1, number2) {
	var product = number1 * number2;
	console.log("The product is " + product);
};

// 3) Use your function to multiply three pairs of numbers.
showProduct(5, 10);
showProduct(-3, 7);
showProduct(0, 100);

// 4) Create showDifference and showQuotient functions
var showDifference = function (number1, number2) {
	var difference = number1 - number2;
	console.log("The difference is " + difference);
};

var showQuotient = function (number1, number2) {
	if (number2 !== 0) {
		var quotient = number1 / number2;
		console.log("The quotient is " + quotient);
	} else {
		console.log("Cannot divide by zero.");
	}
};

// Test showDifference and showQuotient functions
showDifference(10, 5);
showDifference(0, 0);
showQuotient(20, 4);
showQuotient(10, 0);




/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */