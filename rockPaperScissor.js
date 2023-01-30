// Get users choice
const usersChoice = "Rock";

// Determine a random number between 0,1,2.
let computersRandom = Math.floor(Math.random()*3);

// Designate which number gets to which choice for computer.
function determineComputerMove(random){
    if(computersRandom === 0){
        random = "Rock";
    }

    else if(computersRandom === 1){
        random = "Paper";
    }

    else if(computersRandom === 2){
        random = "Scissor";
    }
    return random;
}

//get computers choice.
let computersChoice = determineComputerMove(computersRandom);

//determine who won
function whoWon(computer, human){
    if (computer == human){
        return console.log("Its a tie!!!");
    }

    else if( computer == "Rock" && human == "Scissor"){
        console.log("Computer won");
        return computer;
    }

    else if( computer == "Rock" && human == "Paper"){
        console.log("Human won");
        return human;
    }

    else if( computer == "Paper" && human == "Rock"){
        console.log("Computer won"); 
        return computer;
    }

    else if( computer == "Paper" && human == "Scissor"){
        console.log("Human won");
        return human;
    }

    else if( computer == "Scissor" && human == "Paper"){
        console.log("Computer won"); 
        return computer;
    }

    else if( computer == "Scissor" && human == "Rock"){
        console.log("Human won");
        return human;
    }
}

console.log("User have dealed " + usersChoice + " and Computer have dealed " + computersChoice);
whoWon(computersChoice, usersChoice);