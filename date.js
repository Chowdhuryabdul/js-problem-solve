/* to find today's date */
const todaysDate = new Date();
// console.log(todaysDate)

const today = new Date ('2062-10-19')
console.log(today.getMonth())
console.log(today.getDay())
const specificDate = new Date(2091, 0, 26)
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'))

/* unix epoc which is used to compare in between of two times */