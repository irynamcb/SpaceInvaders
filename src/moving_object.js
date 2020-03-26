function MovingObject(options) {

    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;

};

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        true
    );

    ctx.fill();
};

MovingObject.prototype.move = function () {
    //console.log(this.pos[0], this.pos[1], this)
    let x = (this.pos[0] += this.vel[0]);
    let y = (this.pos[1] += this.vel[1]);
    this.pos = [x, y];
  
    this.checkBoundaryConditions();

};

MovingObject.prototype.checkBoundaryConditions = function () {

}

MovingObject.prototype.isOutOfBounds = function (pos) {
    return this.game.isOutOfBounds(pos);
}


MovingObject.prototype.collideWith = function (otherObject) {

};

MovingObject.prototype.isCollidedWith = function (otherObject) {

    let distance = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2) + Math.pow((this.pos[1] - otherObject.pos[1]), 2));

    return (distance < (this.radius + otherObject.radius));

};


module.exports = MovingObject;