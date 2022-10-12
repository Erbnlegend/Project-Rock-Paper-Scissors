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

// New Interactive Game

const playerOptions = ["Rock", "Paper", "Scissors"];
const computerOptions = ["Rock", "Paper", "Scissors"];
const parentButtons = document.querySelector('.buttons');

// Updated on choice
const updateRound = document.getElementById('roundCounter');
const updatePlayerChoice = document.getElementById('player');
const updateComputerChoice = document.getElementById('computer');
const updateWinner = document.getElementById('winner');
const updatePlayerWins = document.getElementById('playerWins');
const updateComputerWins = document.getElementById('computerWins');

// Init wins and rounds
let playerWins = 0;
let compWins = 0;
let round = 1;
let aTie = false;
let player = "";
let computer = "";
let winner = "";

// Load buttons on page

const buildButtons = () => {
    for(let i = 0; i < playerOptions.length; i++) {
        const createDiv = document.createElement('div');
        createDiv.setAttribute('class', 'button');
        createDiv.setAttribute('id', playerOptions[i]);
        createDiv.textContent = playerOptions[i];
        parentButtons.appendChild(createDiv);
    }
}
buildButtons()

// Build Round on page
const buildChoices = () => {
    setTimeout(() => {
        updateRound.textContent = `Round: ${round}!`;
        updatePlayerChoice.textContent = `Player Choice: ${player}`;
        updateComputerChoice.textContent = `Computer Choice: ${computer}`;
        compareSelections();
        updatePlayerWins.textContent = `Player Wins: ${playerWins}`;
        updateComputerWins.textContent = `Computer Wins: ${compWins}`;
    }, 500);
}

// Check Selections to find winner

const compareSelections = () => {
    //Check Player Wins
    if (player === "Rock" && computer === "Scissors") {
        playerWins++;
        winner = "Player";
        updateWinner.textContent = `${winner} Wins!`;
        round++;

    } else if(player === "Paper" && computer === "Rock") {
        playerWins++;
        winner = "Player";
        updateWinner.textContent = `${winner} Wins!`;
        round++;

    } else if(player === "Scissors" && computer === "Paper") {
        playerWins++;
        winner = "Player";
        updateWinner.textContent = `${winner} Wins!`;
        round++;

    // Computer Wins
    } else if(player === "Rock" && computer === "Paper") {
        compWins++;
        winner = "Computer";
        updateWinner.textContent = `${winner} Wins!`;
        round++;

    } else if(player ==="Paper" && computer === "Scissors") {
        compWins++;
        winner = "Computer";
        updateWinner.textContent = `${winner} Wins!`;
        round++;

    } else if(player === "Scissors" && computer === "Rock") {
        compWins++;
        winner = "Computer";
        updateWinner.textContent = `${winner} Wins!`;
        round++;
    // TIE!
    } else if (player === computer) {
        winner = "It's a tie!";
        updateWinner.textContent = winner;
    } else {
        updateWinner.textContent = `Oops! Something happened`;
    }
}

// This makes the computer make a choice
const computerDecision = (number) => {
    let computerMath = Math.floor(Math.random() * number);
    computer = computerOptions[computerMath];
}

// Events functions

const clickButton = (e) => {
    computerDecision(computerOptions.length);
    player = e.target.id;
    buildChoices();
}

const events = (e) => {
    for(let i = 0; i < playerOptions.length; i++) {
        const clickedId = document.getElementById(playerOptions[i]);
        clickedId.addEventListener('click', clickButton);
    }
}
events();


// Old Console Game
// Make sure Everything Loads (Chrome!)
// window.onload = (event) => {
//     initGameSelection();
// };

// // Player Selection
// function initGameSelection() {
//     console.log("Started");
//     let playerWins = 0;
//     let compWins = 0;
//     let computerChoice = "";
//     let aTie = false;
    
// // Get player selection and check to ensure it is acceptable
//     for(let i = 0; i < 5; i++) {
//         let computerOptions = ["rock", "paper", "scissors"];
//         // Call for computer to make a choice
//         computerDecision(computerOptions.length);

//         // Computer Makes a choice!
//         function computerDecision(number) {
//             let computerMath = Math.floor(Math.random() * number);
//             return computerChoice = computerOptions[computerMath];
//         };
//         // Now We Have a random computer play
//         computerDecision(computerOptions.length);
//         initSelection();
//         if(aTie === true) {
//             if(i > 0) i--;
//             aTie = false;
//         }
//         console.log(`Round ${i + 1}`);
//     }
//     // Main Logic to determine who wins. Is a computer a whom?
//     function initSelection() {
//         let playerPrompt = prompt("Enter Rock, Paper or Scissors!");
//         let playerChoice = playerPrompt.toLowerCase();
//         console.log(playerChoice);
//         if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
//             let player = playerChoice;
//             console.log(`Computer chose ${computerChoice}!`);
//             // Start Game comparaisons (Who?? wins??)
//             function compareSelections(player, computerChoice) {
//                 //Check Player Wins
//                 if (player === "rock" && computerChoice === "scissors") {
//                     playerWins++;
//                     console.log(`Player Wins! Player:${playerWins} Computer:${compWins}`);

//                 } else if(player === "paper" && computerChoice === "rock") {
//                     playerWins++;
//                     console.log(`Player Wins! Player:${playerWins} Computer:${compWins}`);

//                 } else if(player === "scissors" && computerChoice === "paper") {
//                     playerWins++;
//                     console.log(`Player Wins! Player:${playerWins} Computer:${compWins}`);

//                 // Computer Wins
//                 } else if(player === "rock" && computerChoice === "paper") {
//                     compWins++;
//                     console.log(`Computer Wins! Player:${playerWins} Computer:${compWins}`);

//                 } else if(player ==="paper" && computerChoice === "scissors") {
//                     compWins++;
//                     console.log(`Computer Wins! Player:${playerWins} Computer:${compWins}`);

//                 } else if(player === "scissors" && computerChoice === "rock") {
//                     compWins++;
//                     console.log(`Computer Wins! Player:${playerWins} Computer:${compWins}`);
                    
//                 // TIE!
//                 } else if (player === computerChoice) {
//                     console.log(`No Contest! Try again! Player:${playerWins} Computer:${compWins}`);
//                     aTie = true;
//                 }
//             }
//             compareSelections(player, computerChoice)
//         } else {
//             console.log("Did you not listen?? Re-enter option please!");
//             aTie = true;
//         }
//     };
// };






