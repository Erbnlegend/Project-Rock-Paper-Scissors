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

// Player Selection
function initGameSelection() {
    console.log("Started")
    let playerWins = 0;
    let compWins = 0;
    let computer = "Rock";
    initSelection();
// Get player selection and check to ensure it is acceptable
    function initSelection() { 
        let playerPrompt = prompt("Enter Rock, Paper or Scissors!");
        if(playerPrompt == "Rock" || playerPrompt == "Paper" || playerPrompt == "Scissors") {
            let player = playerPrompt;
            // Start Game comparaisons (Who wins??)
            function compareOptions(player, computer) {
                for (let i = 0; i < 5; i++) {
                //Check Player Wins
                if (player === "Rock" && computer === "Scissors") {
                    playerWins++
                    console.log(`Player Wins! Player ${playerWins} ${compWins}`)
                    initSelection()
                } else if(player === "Paper" && computer === "Rock") {
                    playerWins++
                    console.log(`Player Wins! Player ${playerWins} ${compWins}`)
                    initSelection()
                } else if(player === "Scissors" && computer === "Paper") {
                    playerWins++
                    console.log(`Player Wins! Player ${playerWins} ${compWins}`)
                    initSelection()
                // Computer Wins
                } else if(player === "Rock" && computer === "Paper") {
                    compWins++
                    console.log(`Computer Wins! ${playerWins} ${compWins}`)
                    initSelection()
                } else if(player ==="Paper" && computer === "Scissors") {
                    compWins++
                    console.log(`Computer Wins! ${playerWins} ${compWins}`)
                    initSelection()
                } else if(player === "Scissors" && computer === "Rock") {
                    compWins++
                    console.log(`Computer Wins! ${playerWins} ${compWins}`)
                    initSelection()
                } else if (player === computer) {
                    console.log(`No Contest! Try again! ${playerWins} ${compWins}`)
                    initSelection()
                }
            }    
        }
        compareOptions(player, computer);
        } else {
            console.log("Did you not listen?? Re-enter option please!")
            initSelection()
        }
    
    }
}
initGameSelection();






