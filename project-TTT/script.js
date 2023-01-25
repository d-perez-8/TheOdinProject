// GOAL: Write as little global code as possible

// Store the gameboard as an array inside of a Gameboard object (module)
const Gameboard = (() => {
    let gameboardArray = ['', '', '', '', '', '', '', '', ''];
    const gameboard = document.querySelector('gameboard');
    const cells = Array.from(document.querySelector('.gameTile'))
    let winner = null;

    const getGameboard = () => {
        gameboardArray.forEach((playerSign, index) => {
            cells[index].textContent = gameboardArray[index];
        });
    };

    const clearBoard = () => {
        gameboardArray = ['', '', '', '', '', '', '', '', ''];
    };
});

// Store players in objects (factory)
const playerFactory = (playerName, playerSign) => {
    const playTurn = (Gameboard, cell) => {
        const idx = Gameboard.cells.findIndex(position => position === cell);
        if (Gameboard.gameboard[index] === '') {
            Gameboard.getGameboard();
            return index;
        }
        return null;
    }

    return {playerName, playerSign, playTurn}
};


// Create an object to control the flow of the game itself