// Assignment Details:
// Write a JavaScript program named numberType that takes a number and displays whether it is positive, negative, or zero.

let number = 1

switch(true){
case (number==0): console.log(`The number is ${number}, so it is Zero`)
break;
case (number>0): console.log(`The number is ${number}, so it is Positive`)
break;
default : console.log(`The number is ${number}, so it is Negative`)
break;
}