const btns = document.querySelectorAll('button');

function computerChoice() {
    const OUTCOMES = ['Rock', 'Paper', 'Scissors'];
    return OUTCOMES[Math.floor(Math.random() * OUTCOMES.length)];
}

// gets the value from the button
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const btnValue = btn.value;
        playRound(btnValue);
    })
});

// plays one round
function playRound(playerSelection, computerSelection = computerChoice()) {

    // logic for game
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
        (playerSelection == 'Paper' && computerSelection == 'Rock') || 
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {

        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);

    } else if (playerSelection === computerSelection) {
        console.log(`You tie! ${playerSelection} draws ${computerSelection}`);
    } else {
        console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
    }
}
/*
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
*/