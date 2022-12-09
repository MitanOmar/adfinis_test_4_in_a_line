import { GameState } from "../js/GameState.js";

test('There is no Winner', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeFalsy()
})

test('There is no Winner', () => {
    const gmBoard = [
        [0, 1, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 2, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 0, 0, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeFalsy()
})

test('There is no Winner', () => {
    const gmBoard = [
        [0, 1, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 2, 0, 2],
        [0, 1, 0, 0, 1, 0, 1],
        [0, 0, 3, 0, 0, 2, 0],
    ];
    const gm = new GameState(gmBoard);
    expect(gm.isThereWinner()).toBeFalsy()
})
