function GameOver() {

}

GameOver.prototype.step = function (timeDelta) {

};

GameOver.prototype.draw = function (game, ctx) {

    ctx.clearRect(0, 0, game.width, game.height);
// debugger
    ctx.font = "30px Arial";
    ctx.fillStyle = 'red';
    ctx.textBaseline = "center";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", game.width / 2, game.height / 2 - 40);
    ctx.font = "16px Arial";
    ctx.fillText("Press 'K' to play again.", game.width / 2, game.height / 2 + 40);
};


module.exports = GameOver;