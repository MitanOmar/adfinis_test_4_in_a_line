import {isAllElementAreEqual, isThere4ElementsNextToEachOther, isPointExistInBoard} from "../js/GameState.js";

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
