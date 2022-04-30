function computerPlay(){
    a = Math.random()*3;
    a = Math.floor(a);
    let computerResult;
    if (a === 0){
        computerResult = "Rock";
    }
    else if (a === 1){
        computerResult = "Paper";
    }
    else if (a === 2){
        computerResult = "Scissors";
    }
    else{
        computerResult = "Error";
    }
    return(computerResult);
}



let playerInput = prompt("Rock, Paper or Scissors?");
playerInput = playerInput.toLowerCase();
playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);


function playGame(playerSelection, computerSelection){
    const r = "Rock";
    const p = "Paper";
    const s = "Scissors";

    if (playerSelection === r ){
        if (computerSelection === r){
            return("Tie!");
        }
        else if (computerSelection === p){
            return("Paper beats Rock, you lose!");
        }
        else{
            return("Rock beats Scissors, you win!");
        }
    }
    else if (playerSelection === p){
        if (computerSelection === r){
            return("Paper beats Rock, you win!");
        }
        else if (computerSelection === p){
            return("Tie!");
        }
        else{
            return("Scissors beats Paper, you lose!");
        }
    }
    else if (playerSelection === s){
        if (computerSelection === r){
            return("Rock beats Scissors, you lose!");
        }
        else if (computerSelection === p){
            return("Scissors beats Paper, you win!");
        }
        else {
            return("Tie!");
        }
    }
    else{
        return("Error! " + playerSelection + " is not a valid input!");
    }
}

console.log(playGame(playerInput, computerPlay()));
