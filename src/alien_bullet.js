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
        width: 50,
        height: 30,
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

    if (otherObject instanceof Ship) {
        

        // set a flag
        this.game.remove(this);
        this.game.gameOver = true;
    } else if (otherObject instanceof Bullet) {
        this.game.remove(otherObject);
        this.game.remove(this);
    } 
}

module.exports = AlienBullet;