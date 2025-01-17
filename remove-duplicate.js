function noDuplicate(array){
    let vacantArray =[]
    for(const item of array){
        if(vacantArray.includes(item) === false ){
            vacantArray.push(item);
        }
    }
    return vacantArray
}

const theUniqueArray = ['abul', 'babul', 'cabul', 'abul', 'babul', 'kabul', 'bulbul', 'cabul', 'jabul', 'bulbul' ]
const theArray = noDuplicate(theUniqueArray)
// console.log(theArray)

function noDuplicateInAString(string){
    let theVacantArray = []
    for(let i = 0; i < string.length; i ++){
        if(theVacantArray.includes(string[i]) === false){
            theVacantArray.push(string[i])
        }
       
    }
    return theVacantArray
}

const theString = noDuplicateInAString('I am Abdul Quaiyum')
console.log(theString)