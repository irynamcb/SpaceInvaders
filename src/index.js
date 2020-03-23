
const MovingObject = require("./moving_object.js");


console.log("Webpack is working!");


window.addEventListener('DOMContentLoaded', (event) => {

    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    window.ctx = ctx;

   
    console.log('DOM fully loaded and parsed');
});
