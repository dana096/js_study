const foo = ["one", "two", "three"];
const [one, two, three] = foo;
console.log(one, two, three);

let a, b;
[a, b] = [1, 2];
console.log(a, b);

const [a = 5, b = 7, c = 9] = [1, null];
console.log(a, b, c);
