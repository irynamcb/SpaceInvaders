const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

Util.inherits(MovingObject, Alien);

Alien.COLOR = "blue";
Alien.RADIUS = 30;

function Alien(options) {

    let moOptions = {
        pos: options.pos,
        color: Alien.COLOR,
        radius: Alien.RADIUS,
        vel: Util.randomVec(Math.random() * 10),
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


module.exports = Alien;