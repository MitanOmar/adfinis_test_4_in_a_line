import {GameState} from "../js/GameState.js";

test('There is a winner in X direction', () => {
    const gmBoard = [
        [2, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})

test('There is a winner in X direction', () => {
    const gmBoard = [
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})
test('There is a winner in X direction', () => {
    const gmBoard = [
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})

test('There is a winner in X direction', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 1, 0, 0, 0],
        [0, 2, 0, 0, 1, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 1],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})

test('There is a winner in X direction', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [2, 0, 2, 1, 0, 0, 0],
        [0, 1, 0, 2, 1, 0, 0],
        [0, 0, 2, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 2, 1],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeTruthy()
})
