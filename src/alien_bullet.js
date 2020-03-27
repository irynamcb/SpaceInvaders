const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Ship = require("./ship");
const Bullet = require("./bullet");

Util.inherits(MovingObject, AlienBullet);

AlienBullet.COLOR = "purple";
AlienBullet.RADIUS = 4;

function AlienBullet(options) {

    const alienBulletImage = new Image();
    alienBulletImage.src = '../images/starship16.png';

    let moOptions = {
        pos: options.pos,
        image: alienBulletImage,
        color: AlienBullet.COLOR,
        radius: AlienBullet.RADIUS,
        vel: options.vel,
        game: options.game
    }
    MovingObject.call(this, moOptions);

}

AlienBullet.prototype.checkBoundaryConditions = function () {
    if (this.isOffScreen()) {
        this.game.remove(this);
    }
}

AlienBullet.prototype.collideWith = function (otherObject) {
    // need to change this to kill the ship
// debugger
    if (otherObject instanceof Ship) {
        this.game.remove(otherObject);
        this.game.remove(this);
    } else if (otherObject instanceof Bullet) {
        this.game.remove(otherObject);
        this.game.remove(this);
    } 
}

module.exports = AlienBullet;