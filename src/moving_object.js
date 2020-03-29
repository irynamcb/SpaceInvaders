function MovingObject(options) {

    this.pos = options.pos;
    this.image = options.image;
    this.width = options.width;
    this.height = options.height;
    this.vel = options.vel;
    this.radius = options.radius;
    this.game = options.game;

};

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

MovingObject.prototype.draw = function (ctx) {

    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
};

MovingObject.prototype.move = function (timeDelta) {
  
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale,
        offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
  
    this.checkBoundaryConditions();

};

MovingObject.prototype.checkBoundaryConditions = function () {

}

MovingObject.prototype.isOutOfBounds = function () {

    let pos = this.getCenter();
    let dx = this.width / 2;
    let dy = this.height / 2;
  
    return (pos[0] - dx < 0 || pos[1] - dy < 0 || pos[0] + dx > this.game.width || pos[1] + dy > this.game.height);
    
}

MovingObject.prototype.isOffScreen = function () {

    let pos = this.getCenter();
    let dx = this.width / 2;
    let dy = this.height / 2;

    return (pos[0] + dx < 0 || pos[1] + dy < 0 || pos[0] - dx > this.game.width || pos[1] - dy > this.game.height);

}


MovingObject.prototype.collideWith = function (otherObject) {

};

MovingObject.prototype.getCenter = function () {
 
    let x = this.pos[0] + this.width / 2
    let y = this.pos[1] + this.height / 2
// debugger
    return [x, y]

};

MovingObject.prototype.isCollidedWith = function (otherObject) {

    let pos = this.getCenter();
    let otherPos = otherObject.getCenter();

    let distance = Math.sqrt(Math.pow((pos[0] - otherPos[0]), 2) + Math.pow((pos[1] - otherPos[1]), 2));

    return (distance < (this.radius + otherObject.radius));

};

MovingObject.prototype.stop = function () {
    this.vel = [0, 0];
}



module.exports = MovingObject;