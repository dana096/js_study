var v = 1;
function callSomething(thing = something()) {
        console.log(thing);
}
function something(){
			return v++;
}
// 실행
callSomething();
callSomething();
