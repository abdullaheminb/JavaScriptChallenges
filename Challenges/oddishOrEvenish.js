//Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits 
//is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, 
//return "Evenish".

inputNumber = 11233;
shadowNumber = inputNumber;
digitsInNumber = []
sum = 0;
function getLastDigit(num){
    return num % 10;
}

function decreaseNumber(num){
    return Math.floor(num/10);
}

do{
    digitsInNumber.push(getLastDigit(shadowNumber));
    shadowNumber = decreaseNumber(shadowNumber);
}while (shadowNumber >= 1)

digitsInNumber.forEach(element => {
    sum += element;
});

if(sum % 2 === 0){
    console.log("Evenish");
}

else{
    console.log("Oddish");
}
