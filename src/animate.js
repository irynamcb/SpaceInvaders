const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


Util.inherits(MovingObject, Animate);

Animate.RADIUS = 0;

function Animate(options, imageName, animationLength) {

    this.animateImage = new Image();
    this.frame = 0;
    this.animationLength = animationLength;
    this.imageName = imageName;
    this.animateImage.src = this.frameName(this.frame);

    let moOptions = {
        pos: options.pos,
        image: this.animateImage,
        width: options.width,
        height: options.height,
        radius: Animate.RADIUS,
        vel: [0, 0],
        game: options.game
    }
    MovingObject.call(this, moOptions);

}

Animate.prototype.frameName = function (frame) {
    let s = '000' + frame;
    s = s.substr(s.length-3);
    return `../images/${this.imageName}${s}.png`
}

Animate.prototype.animate = function (timeDelta) {
    this.frame += 1;
    if (this.frame < this.animationLength) {
        this.animateImage.src = this.frameName(this.frame);
    } else {
        this.game.remove(this);
    }
   
}



module.exports = Animate;