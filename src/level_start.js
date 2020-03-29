
function LevelStart() {
    this.countdownMessage = "3";
    this.countdown = 0;
}

LevelStart.prototype.step = function (timeDelta) {

this.countdown += timeDelta;

    if (this.countdown >= 1000) {
        this.countdownMessage = "2";
    }
    if (this.countdown >= 2000) {
        this.countdownMessage = "1";
    }
    if (this.countdown >= 3000) {
       window.gv.game.initializeLevel();
       window.gv.gameState = window.gv.game;
    }

};

LevelStart.prototype.draw = function (game, ctx) {

    ctx.clearRect(0, 0, game.width, game.height);
    ctx.font = "36px Arial";
    ctx.fillStyle = 'red';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "24px Arial";
    ctx.fillText("Ready in " + this.countdownMessage, game.width / 2, game.height / 2 );
    return;
};

module.exports = LevelStart;