const Ship = require("./ship.js");
const Bullet = require("./bullet.js");
const Alien = require("./alien.js");
const AlienBullet = require("./alien_bullet");
const GameOver = require("./game_over");
const Animate = require("./animate");



function Game() {
    this.width = 800;
    this.height = 600;
    this.gameOver = true;
    this.initializeLevel(); 
}

Game.prototype.initializeLevel = function () {

    this.gameOver = false;
    this.bullets = [];
    this.aliens = [];
    this.animations = [];
    this.alienBullets = [];
    this.ship = new Ship({ pos: this.shipPosition(), game: this })
    this.addAliens();
    this.alienBullet = 120;
}


Game.prototype.shipPosition = function () {
    let x = (this.width/2);
    let y = this.height - Ship.HEIGHT - 1;
    let pos = [x, y];
    return pos;
}

Game.prototype.addAliens = function () {

    let grid = [];
    let alienX = 2 * Alien.RADIUS + 3;
    let alienY = 2 * Alien.RADIUS + 3;

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            grid[i] = new Alien({ pos: [50 + i * alienX, 50 + j * alienY], game: this });
            this.add(grid[i]); 
        }   
    }
}

Game.prototype.draw = function (game, ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.allObjects().forEach(obj => obj.draw(ctx));
}

Game.prototype.animate = function (timeDelta) {
    this.allObjects().forEach(obj => obj.animate(timeDelta));

}

Game.prototype.moveObjects = function (timeDelta) {
    this.allObjects().forEach(obj => obj.move(timeDelta));

    if (this.areAliensOutOfBounds()) {
        
        this.aliens.forEach(alien => {
            alien.vel[0] = (alien.vel[0] * -1);
            alien.vel[1] += 30;
            alien.move(timeDelta);
            alien.vel[1] = 0;
        });
    }
    
}

Game.prototype.areAliensOutOfBounds = function () {
    
    for (let i = 0; i < this.aliens.length; i++) {
        if (this.aliens[i].isOutOfBounds()) return true;
    } 
    return false;
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

Game.prototype.step = function (timeDelta) {

    this.moveObjects(timeDelta);
    this.animate(timeDelta);
    this.fireAlienBullets();
    this.checkCollisions();
// debugger
    if (this.aliens.length === 0 || this.gameOver) {
        window.gv.gameState = new GameOver(); 
    } 

};

Game.prototype.remove = function (obj) {

    if (obj instanceof Alien) {
        this.aliens.splice(this.aliens.indexOf(obj), 1)
    } else if (obj instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(obj), 1)
    } else if (obj instanceof AlienBullet) {
        this.alienBullets.splice(this.alienBullets.indexOf(obj), 1)
    } else if (obj instanceof Animate) {
        this.animations.splice(this.animations.indexOf(obj), 1)
    }
}


Game.prototype.allObjects = function () {
    // ship does not collide with anything 
    let x = this.aliens.concat(this.alienBullets).concat(this.bullets).concat(this.ship).concat(this.animations);
    return x;
}

Game.prototype.add = function (obj) {

    if (obj instanceof Alien) {
        this.aliens.push(obj)
    } else if (obj instanceof Bullet) {
        this.bullets.push(obj)
    } else if (obj instanceof AlienBullet) {
        this.alienBullets.push(obj)
    } else if (obj instanceof Animate) {
        this.animations.push(obj)
    }
}

Game.prototype.fireAlienBullets = function () {
    this.alienBullet -= 1;
    if (this.alienBullet === 0) {

        if (this.aliens.length !== 0) {
            index = this.getRandomInt(this.aliens.length);
            this.aliens[index].fireBullet();
            this.alienBullet = this.getRandomInt(100) + 100;
        } 
    }
}

Game.prototype.getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
}


module.exports = Game;