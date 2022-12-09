import { Ui } from "./ui.js";
import { GameState } from "./GameState.js";
const gameState = new GameState();
const ui = new Ui(gameState);
ui.createBoard(10, 7)

ui.parseGame()
