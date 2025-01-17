function findTheAverageOfOddNumber(number){
    
    let extraArray = [];
    for(let i = 0; i < number.length; i++){
        if(number[i] % 2 === 1){
            extraArray.push(number[i])
        }
    }
    let sum = 0;
    for(number of extraArray){
        sum = sum + number
    }
    const theNumberLenght = extraArray.length
    const average = sum / theNumberLenght
    // console.log(sum, average) 
    return average
    
}
const theArray = findTheAverageOfOddNumber ([12, 13, 14, 15, 16, 17, 18,19,20]);
console.log(theArray)
