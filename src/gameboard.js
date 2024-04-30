export class Gameboard {
    
    createBoard() {
        const matrix = [];
        for(let i = 0; i < 10; i++) {
            const row = new Array(10).fill(0);
            matrix.push(row);
        }
        console.log(matrix);
    }
}

const board = new Gameboard();
board.createBoard();