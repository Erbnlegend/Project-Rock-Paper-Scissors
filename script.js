// Rock Paper Scissors Game //

/*
Need to get input (Rock, Paper, Scissors) from AI
-Needs to be a random choice
-Store option

Need to get input (Rock, Paper, Scissors) from player
-Store option
-Needs to be a typed option
--Has to be an equivalent of rock, paper, scissors
-needs to accept any type of case (case insensitive)

Need to compare the options selected together

Need to know order of power (which option beats what?)

Output message to user on the results

//

Rock > Scissors
Rock < Paper

Paper > Rock
Paper < Scissors

Scissors > Paper
Scissors < Rock

//


*/

// Temp Selection
let playerSelection = prompt("Enter Rock, Paper or Scissors!");
    
let computerSelection = "Rock";

let playerWins = 0;
let compWins = 0;

// Start Game
function compareOptions(playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
//Check Player Wins
        if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerWins++
            console.log(`Player Wins! Player ${playerWins} ${compWins}`)
        } else if(playerSelection === "Paper" && computerSelection === "Rock") {
            playerWins++
            console.log(`Player Wins! Player ${playerWins} ${compWins}`)
        } else if(playerSelection === "Scissors" && computerSelection === "Paper") {
            playerWins++
            console.log(`Player Wins! Player ${playerWins} ${compWins}`)
// Computer Wins
        } else if(playerSelection === "Rock" && computerSelection === "Paper") {
            compWins++
            console.log(`Computer Wins! ${playerWins} ${compWins}`)
        } else if(playerSelection ==="Paper" && computerSelection === "Scissors") {
            compWins++
            console.log(`Computer Wins! ${playerWins} ${compWins}`)
        } else if(playerSelection === "Scissors" && computerSelection === "Rock") {
            compWins++
            console.log(`Computer Wins! ${playerWins} ${compWins}`)
        } else if (playerSelection === computerSelection)
            console.log(`No Contest! Try again! ${playerWins} ${compWins}`)
    }    
    return
}

compareOptions(playerSelection, computerSelection);




