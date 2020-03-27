const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Bullet = require("./bullet.js");



Util.inherits(MovingObject, Ship);

Ship.COLOR = "green";
Ship.RADIUS = 15;
Ship.MAX_IMPULSE = 5;

function Ship(options) {

    const shipImage = new Image();
    shipImage.src = '../images/starship1_3.png';

    let moOptions = {
        pos: options.pos,
        image: shipImage,
        color: Ship.COLOR,
        radius: Ship.RADIUS,
        vel: [0, 0],
        game: options.game
    }
    MovingObject.call(this, moOptions);

}

Ship.prototype.checkBoundaryConditions = function () {
    if (this.isOutOfBounds(this.pos)) {
        let x = (this.pos[0] -= this.vel[0]);
        let y = (this.pos[1] -= this.vel[1]);
        this.pos = [x, y];
        this.vel = [0, 0];
    }
}

Ship.prototype.power = function (impulse) {

    if (Math.abs(this.vel[0]) < Ship.MAX_IMPULSE) {
        this.vel[0] += impulse[0];
    } 
}

Ship.prototype.fireBullet = function () {
    let newVel = [0, -10]
    let bullet = new Bullet({ pos: [this.pos[0], this.pos[1]], vel: newVel, game: this.game });
    this.game.add(bullet);

}

module.exports = Ship;