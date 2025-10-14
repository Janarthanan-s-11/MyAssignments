// Write a JavaScript program that reads a student's score and displays their grade using a switch statement.

let Score = 80

switch(true){
case(Score>90): console.log(`The Score is ${Score}, So Grade A`)
break;
case(Score>89): console.log(`The Score is ${Score}, So Grade B`)
break;
case(Score>79): console.log(`The Score is ${Score}, So Grade C`)
break;
case(Score>69): console.log(`The Score is ${Score}, So Grade D`)
break;
case(Score>59): console.log(`The Score is ${Score}, So Grade E`)
break;
case(Score>50): console.log(`The Score is ${Score}, So Grade F`)
break;

default: console.log(`The Score is ${Score}, He/She got another chances`)
    break;


}

// switch (true) allows each case to be a boolean expression.
// When a case expression evaluates to true, it matches and executes.