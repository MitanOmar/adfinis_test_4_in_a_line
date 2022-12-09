export function isAllElementAreEqual(myArray) {
    if (myArray.length === 0) return false;
    return myArray.every((el) => el !== undefined && el !== 0 && el === myArray[0]);
}
export function isThere4ElementsNextToEachOther(givenArray) {
    if (givenArray.length < 4) return false;
    for (let i = 0; i < givenArray.length - 3; i++) {
        // get the next 4 element in the array
        const slicedArray = givenArray.slice(i, i + 4);
        if (isAllElementAreEqual(slicedArray)) {
            return true;
        }
    }
    return false;
}

export function isPointExistInBoard(board, row, column) {
    return board[row] !== undefined && board[row][column] !== undefined;
}
export class GameState {
    isFirstPlayer = true;
    gameBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

    switchPlayer() {
        this.isFirstPlayer = !this.isFirstPlayer;
    }
    constructor(gameBoard = null) {
        if (gameBoard !== null) {
            this.gameBoard = gameBoard;
        }
    }
    canInsertInThisColumn (columnNumber) {
        return this.gameBoard[0][columnNumber] === 0;
    }
    isThere4ElementsNextToEachOther(givenArray) {
        return isThere4ElementsNextToEachOther(givenArray);
    }
    isPointExistInBoard(board, row, column) {
        return isPointExistInBoard(board, row, column);
    }
    checkWinnerInRow() {
        for (const row of this.gameBoard) {
            if (this.isThere4ElementsNextToEachOther(row)) {
                return true;
            }
        }
        return false;
    }
    checkWinnerInColumn() {
        const columns = this.gameBoard[0].length;
        for (let i = 0; i < columns; i++) {
            const columnValues = this.gameBoard.map((row) => row[i]);
            if (this.isThere4ElementsNextToEachOther(columnValues)) {
                return true;
            }
        }
        return false;
    }
    checkWinnerInXDirection() {
        const gameRows = this.gameBoard.length;
        const gameColumn = this.gameBoard[0].length;
        // start the first part
        for (let i = 0; i < gameRows; i++) {
            let startPoint = [i, 0]; // [x, y]
            const elementInThisLine = [];
            while (this.isPointExistInBoard(this.gameBoard, startPoint[0], startPoint[1])) {
                elementInThisLine.push(this.gameBoard[startPoint[0]][startPoint[1]])
                startPoint[0]++;
                startPoint[1]++;
            }
            if (this.isThere4ElementsNextToEachOther(elementInThisLine)) {
                return true;
            }
        }
        // then the second part
        for (let i = 0; i < gameColumn; i++) {
            let startPoint = [0, i]; // [x, y]
            const elementInThisLine = [];
            while (this.isPointExistInBoard(this.gameBoard, startPoint[0], startPoint[1])) {
                elementInThisLine.push(this.gameBoard[startPoint[0]][startPoint[1]])
                startPoint[0]++;
                startPoint[1]++;
            }
            if (this.isThere4ElementsNextToEachOther(elementInThisLine)) {
                return true;
            }
        }
        return false;
    }
    checkWinnerInYDirection() {
        const gameRows = this.gameBoard.length;
        const gameColumn = this.gameBoard[0].length;
        // start the first part
        for (let i = gameRows -1; i >= 0; i--) {
            let startPoint = [i, 0]; // [x, y]
            const elementInThisLine = [];
            while (this.isPointExistInBoard(this.gameBoard, startPoint[0], startPoint[1])) {
                elementInThisLine.push(this.gameBoard[startPoint[1]][startPoint[0]])
                startPoint[0]--;
                startPoint[1]++;
            }
            if (this.isThere4ElementsNextToEachOther(elementInThisLine)) {
                return true;
            }
        }
        // then the second part
        for (let i = 0; i < gameColumn -1; i++) {
            let startPoint = [gameRows -1, i]; // [x, y]
            const elementInThisLine = [];
            while (this.isPointExistInBoard(this.gameBoard, startPoint[0], startPoint[1])) {
                elementInThisLine.push(this.gameBoard[startPoint[0]][startPoint[1]])
                startPoint[0]--;
                startPoint[1]++;
            }
            if (this.isThere4ElementsNextToEachOther(elementInThisLine)) {
                return true;
            }
        }
        return false;
    }
    isThereWinner() {
        return this.checkWinnerInColumn() ||
            this.checkWinnerInRow() ||
            this.checkWinnerInXDirection() ||
            this.checkWinnerInYDirection();
    }
}
