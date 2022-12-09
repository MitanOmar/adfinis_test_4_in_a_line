import {
    isAllElementAreEqual,
    isThere4ElementsNextToEachOther,
    isPointExistInBoard,
    updateElementInGameBoard
} from "../js/GameState.js";

test('Test Function isAllElementAreEqual', () => {
    expect(isAllElementAreEqual([1, 1, 1, 1])).toBeTruthy();
    expect(isAllElementAreEqual([1, 1, 1, 5])).toBeFalsy();
    expect(isAllElementAreEqual([1, 1, 2])).toBeFalsy();
});
test('Test Function isThere4ElementsNextToEachOther', () => {
    expect(isThere4ElementsNextToEachOther([1, 1, 2, 1, 1, 1, 1])).toBeTruthy()
    expect(isThere4ElementsNextToEachOther([1, 1, 2, 1, 2, 1, 1])).toBeFalsy()
    expect(isThere4ElementsNextToEachOther([1, 1])).toBeFalsy()
    expect(isThere4ElementsNextToEachOther([1, 0, 2, 3, 5])).toBeFalsy()
});

test('check if point exists in boarder', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    expect(isPointExistInBoard(gmBoard, 5, 6)).toBeTruthy()
})

test('check if point exists in boarder', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    expect(isPointExistInBoard(gmBoard, 5, 7)).toBeFalsy()
})

test('check if point exists in boarder', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    expect(isPointExistInBoard(gmBoard, 7, 7)).toBeFalsy()
})

test('check updating element in Game Board', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const result = updateElementInGameBoard(gmBoard, 5, 0, 2);
    expect(result[5][0]).toBe(2)
})

test('check updating element in Game Board', () => {
    const gmBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    const result = updateElementInGameBoard(gmBoard, 5, 0, 2);
    console.log(result);
    expect(result[4][0]).toBe(0)
})
