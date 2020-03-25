function LevelStart(level) {
    this.countdownMessage = "3";
}

LevelStart.prototype.step = function (game, dt) {

    //  Update the countdown.
    if (this.countdown === undefined) {
        this.countdown = 3; // countdown from 3 secs
    }
    this.countdown -= dt;

    if (this.countdown < 2) {
        this.countdownMessage = "2";
    }
    if (this.countdown < 1) {
        this.countdownMessage = "1";
    }
    if (this.countdown <= 0) {
        //  Move to the next level, popping this state.
        game.moveToState(new PlayState(game.config, this.level));
    }

};

LevelStart.prototype.draw = function (game, ctx) {

   
    ctx.clearRect(0, 0, game.width, game.height);

    ctx.font = "36px Arial";
    ctx.fillStyle = 'green';
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "24px Arial";
    ctx.fillText("Ready in " + this.countdownMessage, game.width / 2, game.height / 2 + 36);
    return;
};

module.exports = LevelStart;