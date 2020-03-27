
function LevelStart() {
    this.countdownMessage = "3";
    this.countdown = 120;
}

LevelStart.prototype.step = function () {

    this.countdown -= 1;

    if (this.countdown <= 80) {
        this.countdownMessage = "2";
    }
    if (this.countdown <= 40) {
        this.countdownMessage = "1";
    }
    if (this.countdown <= 0) {
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