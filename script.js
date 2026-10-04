console.log("hello!");
function getComputerChoice(){
    let random = Math.random();
    return random < 1/3 ? "rock" : random <2/3 ? "paper":"scissors";
    
}
console.log(getComputerChoice());
function getHumanChoice(){
   return prompt("Enter a choice:Rock, Paper, Scissors");
    
}
console.log("human Choice: "+getHumanChoice());

function playGame(){



let humanScore = 0;
let  computerScore = 0;
function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice=== computerChoice){
        console.log("It's a TIE!");

    }

    else if(
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper")
     ){
        console.log("Human wins");
        humanScore++;
     }
     else {
        console.log("computer wins");
        computerScore++;
     }
    
}
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection,computerSelection);
console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);
 if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}
playGame();