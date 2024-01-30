const {a = 12, b = 5} = {a: 3};
console.log(a, b);

const {a:aa = 10, b:bb = 5} = {a: 3};
console.log(aa, bb);

const {a, b, ...rest} = {a: 10, b: 20, c:30, d:40};
console.log(a, b);
console.log(rest);
