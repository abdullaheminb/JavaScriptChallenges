// Challenge: Determine, given that the human plays always the same hand what will be the ratio of winning
// in 100 game of Rock Paper and Scissor

//Algorithm:
// 1- Get users choice
// 2- Run a while loop Determine computer choice and record the time human won
// 3- divide it to 100

humanWonCount = 0;
playTime = 220;
// Get users choice
const usersChoice = "Rock";

//determine who won
function humanWon(computer, human){
    if (computer == human){
        return 0;
    }

    else if( computer == "Rock" && human == "Scissor"){
        return 0;
    }

    else if( computer == "Rock" && human == "Paper"){
        return 1;
    }

    else if( computer == "Paper" && human == "Rock"){
        return 0;
    }

    else if( computer == "Paper" && human == "Scissor"){
        return 1;
    }

    else if( computer == "Scissor" && human == "Paper"){
        return 0;
    }

    else if( computer == "Scissor" && human == "Rock"){
        return 1;
    }
}//humanWon

// Designate which number gets to which choice for computer.
function determineComputerMove(){
    // Determine a random number between 0,1,2.
    let computersRandom = Math.floor(Math.random()*3);

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


i=0;
while (i<=playTime){
    

    //get computers choice.
    let computersChoice = determineComputerMove();

    //determine who won
    humanWonCount += humanWon(computersChoice, usersChoice);
    i++
    
}//while loop

let percentAmount = humanWonCount / (playTime / 100)

console.log("Human won " + humanWonCount + " out of " + playTime + " times. Which comes to roughly " + percentAmount + "%");


