var numbr =4;
var message; /* this is assigned variable */

if(numbr > 5){
    message = 'bigger that 5'
}else{
    message = 'less that 5'
}

/* ternary */

message = numbr > 5 ? 'bigger that 5' : message = 'less that 5'
numbr > 5 ? console.log('bigger that 5') : console.log('less that 5')
console.log(message)