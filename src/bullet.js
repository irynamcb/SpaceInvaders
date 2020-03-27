const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


Util.inherits(MovingObject, Bullet);

Bullet.COLOR = "red";
Bullet.RADIUS = 4;

function Bullet(options) {

    const bulletImage = new Image();
    bulletImage.src = '../images/starship17.png';

    let moOptions = {
        pos: options.pos,
        image: bulletImage,
        color: Bullet.COLOR,
        radius: Bullet.RADIUS,
        vel: options.vel,
        game: options.game
    }
    MovingObject.call(this, moOptions);

}

Bullet.prototype.checkBoundaryConditions = function () {
    if (this.isOutOfBounds(this.pos)) {
        this.game.remove(this);
    }
}

module.exports = Bullet;