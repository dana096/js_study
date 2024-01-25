const value = 'hello!';

function myfunction() {
	console.log('myfunction: ');
	console.log(value);
}

function otherfunction() {
	console.log('otherfunction: ');
	const value = 'bye!';
	console.log(value);
}

myfunction();
otherfunction();

console.log('global scope: ');
console.log(value);
