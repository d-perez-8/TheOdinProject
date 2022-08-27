const btns = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

// gets the value from the button
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        playRound(btn.value);
    })
});

function computerChoice() {
    const OUTCOMES = ['Rock', 'Paper', 'Scissors'];
    return OUTCOMES[Math.floor(Math.random() * OUTCOMES.length)];
}

function playRound(playerSelection, computerSelection = computerChoice()) {
    const results = document.querySelector('#results')

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
        (playerSelection == 'Paper' && computerSelection == 'Rock') || 
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {

        playerScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}. 
        Player: ${playerScore} Computer: ${computerScore}`;
            
            if (playerScore === 5) {
                results.textContent += " You win!";
            }

    } else if (playerSelection === computerSelection) {
        results.textContent = `You tie! ${playerSelection} draws ${computerSelection}. 
        Player: ${playerScore} Computer: ${computerScore}`;
    } else {
        computerScore++;
        results.textContent = `You lose! ${playerSelection} loses to ${computerSelection}. 
        Player: ${playerScore} Computer: ${computerScore}`;

            if (computerScore === 5) {
                results.textContent += " You lose!";
            }
    }
}