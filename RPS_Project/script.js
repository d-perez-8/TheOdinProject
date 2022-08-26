const choices = document.querySelectorAll('button');

// gets the value from the button
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        const choiceName= choice.value;
        playRound(choiceName);
    })
});


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
    let computerScore = 0;
    let playerScore = 0;

    // logic for rock
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose! Rock loses to Paper.";
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "Tie! You both picked rock.";

    // logic for paper
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You win! Paper beats rock.";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return "You lose! Paper loses to scissors.";
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "Tie! You both picked paper.";
    
    // logic for scissors
    } else if (playerSelection == '[scissors]' && computerSelection == 'paper') {
        playerScore++;
        return "You win! Scissors beats paper.";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return "You lose! Scissors loses to rock.";
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return "Tie! You both picked scissors.";

    // unexpected user answer
    } else {
        return "Please enter a valid answer. \n(Rock, Paper, Scissors)";
    }    
}


// plays five games and keeps score
function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    } if (playerScore > computerScore) {
        return "Congrats! You win!";
    } else if (playerScore < computerScore){
        "Unlucky, you lose."
    } else {
        return "It's a tie!";
    }
}

// console.log(game());