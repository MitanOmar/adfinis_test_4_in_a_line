export class Ui {
    board = document.getElementById('board');
    firstPlayerColor = 1;
    secondPlayerColor = 2;
    gameState;
    constructor(gameState) {
        this.gameState = gameState;
    }

    createBoard(rowsLength, columnsLength) {
        this.gameState.createBoard(rowsLength, columnsLength)
    }

    insertBall(column) {
        let isGameDone = this.gameState.isThereWinner();
        if (isGameDone) {
            console.log('There is already a winner')
            return;
        }
        const gameRows = this.gameState.gameBoard.length;
        for (let i = (gameRows - 1); i >= 0; i--) {
            if (this.gameState.gameBoard[i][column] === 0) {
                this.gameState.gameBoard = this.gameState.updateElementInGameBoard(
                    i,
                    column,
                    this.gameState.isFirstPlayer ? this.firstPlayerColor : this.secondPlayerColor
                    )
                break;
            }
        }
        isGameDone = this.gameState.isThereWinner();
        if (!isGameDone) {
            this.gameState.switchPlayer();
            this.switchNextInsertBall();
        } else {
            this.showWinner();
            console.log('The Game is Done');
        }
        this.parseGame();
    }

    showWinner() {
        const winnerModalContent = document.getElementById('winnerModalContent');
        if (this.gameState.isFirstPlayer) {
            winnerModalContent.innerText = 'The Winner is ( 1 )';
            winnerModalContent.className = 'bg-primary';
        } else {
            winnerModalContent.innerText = 'The Winner is ( 2 )';
            winnerModalContent.className = 'bg-danger';
        }
        const winnerModal = new bootstrap.Modal('#winnerModal', {});
        winnerModal.show();
    }
    switchNextInsertBall() {
        const nextBall = document.getElementById('nextBall');
        if (this.gameState.isFirstPlayer) {
            nextBall.className = 'badge bg-primary';
            nextBall.innerText = '1';
        } else {
            nextBall.className = 'badge bg-danger';
            nextBall.innerText = '2';
        }
    }

    linkRowToBoard(column) {
        this.board.append(column);
    }

    createRaw(gameBoardColumn) {
        const tr = document.createElement('tr');
        for (let i = 0; i < gameBoardColumn.length; i++) {
            const td = document.createElement('td');
            const className = gameBoardColumn[i] === 0 ? 'secondary' : (gameBoardColumn[i] === 1 ? 'primary' : 'danger');
            td.innerHTML = `<span class="badge bg-${className}">${gameBoardColumn[i]}</span>`;
            tr.append(td)
        }
        this.linkRowToBoard(tr);
    }

    createInsertButtonColumn(width) {
        const tr = document.createElement('tr');
        for (let i = 0; i < width; i++) {
            const canInsert = this.gameState.canInsertInThisColumn(i);
            const th = document.createElement('th');
            const button = document.createElement('button');
            button.className = 'btn btn-outline-' + (canInsert ? 'primary' : 'danger');
            button.disabled = !canInsert;
            button.id = 'insertButton' + i;
            button.onclick = () => {
                console.log('inserting in ', i);
                this.insertBall(i)
            };
            button.textContent = 'Insert';
            th.append(button);
            tr.append(th)
        }
        this.linkRowToBoard(tr);
    }

    disableAllInsertButton() {
        console.log('disabling all insert button');
        const allInsertButton = document.querySelectorAll('.btn');
        for (let button of allInsertButton) {
            button.disabled = true;
        }
        return true;
    }

    parseGame() {
        const gameWidth = this.gameState.gameBoard[0].length;
        this.board.innerHTML = '';
        this.createInsertButtonColumn(gameWidth);
        for (const row of this.gameState.gameBoard) {
            this.createRaw(row);
        }
    }
}
