// GOAL: Write as little global code as possible

// Store the gameboard as an array inside of a Gameboard object (module)

const TicTacToe = (() => {
    let gameboardArray = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";
    let gameActive = true;

    let squares = document.querySelectorAll(".gameTile");
    let resetBtn = document.querySelector(".resetBtn");
    let winner = document.querySelector(".winner");

    document.querySelector(".playerNameForm").addEventListener('submit', (event) => {
        event.preventDefault();

        const player1 = document.querySelector('#player1').value;
        const player2 = document.querySelector('#player2').value;
    })

    let currentPlayerName = player1.value;

    const makeMove = (() => {
        squares.forEach((square, index) => {
            square.addEventListener('click', () => {
                if (
                    gameActive && 
                    !gameboardArray[index] && 
                    player1.value !== "" &&
                    player2.value !== ""
                ) {
                    square.innerHTML = currentPlayer;
                    gameboardArray[index] = currentPlayer;
                    checkWinner();
                    if (gameActive) {
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                        currentPlayerName = currentPlayerName === player1.value ? player2.value : player1.value;
                        winner.innerHTML = `It is ${currentPlayerName} turn.`;

                    }
                } else {
                    console.log("Invalid move.");
                }
            })
        })
    })();

    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,9], [2,4,6]
    ];

    const checkWinner = () => {
        for (let i = 0; i < winPatterns.length; i++) {
            const [a,b,c] = winPatterns[i]
            if (
                gameboardArray[a] &&
                gameboardArray[a] === gameboardArray[b] &&
                gameboardArray[a] === gameboardArray[c]
            ) {
                winner.innerHTML = `${currentPlayerName} Wins!!!`;
                gameActive = false;
                break;
            }
        }
    };

    const resetBoard = (() => {
        resetBtn.addEventListener('click', () => {
            gameboardArray = ['', '', '', '', '', '', '', '', ''];
            squares.forEach((square) => {
                square.innerHTML = ""
            });
            winner.innerHTML = "";
            gameActive = true;
        })
    })();
})();