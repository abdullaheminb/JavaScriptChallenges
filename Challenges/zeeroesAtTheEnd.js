//Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

numbers = [1, 2, 0, 0, 4, 0, 6];
i=numbers.length-1;
for(let number=numbers.length-1; number>=0; number--){
    if(numbers[number]===0){
        numbers.splice(i,1);
        numbers.push(0);
    }
    i--
}

console.log(numbers);