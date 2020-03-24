const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

Util.inherits(MovingObject, Bullet);

Bullet.COLOR = "red";
Bullet.RADIUS = 2;

function Bullet(options) {

    let moOptions = {
        pos: options.pos,
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

Bullet.prototype.isWrappable = false;

module.exports = Bullet;