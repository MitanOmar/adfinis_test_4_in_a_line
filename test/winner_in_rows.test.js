import {GameState} from "../js/GameState.js";


test('There is a winner in a Row', () => {
    const gmBoard = [
        [1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})


test('There is a winner in a Row', () => {
    const gmBoard = [
        [1, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})

test('There is a winner in a Row', () => {
    const gmBoard = [
        [1, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 2, 1, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})

test('There is a winner in a Row', () => {
    const gmBoard = [
        [1, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 2, 1],
        [1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 2, 1, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})
