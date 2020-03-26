const LevelStart = require("./level_start");
const StartGame = require("./start_game");


function GameView(game, ctx) {

    this.game = game;
    this.ctx = ctx;
    this.gameState = new StartGame();
}

GameView.prototype.start = function () {
    let that = this;

    setInterval(function () {
        that.gameState.step();
        that.gameState.draw(that.game, that.ctx);
    }, 20);
    this.bindKeyHandlers();
}


GameView.prototype.left = function (ship) {
    ship.power([-1, 0]);
}

GameView.prototype.right = function (ship) {
    ship.power([1, 0]);
}

GameView.prototype.bindKeyHandlers = function () {
    const game = this.game;
    key('a', function () { GameView.prototype.left(game.ship) });
    key('d', function () { GameView.prototype.right(game.ship) });
    key('space', function () { game.ship.fireBullet() });
    key('k', function () { 
        // debugger
        window.gv.gameState = new LevelStart();
    });
}

module.exports = GameView;