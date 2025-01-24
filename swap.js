/* to swap the value with the 'temp'-it means it is possible to restor the value in the temp */

let a = 5;
let b = 9;

const temp = a;
a = b;
b = temp;
console.log(a, b)

/* destructering method */

let x = 5
let y = 10;
console.log(x, y)

[x, y] = [y, x]
console.log(x, y)