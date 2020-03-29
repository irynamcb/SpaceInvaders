const LevelStart = require("./level_start");
const StartGame = require("./start_game");


function GameView(game, ctx) {

    this.game = game;
    this.ctx = ctx;
    this.gameState = new StartGame();
}

GameView.prototype.start = function () {
    let that = this;
    this.bindKeyHandlers();
    this.lastTime = 0;

    document.addEventListener("keyup", function (e) {
        let keycode = e.which || window.event.keycode;
        // let keycode = e.keyCode;
        if (keycode === 65 || keycode === 68 ) {
            that.game.ship.stop();
        }
    })
    requestAnimationFrame(this.animate.bind(this));
}


GameView.prototype.left = function (ship) {
    ship.power([-5, 0]);
}

GameView.prototype.right = function (ship) {
    ship.power([5, 0]);
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

GameView.prototype.animate = function animate(time) {
    const timeDelta = time - this.lastTime;
    this.gameState.step(timeDelta);
    this.gameState.draw(this.game, this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
};


module.exports = GameView;