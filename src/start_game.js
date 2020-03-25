function StartGame() {

}

StartGame.prototype.enter = function (game) {


};

StartGame.prototype.step = function (game) {


};

StartGame.prototype.draw = function (game, ctx) {

    //  Clear the background.
    ctx.clearRect(0, 0, game.width, game.height);

    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Space Invaders", game.width / 2, game.height / 2 - 40);
    ctx.font = "16px Arial";
    ctx.fillText("Press 'K' to start a game.", game.width / 2, game.height / 2);
};

StartGame.prototype.keyDown = function (game, keyCode) {
    // if (keyCode == KEY_SPACE) {
    //     //  Space starts the game.
    //     game.level = 1;
    //     game.score = 0;
    //     game.lives = 3;
    //     game.moveToState(new LevelIntroState(game.level));
    // }
};

module.exports = StartGame;