const MovingObject = require("./moving_object.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const StartGame = require("./start_game");



console.log("Webpack is working!");


window.addEventListener('DOMContentLoaded', (event) => {

    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    window.ctx = ctx;

    
    const g = new Game();
    const gv = new GameView(g, ctx);
    window.gv = gv;
    window.gv.gameState = new StartGame();;
    gv.start();



    console.log('DOM fully loaded and parsed');
});
