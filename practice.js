/* Task - 1
Write a function to convert teperatur from celsius to farenhite */

const x = 12.4509876;
const convert = x.toFixed(2); /* if want restrict the digit after dot-then i need to use the desired number in the bracket. this toFIxed method make the number string */
const add = 5 + x.toFixed(2) /* here result is shown 512.45, because 5 is absolute number and x.toFixed is string. so it that is why it does not do add function */
const conversedAdd = 5 + parseInt(convert) /* now i have converted the string to integer and add it */
console.log(conversedAdd);

/* isNan - it menas it is 'not a number' and the it is also not possible to convert into a number. it also check the it is possible to convert into a number

console.log(isNaN(29)); - flase - it is a number
console.log(isNaN('29')); - flase as it is not a number,but it is possible to conver this into a number
console.log(isNaN('abc')); - true as it is not a number and not possible to conver into a number */

