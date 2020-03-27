function MovingObject(options) {

    this.pos = options.pos;
    this.image = options.image;
    this.width = 100;
    this.height = 30;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;

};

MovingObject.prototype.draw = function (ctx) {

    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
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

MovingObject.prototype.isOutOfBounds = function () {

    let pos = this.getCenter();
    let dx = this.width / 2;
    let dy = this.height / 2;
  
    return (pos[0] - dx < 0 || pos[1] - dy < 0 || pos[0] + dx > this.width || pos[1] + dy > this.height);
    
}

MovingObject.prototype.isOffScreen = function () {

    let pos = this.getCenter();
    let dx = this.width / 2;
    let dy = this.height / 2;

    return (pos[0] + dx < 0 || pos[1] + dy < 0 || pos[0] - dx > this.width || pos[1] - dy > this.height);

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



module.exports = MovingObject;