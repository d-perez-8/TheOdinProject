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

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = prompt("Enter choice: \n(Rock, Paper, Scissors)");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Rock loses to Paper.";
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "Tie! You both picked rock.";

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Paper loses to scissors.";
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "Tie! You both picked paper.";
    
    } else if (playerSelection == '[scissors]' && computerSelection == 'paper') {
        return "You win! Scissors beats paper.";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Scissors loses to rock.";
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return "Tie! You both picked scissors.";

    } else {
        return "Please enter a valid answer. \n(Rock, Paper, Scissors)";
    }
}

console.log(playRound());