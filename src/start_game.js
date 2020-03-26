

function StartGame(game) {
  
}

StartGame.prototype.enter = function (game) {


};

StartGame.prototype.step = function (game) {


};

StartGame.prototype.draw = function (game, ctx) {

    ctx.clearRect(0, 0, game.width, game.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Space Invaders", game.width / 2, game.height / 2 - 40);
    ctx.font = "16px Arial";
    ctx.fillText("Press 'K' to start a game.", game.width / 2, game.height / 2);
};


module.exports = StartGame;