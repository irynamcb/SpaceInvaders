/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nUtil.inherits(MovingObject, Bullet);\n\nBullet.COLOR = \"red\";\nBullet.RADIUS = 2;\n\nfunction Bullet(options) {\n\n    let moOptions = {\n        pos: options.pos,\n        color: Bullet.COLOR,\n        radius: Bullet.RADIUS,\n        vel: options.vel,\n        game: options.game\n    }\n    MovingObject.call(this, moOptions);\n\n}\n\nBullet.prototype.checkBoundaryConditions = function () {\n    if (this.isOutOfBounds(this.pos)) {\n        this.game.remove(this);\n    }\n}\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\n\nfunction Game() {\n    Game.DIM_X = 800;\n    Game.DIM_Y = 800;\n    this.bullets = [];\n    this.ship = new Ship({ pos: this.shipPosition(), game: this })\n}\n\nGame.prototype.shipPosition = function () {\n    let x = (Game.DIM_X/2);\n    let y = (Game.DIM_Y - (Ship.RADIUS + 1));\n    let pos = [x, y];\n    return pos;\n}\n\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(obj => obj.draw(ctx));\n}\n\nGame.prototype.moveObjects = function () {\n    this.allObjects().forEach(obj => obj.move());\n}\n\nGame.prototype.checkCollisions = function () {\n    let array = this.allObjects();\n\n    for (let i = 0; i < array.length - 1; i++) {\n        for (let j = i + 1; j < array.length; j++) {\n            if (array[i].isCollidedWith(array[j])) {\n                array[i].collideWith(array[j]);\n            }\n        }\n    }\n};\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n\n};\n\nGame.prototype.remove = function (obj) {\n\n    if (obj instanceof Bullet) {\n        this.bullets.splice(this.bullets.indexOf(obj), 1)\n    }\n}\n\n\nGame.prototype.allObjects = function () {\n    let x = this.bullets.concat(this.ship)\n    return x;\n}\n\nGame.prototype.add = function (obj) {\n\n    if (obj instanceof Bullet) {\n        this.bullets.push(obj)\n    }\n\n}\n\nGame.prototype.isOutOfBounds = function (pos) {\n    return (pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y);\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\n\nfunction GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n    let that = this;\n    setInterval(function () {\n        that.game.step();\n        that.game.draw(that.ctx);\n    }, 20);\n    this.bindKeyHandlers();\n}\n\nGameView.prototype.left = function (ship) {\n    ship.power([-1, 0]);\n}\n\nGameView.prototype.right = function (ship) {\n    ship.power([1, 0]);\n}\n\nGameView.prototype.bindKeyHandlers = function () {\n    const ship = this.game.ship;\n    key('a', function () { GameView.prototype.left(ship) });\n    key('d', function () { GameView.prototype.right(ship) });\n    key('space', function () { ship.fireBullet() });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\n\nconsole.log(\"Webpack is working!\");\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext('2d');\n    window.ctx = ctx;\n\n    // test\n\n    window.MovingObject = MovingObject;\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 15,\n        color: \"red\"\n    });\n   \n    window.mo = mo;\n\n    const g = new Game();\n    const gv = new GameView(g, ctx);\n    window.gv = gv;\n    gv.start();\n\n    console.log('DOM fully loaded and parsed');\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n\n};\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        true\n    );\n\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n    //console.log(this.pos[0], this.pos[1], this)\n    let x = (this.pos[0] += this.vel[0]);\n    let y = (this.pos[1] += this.vel[1]);\n    this.pos = [x, y];\n  \n    this.checkBoundaryConditions();\n\n};\n\nMovingObject.prototype.checkBoundaryConditions = function () {\n\n}\n\nMovingObject.prototype.isOutOfBounds = function (pos) {\n    return this.game.isOutOfBounds(pos);\n}\n\n\nMovingObject.prototype.collideWith = function (otherObject) {\n\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n\n    let distance = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2) + Math.pow((this.pos[1] - otherObject.pos[1]), 2));\n\n    return (distance < (this.radius + otherObject.radius));\n\n};\n\n\nMovingObject.prototype.isWrappable = true;\n// nothing should be wrappable \n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nUtil.inherits(MovingObject, Ship);\n\nShip.COLOR = \"green\";\nShip.RADIUS = 15;\nShip.MAX_IMPULSE = 5;\n\nfunction Ship(options) {\n\n    let moOptions = {\n        pos: options.pos,\n        color: Ship.COLOR,\n        radius: Ship.RADIUS,\n        vel: [0, 0],\n        game: options.game\n    }\n    MovingObject.call(this, moOptions);\n\n}\n\nShip.prototype.checkBoundaryConditions = function () {\n    if (this.isOutOfBounds(this.pos)) {\n        let x = (this.pos[0] -= this.vel[0]);\n        let y = (this.pos[1] -= this.vel[1]);\n        this.pos = [x, y];\n        this.vel = [0, 0];\n    }\n}\n\nShip.prototype.power = function (impulse) {\n\n    if (Math.abs(this.vel[0]) < Ship.MAX_IMPULSE) {\n        this.vel[0] += impulse[0];\n    } \n}\n\nShip.prototype.fireBullet = function () {\n    let newVel = [0, -10]\n    let bullet = new Bullet({ pos: [this.pos[0], this.pos[1]], vel: newVel, game: this.game });\n    this.game.add(bullet);\n\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(parentClass, childClass) {\n        function Surrogate() { };\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });