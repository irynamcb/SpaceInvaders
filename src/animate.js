const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


Util.inherits(MovingObject, Animate);

Animate.RADIUS = 0;

function Animate(options, imageName, animationLength) {

    this.frame = 0;
    this.animationLength = animationLength;
    this.animation = new Image ();
    this.animation.src = `./images/${imageName}.png`;
    this.animationWidth = 12768 / animationLength;
    this.animationHeight = 258;
    


    let moOptions = {
        pos: options.pos,
        width: options.width,
        height: options.height,
        radius: Animate.RADIUS,
        vel: options.vel,
        game: options.game
    }
    MovingObject.call(this, moOptions);

}


Animate.prototype.draw = function (ctx) {
    // debugger
   ctx.drawImage(this.animation, this.frame * this.animationWidth, 0, this.animationWidth, this.animationHeight, this.pos[0], this.pos[1], this.width, this.height);
   this.frame += 1;
   if (this.frame > this.animationLength) {
        this.game.remove(this);
   }
}




module.exports = Animate;