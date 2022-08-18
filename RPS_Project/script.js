// create random number function
function getRandomInt(max = 3) {
    return Math.floor(Math.random() * max)
}

// create output function
function getComputerChoice() {
    // assign numbers to output
    if (getRandomInt() == 0) {
        return "rock";
    } if (getRandomInt() == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Rock loses to Paper.";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "Tie!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))