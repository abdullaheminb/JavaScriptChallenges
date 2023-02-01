//  Given a roman numeral, convert it to an integer.
//    Symbol        Value
//      I             1
//      V             5
//      X             10
//      L             50
//      C             100
//      D             500
//      M             1000

romenNumber = "MCMXCIV"
sum=0;

for(let letter=romenNumber.length-1; letter>=0; letter--){
    if(romenNumber[letter]=== "I"){
        sum += 1;
    }

    else if(romenNumber[letter]==="V"){
        if(romenNumber[letter-1]==="I"){
            sum+=4;
            letter--
        }
        else{
            sum += 5;
        }
    }

    else if(romenNumber[letter]==="X"){
        if(romenNumber[letter-1]==="I"){
            sum+=9;
            letter--
        }
        else{
            sum += 10;
        }
    }

    else if(romenNumber[letter]==="L"){
        if(romenNumber[letter-1]==="X"){
            sum+=40;
            letter--
        }
        else{
            sum += 50;
        }
    }

    else if(romenNumber[letter]==="C"){
        if(romenNumber[letter-1]==="X"){
            sum+=90;
            letter--
        }
        else{
            sum += 100;
        }
    }

    else if(romenNumber[letter]==="D"){
        if(romenNumber[letter-1]==="C"){
            sum+=400;
            letter--
        }
        else{
            sum += 500;
        }
    }

    else if(romenNumber[letter]==="M"){
        if(romenNumber[letter-1]==="C"){
            sum+=900;
            letter--
        }
        else{
            sum += 1000;
        }
    }
}

console.log(sum);