// GOAL: Write as little global code as possible

// Store the gameboard as an array inside of a Gameboard object (module)

const TicTacToe = (() => {
    let gameboardArray = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";
    let gameActive = true;

    let squares = document.querySelectorAll(".gameTile");
    let resetBtn = document.querySelector(".resetBtn");


    const makeMove = (() => {
        squares.forEach((square, index) => {
            square.addEventListener('click', () => {
                if (square[index]) {
                    console.log("Invalid move. Position is taken.")
                } else {
                    square.innerHTML = currentPlayer;
                    gameboardArray[index] = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    console.log(gameboardArray);
                    checkWinner();
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
                console.log(`Player ${gameboardArray[a]} Wins!`);
                gameActive = false;
                break;
            }
        }
    };


    const resetBoard = () => {
        gameboardArray = ['', '', '', '', '', '', '', '', ''];
        squares.forEach((square) => {
            square.innerHTML = ""
        })
    }
    resetBtn.addEventListener('click', resetBoard)

})();