function fun1() {
        console.log(arguments);
}
function fun2(...theArgs) {
        console.log(theArgs);
	console.log(theArgs.sort());
}
console.log(fun1(2, 6, 4));
console.log(fun2(2, 6, 4));
