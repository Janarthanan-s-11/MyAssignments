
// Write a JavaScript program that:
//  Decides which browser to launch using if-else statements.
//  Chooses which set of tests to run using a switch statement.

let Chrome = "Chrome"
let Browser = "Chrome"

if(Browser==Chrome){
console.log(`Successfully launched ${Chrome} browser `)

}else{
    console.log(`Successfully launched default browser`)
}

console.log('------------------------------------------------')

let testplan = "Regression"


switch (testplan) {
    case 'Smoke': console.log(`Testplan is ${testplan}, so execute Smoke`)
        
        break;

    case 'Regression': console.log(`Testplan is ${testplan}, so execute Regression`)
        break;    

    default: console.log(`Execute Feature Test Plan`)
        break;
}


