//The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits 
//until n becomes a single digit integer.

//The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of 
//its digits until n becomes a single digit integer.

//Create two functions that take an integer as an argument and:

//Return its additive persistence.
//Return its multiplicative persistence.

//I kept given number as constant so I will always have a chance to reach to it.
const inputNumber = 1287643;

//will use this at additive
let shadowNumber = inputNumber;

//will use this at multiplicative
let shadowNumberC = inputNumber;

//this is for storing the digits
let digitsInNumber = []

//this is for storing the result for additive
let result = 0;

//this is for storing the result for multiplicative
let resultC = 1;

//this function helps me to get last digit
function getLastDigit(num){
    return num % 10;
}

//this function helps me to decrease the number
function decreaseNumber(num){
    return Math.floor(num/10);
}

//Additive
do{
    //get the digits in an array
    do{
        digitsInNumber.push(getLastDigit(shadowNumber));
        shadowNumber = decreaseNumber(shadowNumber);
    }while (shadowNumber >= 1)

    //sum all the numbers in array
    digitsInNumber.forEach(digit => {
        result += digit
    });

    //clearing digits array so it wont mix with previous result
    digitsInNumber = [];
    
    //turning result into new number
    shadowNumber = result;
    
    //cleaning the result
    result = 0;
}while (shadowNumber >= 10)

//pretty much same thing. Instead of adding all the numbers in array I am multiplicating in here.
do{
    //get the digits in an array
    do{
        digitsInNumber.push(getLastDigit(shadowNumberC));
        shadowNumberC = decreaseNumber(shadowNumberC);
    }while (shadowNumberC >= 1)
    console.log(digitsInNumber);
    //sum all the numbers in array
    digitsInNumber.forEach(digit => {
        resultC *= digit
    });

    digitsInNumber = [];
    shadowNumberC = resultC;
    resultC = 0;
}while (shadowNumberC >= 10)


//print result to console.
console.log("Cumulative is = " + shadowNumberC);

console.log("Additive is = " + shadowNumber);