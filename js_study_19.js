let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a, b);

function f() {
	return [1, 2, 3];
}
const [a, , b] = f();
console.log(a, b);

let a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest);
