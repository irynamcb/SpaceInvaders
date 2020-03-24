const Game = require("./game.js")


function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    let that = this;
    setInterval(function () {
        that.game.step();
        that.game.draw(that.ctx);
    }, 20);
    this.bindKeyHandlers();
}

GameView.prototype.left = function (ship) {
    ship.power([-1, 0]);
}

GameView.prototype.right = function (ship) {
    ship.power([1, 0]);
}

GameView.prototype.up = function (ship) {
    ship.power([0, -1]);
}

GameView.prototype.down = function (ship) {
    ship.power([0, 1]);
}

GameView.prototype.bindKeyHandlers = function () {
    const ship = this.game.ship;
    key('a', function () { GameView.prototype.left(ship) });
    key('d', function () { GameView.prototype.right(ship) });
    key('s', function () { GameView.prototype.down(ship) });
    key('w', function () { GameView.prototype.up(ship) });
    key('space', function () { ship.fireBullet() });
}

module.exports = GameView;