import {GameState} from "../js/GameState.js";

test('There is a winner in Y direction', () => {
    const gmBoard = [
        [0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})
test('There is a winner in Y direction', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})
test('There is a winner in Y direction', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})

test('There is a winner in Y direction', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 2, 2, 0],
        [0, 0, 0, 2, 2, 0, 1],
        [0, 0, 0, 2, 0, 1, 0],
        [0, 0, 2, 0, 1, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})
