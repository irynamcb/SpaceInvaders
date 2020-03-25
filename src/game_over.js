function GameOver() {

}

GameOver.prototype.step = function (game, dt) {

};

GameOver.prototype.draw = function (game, ctx) {

    //  Clear the background.
    ctx.clearRect(0, 0, game.width, game.height);
// debugger
    ctx.font = "30px Arial";
    ctx.fillStyle = 'darkblue';
    ctx.textBaseline = "center";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", game.width / 2, game.height / 2 - 40);
    ctx.font = "16px Arial";
    // ctx.fillText("You scored " + game.score + " and got to level " + game.level, game.width / 2, game.height / 2);
    ctx.font = "16px Arial";
    ctx.fillText("Press 'K' to play again.", game.width / 2, game.height / 2 + 40);
};

GameOver.prototype.keyDown = function (game, keyCode) {
    // if (keyCode == KEY_SPACE) {
    //     //  Space restarts the game.
    //     game.lives = 3;
    //     game.score = 0;
    //     game.level = 1;
    //     game.moveToState(new LevelIntroState(1));
    // }
};

module.exports = GameOver;