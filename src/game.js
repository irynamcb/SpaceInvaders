const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");


function Game(img) {
    Game.DIM_X = 800;
    Game.DIM_Y = 800;


    this.bullets = [];




    this.ship = new Ship({ pos: this.randomPosition(), game: this })
}

Game.prototype.randomPosition = function () {
    let x = (Math.random() * Game.DIM_X);
    let y = (Math.random() * Game.DIM_Y);
    let pos = [x, y];
    return pos;
}

Game.prototype.addAsteroids = function () {
    let count = 0;
    while (count < Game.NUM_ASTEROIDS) {
        let pos = this.randomPosition();
        let ast2 = new Asteroid({ pos: pos, game: this });
        this.asteroids.push(ast2);
        count++;
    }
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(this.img, 0, 0);
    this.allObjects().forEach(asteroid => asteroid.draw(ctx));
}

Game.prototype.moveObjects = function () {
    this.allObjects().forEach(asteroid => asteroid.move());
}

Game.prototype.wrap = function (pos) {

    let newX = ((pos[0] + Game.DIM_X) % Game.DIM_X);
    let newY = ((pos[1] + Game.DIM_Y) % Game.DIM_Y);

    let newPos = [newX, newY];
    return newPos;
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

    if (obj instanceof Asteroid) {
        this.asteroids.splice(this.asteroids.indexOf(obj), 1)
    } else if (obj instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(obj), 1)
    }
}


Game.prototype.allObjects = function () {
    let x = this.asteroids.concat(this.ship).concat(this.bullets);
    return x;
}

Game.prototype.add = function (obj) {

    if (obj instanceof Asteroid) {
        this.asteroids.push(obj)
    } else if (obj instanceof Bullet) {
        this.bullets.push(obj)
    }

}

Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y);
}


module.exports = Game;