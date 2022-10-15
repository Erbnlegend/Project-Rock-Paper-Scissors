// Rock Paper Scissors Game //

/*
Need to get input (Rock, Paper, Scissors) from AI
-Needs to be a random choice
-Store option

Need to get input (Rock, Paper, Scissors) from player
-Store option
--Has to be an equivalent of rock, paper, scissors

Need to compare the options selected together

Need to know order of power (which option beats what?)

Output message to user on the results

// Logic
Rock > Scissors
Rock < Paper

Paper > Rock
Paper < Scissors

Scissors > Paper
Scissors < Rock

*/

// Rock Paper Scissors!!!!

const playerOptions = ["Rock", "Paper", "Scissors"];
const buttonImages = ['src/images/alpine-landscape-rock-rubble-01g-al1.png', 'src/images/paper.png', 'src/images/scissors_01.png']
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
let playerImage = "";
let computerImage = "";

// Load buttons on page

const buildButtons = () => {
    for(let i = 0; i < playerOptions.length; i++) {
        const createImg = document.createElement('img');
        createImg.setAttribute('class', 'button');
        createImg.setAttribute('id', playerOptions[i]);
        createImg.setAttribute('src', buttonImages[i]);
        createImg.setAttribute('alt', `${playerOptions[i]}`);
        // add image based on id
        parentButtons.appendChild(createImg);
    }
}
buildButtons()

// Build Round on page
const buildChoices = () => {
    setTimeout(() => {
        updateRound.textContent = `Round: ${round}!`;
        const loadImagePlayer = document.createElement('img');
        const loadImageComputer = document.createElement('img');
        // Load Image for Player Selection
        loadImagePlayer.setAttribute('src', playerImage);
        loadImagePlayer.setAttribute('class', 'choiceImage');
        updatePlayerChoice.appendChild(loadImagePlayer);
        // Load Image for Computer Selection
        loadImageComputer.setAttribute('src', computerImage);
        loadImageComputer.setAttribute('class', 'choiceImage');
        updateComputerChoice.appendChild(loadImageComputer);
        compareSelections();
        updatePlayerWins.textContent = `Player Wins: ${playerWins}`;
        updateComputerWins.textContent = `Computer Wins: ${compWins}`;
    }, 500);
}

// Check Selections to find winner
const compareSelections = () => {
    // Player Wins
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
    const remove = updateComputerChoice.childNodes;
    // Removing always shrinks array so index must always be 0
    while(remove.length > 0) {
        remove[0].parentNode.removeChild(remove[0]);
    }
    let computerMath = Math.floor(Math.random() * number);
    computer = computerOptions[computerMath];
    computerImage = buttonImages[computerMath]
}

// Events functions
const clickButton = (e) => {
    computerDecision(computerOptions.length);
    const remove = updatePlayerChoice.childNodes;
    // Removing always shrinks array so index must always be 0
    while(remove.length > 0) {
        remove[0].parentNode.removeChild(remove[0]);
    }
    player = e.target.id
    playerImage = e.target.src;
    buildChoices();
}

const events = (e) => {
    for(let i = 0; i < playerOptions.length; i++) {
        const clickedId = document.getElementById(playerOptions[i]);
        clickedId.addEventListener('click', clickButton);
    }
}
events();