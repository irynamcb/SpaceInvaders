const Game = require("./game.js");
const GameView = require("./game_view.js");
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

    // not sure if this is a place to put it
    document.addEventListener("keyup", function (e) {
        let keycode = e.which || window.event.keycode;
        if (keycode === 65 || keycode === 68 || keycode === 32) {
            gv.stopShip(g.ship);
        }
    })



    console.log('DOM fully loaded and parsed');
});
