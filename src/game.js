const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");
const Alien = require("./alien.js");
const AlienBullet = require("./alien_bullet");



function Game() {
    Game.DIM_X = 800;
    Game.DIM_Y = 800;
    this.initializeLevel();
    
}

Game.prototype.initializeLevel = function () {
    this.bullets = [];
    this.aliens = [];
    this.alienBullets = [];
    this.ship = new Ship({ pos: this.shipPosition(), game: this })
    this.addAliens();
    this.alienBullet = 120;
}


Game.prototype.shipPosition = function () {
    let x = (Game.DIM_X/2);
    let y = (Game.DIM_Y - (Ship.RADIUS + 1));
    let pos = [x, y];
    return pos;
}

Game.prototype.addAliens = function () {

    let grid = [];
    let alienX = 2 * Alien.RADIUS + 10;
    let alienY = 2 * Alien.RADIUS + 10;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 6; j++) {
            grid[i] = new Alien({ pos: [100 + i * alienX, 100 + j * alienY], game: this });
            this.add(grid[i]); 
        }   
    }
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
    this.fireAlienBullets();

};

Game.prototype.remove = function (obj) {

    if (obj instanceof Alien) {
        this.aliens.splice(this.aliens.indexOf(obj), 1)
    } else if (obj instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(obj), 1)
    } else if (obj instanceof AlienBullet) {
        this.alienBullets.splice(this.alienBullets.indexOf(obj), 1)
    }
}


Game.prototype.allObjects = function () {
    // ship does not collide with anything 
    let x = this.aliens.concat(this.alienBullets).concat(this.bullets).concat(this.ship);
    return x;
}

Game.prototype.add = function (obj) {

    if (obj instanceof Alien) {
        this.aliens.push(obj)
    } else if (obj instanceof Bullet) {
        this.bullets.push(obj)
    } else if (obj instanceof AlienBullet) {
        this.alienBullets.push(obj)
    }
}

Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y);
}

Game.prototype.fireAlienBullets = function () {
    this.alienBullet -= 1;
    if (this.alienBullet === 0) {
        index = this.getRandomInt(this.aliens.length);
        this.aliens[index].fireBullet();
        this.alienBullet = this.getRandomInt(100) + 100;
    }
}

Game.prototype.getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
}


module.exports = Game;