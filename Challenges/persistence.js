//The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits 
//until n becomes a single digit integer.

//The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of 
//its digits until n becomes a single digit integer.

//Create two functions that take an integer as an argument and:

//Return its additive persistence.
//Return its multiplicative persistence.

const inputNumber = 1287643;
let shadowNumber = inputNumber;
let shadowNumberC = inputNumber;
let digitsInNumber = []
let sum = 0;
let result = 0;
let resultC = 1;

function getLastDigit(num){
    return num % 10;
}

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

    digitsInNumber = [];
    shadowNumber = result;
    result = 0;
}while (shadowNumber >= 10)

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

console.log("Cumulative is = " + shadowNumberC);

console.log("Additive is = " + shadowNumber);