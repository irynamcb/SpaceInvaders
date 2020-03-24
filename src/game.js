const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");


function Game() {
    Game.DIM_X = 800;
    Game.DIM_Y = 800;
    this.bullets = [];
    this.ship = new Ship({ pos: this.shipPosition(), game: this })
}

Game.prototype.shipPosition = function () {
    let x = (Game.DIM_X/2);
    let y = (this.ship.RADIUS + 1);
    let pos = [x, y];
    return pos;
}


Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(obj => obj.draw(ctx));
}

Game.prototype.moveObjects = function () {
    this.allObjects().forEach(obj => obj.move());
}

Game.prototype.checkCollisions = function () {
    let array = this.allObjects();

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].isCollidedWith(array[j])) {
                array[i].collideWith(array[j]);
            }
        }
    }
};

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();

};

Game.prototype.remove = function (obj) {

    if (obj instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(obj), 1)
    }
}


Game.prototype.allObjects = function () {
    let x = this.ship.concat(this.bullets);
    return x;
}

Game.prototype.add = function (obj) {

    if (obj instanceof Bullet) {
        this.bullets.push(obj)
    }

}

Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y);
}


module.exports = Game;