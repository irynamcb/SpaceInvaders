const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Ship = require("./ship.js");
const AlienBullet = require("./alien_bullet.js");
const Bullet = require("./bullet.js");

Util.inherits(MovingObject, Alien);

Alien.COLOR = "blue";
Alien.RADIUS = 20;

function Alien(options) {

    let moOptions = {
        pos: options.pos,
        color: Alien.COLOR,
        radius: Alien.RADIUS,
        // vel: Util.randomVec(Math.random() * 10),
        vel: [0, 0],
        game: options.game
    }
    MovingObject.call(this, moOptions);
}

Alien.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Ship) {
        otherObject.relocate();
    } else if (otherObject instanceof Bullet) {
        this.game.remove(otherObject);
        this.game.remove(this);
    }
}

Alien.prototype.fireBullet = function () {
    let newVel = [0, 10]
    let bullet = new AlienBullet({ pos: [this.pos[0], this.pos[1]], vel: newVel, game: this.game });
    this.game.add(bullet);
}

module.exports = Alien;