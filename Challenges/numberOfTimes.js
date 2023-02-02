//36. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array

//Test Data :
//console.log(array_filled(6, 0));
//[0, 0, 0, 0, 0, 0]
//console.log(array_filled(4, 11));
//[11, 11, 11, 11]
theResult = []
function arrayFilled(time, num){
    for(repeat = 0; repeat<time; repeat++){
        theResult.push(num);
    }
    return theResult;
}

console.log(arrayFilled(4,11));