const MovingObject = require("./moving_object.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const StartGame = require("./start_game");
const LevelStart = require("./level_start");
const Starfield = require("./starfield");


console.log("Webpack is working!");


window.addEventListener('DOMContentLoaded', (event) => {


    const starfield = document.getElementById("starfield");
    const stars = new Starfield(); 
    stars.initialize(starfield);
    stars.start();

    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    window.ctx = ctx;
   
    const g = new Game();
    const gv = new GameView(g, ctx);
    window.gv = gv;
    gv.start();





    console.log('DOM fully loaded and parsed');
});
