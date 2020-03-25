const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Ship = require("./ship");
const Bullet = require("./bullet");

Util.inherits(MovingObject, AlienBullet);

AlienBullet.COLOR = "purple";
AlienBullet.RADIUS = 4;

function AlienBullet(options) {

    let moOptions = {
        pos: options.pos,
        color: AlienBullet.COLOR,
        radius: AlienBullet.RADIUS,
        vel: options.vel,
        game: options.game
    }
    MovingObject.call(this, moOptions);

}

AlienBullet.prototype.checkBoundaryConditions = function () {
    if (this.isOutOfBounds(this.pos)) {
        this.game.remove(this);
    }
}

AlienBullet.prototype.collideWith = function (otherObject) {
    // will need to change this to kill the ship
// debugger
    if (otherObject instanceof Ship) {
        this.game.remove(otherObject);
        this.game.remove(this);
    } else if (otherObject instanceof Bullet) {
        this.game.remove(otherObject);
        this.game.remove(this);
    } 
}

AlienBullet.prototype.isWrappable = false;

module.exports = AlienBullet;