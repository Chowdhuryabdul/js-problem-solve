function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const height = inchToFeet(122)
// console.log(height)

function inchToFeet1(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. '
    return result
}

const sadiaHeight = inchToFeet1(76)
// console.log(sadiaHeight)

function mileToKilometer(mile){
 const kilo = mile * 1.60934;
 return kilo; 
}

// console.log(mileToKilometer(12))
function kiloToMile(kilo){
    const mile = kilo * 0.9999975145;
    return mile;
}
// console.log(kiloToMile(12));

function kilogaramToGram(kilo){
    const gram = kilo * 1000;
    return gram
}
// console.log(kilogaramToGram(10))

function gramToKilo(gram){
    const kilo = gram / 1000;
    return kilo
}
console.log(gramToKilo(10000))