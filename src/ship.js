const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Bullet = require("./bullet.js");

Util.inherits(MovingObject, Ship);

Ship.COLOR = "white";
Ship.RADIUS = 15;

function Ship(options) {

    let moOptions = {
        pos: options.pos,
        color: Ship.COLOR,
        radius: Ship.RADIUS,
        vel: [0, 0],
        game: options.game
    }
    MovingObject.call(this, moOptions);

}

Ship.prototype.relocate = function () {
    // debugger
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
}

Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function () {
    let newVel = [this.vel[0] * 10, this.vel[1] * 10]
    if (this.vel[0] === 0 && this.vel[1] === 0) {
        return;
    }
    let bullet = new Bullet({ pos: this.pos, vel: newVel, game: this.game });
    this.game.add(bullet);

}

module.exports = Ship;