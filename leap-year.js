/* if the year is dibisible by 4 then it will be lear year */

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}
const theCheckingYear = isLeapYear(2024);
console.log(theCheckingYear)

/* 1. those year is not divisible by 100; if the year is divisible by 4, then it will be lear year 
   2. if the year is divisible by 400, then it is a leaf year
   3. else it is not leaf year
*/

function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }else if(year % 100 === 0 && year % 400 === 0){
        return true
    }else{
        return false
    }
}

const isLeap = isLeapYear(2100)
const isLeap1 = isLeapYear(2400)
const isLeap2 = isLeapYear(1900)
const isLeap3 = isLeapYear(2052)
console.log(isLeap, isLeap1, isLeap3, isLeap2)