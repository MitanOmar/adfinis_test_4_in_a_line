import { Ui } from "./ui.js";
import { GameState, createBoard } from "./GameState.js";
console.log(createBoard(5, 6));
const gameState = new GameState(createBoard(5, 6));
const ui = new Ui(gameState);
// ui.createBoard(10, 10)

ui.parseGame()
