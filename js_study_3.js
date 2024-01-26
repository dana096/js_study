// function scope
function varTest() {
	var x = 1;
}
console.log(x);

// no block scope
if (true) {
	var x = 10;
}
console.log(x);
