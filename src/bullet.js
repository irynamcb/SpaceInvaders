const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


Util.inherits(MovingObject, Bullet);

Bullet.RADIUS = 4;

function Bullet(options) {

    const bulletImage = new Image();
    bulletImage.src = './images/11.png';

    let moOptions = {
        pos: options.pos,
        image: bulletImage,
        width: 10,
        height: 26,
        radius: Bullet.RADIUS,
        vel: options.vel,
        game: options.game
    }
    MovingObject.call(this, moOptions);

}

Bullet.prototype.checkBoundaryConditions = function () {
    if (this.isOffScreen()) {
        this.game.remove(this);
    }
}

module.exports = Bullet;