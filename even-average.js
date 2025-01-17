function findTheverageOfEvenNUmber (numbers){
    let theNewArray = [];
    for(number of numbers){
        if(number % 2 === 0){
            theNewArray.push(number)
        }
    }
    let sum = 0;
    for(number of theNewArray){
        sum = sum + number
    }
    const theLenght = theNewArray.length;
    const theAverage = sum / theLenght
    // console.log(sum, theLenght, theAverage)
    return theAverage
}

const theArray = [12, 16, 13, 17, 219, 46, 77, 49 , 40];
const evenAverage = findTheverageOfEvenNUmber(theArray);
console.log('find the average of the even NUmbers:', evenAverage)
