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

// Make sure Everything Loads (Chrome!)
window.onload = (event) => {
    initGameSelection();
};

// Player Selection
function initGameSelection() {
    console.log("Started");
    let playerWins = 0;
    let compWins = 0;
    let computerChoice = "";
    let aTie = false;
    
// Get player selection and check to ensure it is acceptable
    for(let i = 0; i < 4; i++) {
        let computerOptions = ["rock", "paper", "scissors"];
        // Call for computer to make a choice
        computerDecision(computerOptions.length);

        // Computer Makes a choice!
        function computerDecision(number) {
            let computerMath = Math.floor(Math.random() * number);
            return computerChoice = computerOptions[computerMath];
        };
        // Now We Have a random computer play
        computerDecision(computerOptions.length);
        initSelection();
        if(aTie === true) {
            if(i > 0) i--;
            aTie = false;
        }
        console.log(`Round ${i + 1}`);
    }
    function initSelection() {
        let playerPrompt = prompt("Enter Rock, Paper or Scissors!");
        let playerChoice = playerPrompt.toLowerCase();
        console.log(playerChoice)
        if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            let player = playerChoice;
            console.log(`Computer chose ${computerChoice}!`);
            // Start Game comparaisons (Who wins??)
            function compareSelections(player, computerChoice) {
                //Check Player Wins
                if (player === "rock" && computerChoice === "scissors") {
                    playerWins++;
                    console.log(`Player Wins! Player:${playerWins} Computer:${compWins}`);
                } else if(player === "paper" && computerChoice === "rock") {
                    playerWins++;
                    console.log(`Player Wins! Player:${playerWins} Computer:${compWins}`);
                } else if(player === "scissors" && computerChoice === "paper") {
                    playerWins++;
                    console.log(`Player Wins! Player:${playerWins} Computer:${compWins}`);
                // Computer Wins
                } else if(player === "rock" && computerChoice === "paper") {
                    compWins++;
                    console.log(`Computer Wins! Player:${playerWins} Computer:${compWins}`);
                } else if(player ==="paper" && computerChoice === "scissors") {
                    compWins++;
                    console.log(`Computer Wins! Player:${playerWins} Computer:${compWins}`);
                } else if(player === "scissors" && computerChoice === "rock") {
                    compWins++;
                    console.log(`Computer Wins! Player:${playerWins} Computer:${compWins}`);
                // TIE!
                } else if (player === computerChoice) {
                    console.log(`No Contest! Try again! Player:${playerWins} Computer:${compWins}`);
                    aTie = true;
                }
            }    
            compareSelections(player, computerChoice)
        } else {
            console.log("Did you not listen?? Re-enter option please!");
            aTie = true;
        }
    };
};






