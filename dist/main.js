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

/***/ "./src/alien.js":
/*!**********************!*\
  !*** ./src/alien.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst AlienBullet = __webpack_require__(/*! ./alien_bullet.js */ \"./src/alien_bullet.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nUtil.inherits(MovingObject, Alien);\n\nAlien.COLOR = \"blue\";\nAlien.RADIUS = 20;\n\nfunction Alien(options) {\n\n    let moOptions = {\n        pos: options.pos,\n        color: Alien.COLOR,\n        radius: Alien.RADIUS,\n        vel: [1, 0],\n        game: options.game\n    }\n    MovingObject.call(this, moOptions);\n}\n\nAlien.prototype.collideWith = function (otherObject) {\n    // will need to change this to kill the ship\n\n    if (otherObject instanceof Ship) {\n        this.game.remove(otherObject);\n        this.game.remove(this);\n    } else if (otherObject instanceof Bullet) {\n        this.game.remove(otherObject);\n        this.game.remove(this);\n    } \n}\n\nAlien.prototype.fireBullet = function () {\n    let newVel = [0, 10]\n    let bullet = new AlienBullet({ pos: [this.pos[0], this.pos[1]], vel: newVel, game: this.game });\n    this.game.add(bullet);\n}\n\n\n\nmodule.exports = Alien;\n\n//# sourceURL=webpack:///./src/alien.js?");

/***/ }),

/***/ "./src/alien_bullet.js":
/*!*****************************!*\
  !*** ./src/alien_bullet.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nUtil.inherits(MovingObject, AlienBullet);\n\nAlienBullet.COLOR = \"purple\";\nAlienBullet.RADIUS = 4;\n\nfunction AlienBullet(options) {\n\n    let moOptions = {\n        pos: options.pos,\n        color: AlienBullet.COLOR,\n        radius: AlienBullet.RADIUS,\n        vel: options.vel,\n        game: options.game\n    }\n    MovingObject.call(this, moOptions);\n\n}\n\nAlienBullet.prototype.checkBoundaryConditions = function () {\n    if (this.isOutOfBounds(this.pos)) {\n        this.game.remove(this);\n    }\n}\n\nAlienBullet.prototype.collideWith = function (otherObject) {\n    // need to change this to kill the ship\n// debugger\n    if (otherObject instanceof Ship) {\n        this.game.remove(otherObject);\n        this.game.remove(this);\n    } else if (otherObject instanceof Bullet) {\n        this.game.remove(otherObject);\n        this.game.remove(this);\n    } \n}\n\nAlienBullet.prototype.isWrappable = false;\n\nmodule.exports = AlienBullet;\n\n//# sourceURL=webpack:///./src/alien_bullet.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nUtil.inherits(MovingObject, Bullet);\n\nBullet.COLOR = \"red\";\nBullet.RADIUS = 4;\n\nfunction Bullet(options) {\n\n    let moOptions = {\n        pos: options.pos,\n        color: Bullet.COLOR,\n        radius: Bullet.RADIUS,\n        vel: options.vel,\n        game: options.game\n    }\n    MovingObject.call(this, moOptions);\n\n}\n\nBullet.prototype.checkBoundaryConditions = function () {\n    if (this.isOutOfBounds(this.pos)) {\n        this.game.remove(this);\n    }\n}\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Alien = __webpack_require__(/*! ./alien.js */ \"./src/alien.js\");\nconst AlienBullet = __webpack_require__(/*! ./alien_bullet */ \"./src/alien_bullet.js\");\nconst GameOver = __webpack_require__(/*! ./game_over */ \"./src/game_over.js\");\n\n\n\nfunction Game() {\n    this.width = 800;\n    this.height = 800;\n    this.initializeLevel();\n    \n}\n\nGame.prototype.initializeLevel = function () {\n \n    this.bullets = [];\n    this.aliens = [];\n    this.alienBullets = [];\n    this.ship = new Ship({ pos: this.shipPosition(), game: this })\n    this.addAliens();\n    this.alienBullet = 120;\n}\n\n\nGame.prototype.shipPosition = function () {\n    let x = (this.width/2);\n    let y = (this.height - (Ship.RADIUS + 1));\n    let pos = [x, y];\n    return pos;\n}\n\nGame.prototype.addAliens = function () {\n\n    let grid = [];\n    let alienX = 2 * Alien.RADIUS + 10;\n    let alienY = 2 * Alien.RADIUS + 10;\n\n    for (let i = 0; i < 8; i++) {\n        for (let j = 0; j < 5; j++) {\n            grid[i] = new Alien({ pos: [100 + i * alienX, 100 + j * alienY], game: this });\n            this.add(grid[i]); \n        }   \n    }\n}\n\nGame.prototype.draw = function (game, ctx) {\n    ctx.clearRect(0, 0, this.width, this.height);\n    this.allObjects().forEach(obj => obj.draw(ctx));\n}\n\nGame.prototype.moveObjects = function () {\n    this.allObjects().forEach(obj => obj.move());\n\n    if (this.areAliensOutOfBounds()) {\n        this.aliens.forEach(alien => {\n            alien.vel[0] = (alien.vel[0] * -1);\n            alien.vel[1] += 40;\n            alien.move();\n            alien.vel[1] = 0;\n        });\n    }\n    \n}\n\nGame.prototype.areAliensOutOfBounds = function () {\n    \n    for (let i = 0; i < this.aliens.length; i++) {\n        if (this.isOutOfBounds(this.aliens[i].pos)) return true;\n    } \n    return false;\n}\n\nGame.prototype.checkCollisions = function () {\n    let array = this.allObjects();\n\n    for (let i = 0; i < array.length - 1; i++) {\n        for (let j = i + 1; j < array.length; j++) {\n            if (array[i].isCollidedWith(array[j])) {\n                array[i].collideWith(array[j]);\n            }\n        }\n    }\n};\n\nGame.prototype.step = function () {\n\n    this.moveObjects();\n    this.fireAlienBullets();\n    this.checkCollisions();\n\n    if (this.aliens.length === 0) {\n        window.gv.gameState = new GameOver(); \n    } \n\n};\n\nGame.prototype.remove = function (obj) {\n\n    if (obj instanceof Alien) {\n        this.aliens.splice(this.aliens.indexOf(obj), 1)\n    } else if (obj instanceof Bullet) {\n        this.bullets.splice(this.bullets.indexOf(obj), 1)\n    } else if (obj instanceof AlienBullet) {\n        this.alienBullets.splice(this.alienBullets.indexOf(obj), 1)\n    }\n}\n\n\nGame.prototype.allObjects = function () {\n    // ship does not collide with anything \n    let x = this.aliens.concat(this.alienBullets).concat(this.bullets).concat(this.ship);\n    return x;\n}\n\nGame.prototype.add = function (obj) {\n\n    if (obj instanceof Alien) {\n        this.aliens.push(obj)\n    } else if (obj instanceof Bullet) {\n        this.bullets.push(obj)\n    } else if (obj instanceof AlienBullet) {\n        this.alienBullets.push(obj)\n    }\n}\n\nGame.prototype.isOutOfBounds = function (pos) {\n    return (pos[0] < 0 || pos[1] < 0 || pos[0] > this.width || pos[1] > this.height);\n}\n\nGame.prototype.fireAlienBullets = function () {\n    this.alienBullet -= 1;\n    if (this.alienBullet === 0) {\n\n        if (this.aliens.length !== 0) {\n            index = this.getRandomInt(this.aliens.length);\n            this.aliens[index].fireBullet();\n            this.alienBullet = this.getRandomInt(100) + 100;\n        } \n    }\n}\n\nGame.prototype.getRandomInt = function (max) {\n    return Math.floor(Math.random() * Math.floor(max));\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_over.js":
/*!**************************!*\
  !*** ./src/game_over.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameOver() {\n\n}\n\nGameOver.prototype.step = function (game) {\n\n};\n\nGameOver.prototype.draw = function (game, ctx) {\n\n    ctx.clearRect(0, 0, game.width, game.height);\n// debugger\n    ctx.font = \"30px Arial\";\n    ctx.fillStyle = 'red';\n    ctx.textBaseline = \"center\";\n    ctx.textAlign = \"center\";\n    ctx.fillText(\"Game Over!\", game.width / 2, game.height / 2 - 40);\n    ctx.font = \"16px Arial\";\n    ctx.font = \"16px Arial\";\n    ctx.fillText(\"Press 'K' to play again.\", game.width / 2, game.height / 2 + 40);\n};\n\n\nmodule.exports = GameOver;\n\n//# sourceURL=webpack:///./src/game_over.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const LevelStart = __webpack_require__(/*! ./level_start */ \"./src/level_start.js\");\nconst StartGame = __webpack_require__(/*! ./start_game */ \"./src/start_game.js\");\n\n\nfunction GameView(game, ctx) {\n\n    this.game = game;\n    this.ctx = ctx;\n    this.gameState = new StartGame();\n}\n\nGameView.prototype.start = function () {\n    let that = this;\n\n    setInterval(function () {\n        that.gameState.step();\n        that.gameState.draw(that.game, that.ctx);\n    }, 20);\n    this.bindKeyHandlers();\n}\n\n\nGameView.prototype.left = function (ship) {\n    ship.power([-1, 0]);\n}\n\nGameView.prototype.right = function (ship) {\n    ship.power([1, 0]);\n}\n\nGameView.prototype.bindKeyHandlers = function () {\n    const game = this.game;\n    key('a', function () { GameView.prototype.left(game.ship) });\n    key('d', function () { GameView.prototype.right(game.ship) });\n    key('space', function () { game.ship.fireBullet() });\n    key('k', function () { \n        // debugger\n        window.gv.gameState = new LevelStart();\n    });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst StartGame = __webpack_require__(/*! ./start_game */ \"./src/start_game.js\");\nconst LevelStart = __webpack_require__(/*! ./level_start */ \"./src/level_start.js\");\nconst Starfield = __webpack_require__(/*! ./starfield */ \"./src/starfield.js\");\n\n\nconsole.log(\"Webpack is working!\");\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n\n\n    const starfield = document.getElementById(\"starfield\");\n    const stars = new Starfield(); \n    stars.initialize(starfield);\n    stars.start();\n\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext('2d');\n    window.ctx = ctx;\n   \n    const g = new Game();\n    const gv = new GameView(g, ctx);\n    window.gv = gv;\n    gv.start();\n\n\n\n\n\n    console.log('DOM fully loaded and parsed');\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level_start.js":
/*!****************************!*\
  !*** ./src/level_start.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction LevelStart() {\n    this.countdownMessage = \"3\";\n    this.countdown = 120;\n}\n\nLevelStart.prototype.step = function () {\n\n    this.countdown -= 1;\n\n    if (this.countdown <= 80) {\n        this.countdownMessage = \"2\";\n    }\n    if (this.countdown <= 40) {\n        this.countdownMessage = \"1\";\n    }\n    if (this.countdown <= 0) {\n       window.gv.game.initializeLevel();\n       window.gv.gameState = window.gv.game;\n    }\n\n};\n\nLevelStart.prototype.draw = function (game, ctx) {\n\n    ctx.clearRect(0, 0, game.width, game.height);\n    ctx.font = \"36px Arial\";\n    ctx.fillStyle = 'red';\n    ctx.textBaseline = \"middle\";\n    ctx.textAlign = \"center\";\n    ctx.font = \"24px Arial\";\n    ctx.fillText(\"Ready in \" + this.countdownMessage, game.width / 2, game.height / 2 + 36);\n    return;\n};\n\nmodule.exports = LevelStart;\n\n//# sourceURL=webpack:///./src/level_start.js?");

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

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\n\nUtil.inherits(MovingObject, Ship);\n\nShip.COLOR = \"green\";\nShip.RADIUS = 15;\nShip.MAX_IMPULSE = 5;\n\nfunction Ship(options) {\n\n    let moOptions = {\n        pos: options.pos,\n        color: Ship.COLOR,\n        radius: Ship.RADIUS,\n        vel: [0, 0],\n        game: options.game\n    }\n    MovingObject.call(this, moOptions);\n\n}\n\nShip.prototype.checkBoundaryConditions = function () {\n    if (this.isOutOfBounds(this.pos)) {\n        let x = (this.pos[0] -= this.vel[0]);\n        let y = (this.pos[1] -= this.vel[1]);\n        this.pos = [x, y];\n        this.vel = [0, 0];\n    }\n}\n\nShip.prototype.power = function (impulse) {\n\n    if (Math.abs(this.vel[0]) < Ship.MAX_IMPULSE) {\n        this.vel[0] += impulse[0];\n    } \n}\n\nShip.prototype.fireBullet = function () {\n    let newVel = [0, -10]\n    let bullet = new Bullet({ pos: [this.pos[0], this.pos[1]], vel: newVel, game: this.game });\n    this.game.add(bullet);\n\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/starfield.js":
/*!**************************!*\
  !*** ./src/starfield.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Starfield() {\n    this.fps = 30;\n    this.canvas = null;\n    this.width = 0;\n    this.width = 0;\n    this.minVelocity = 15;\n    this.maxVelocity = 30;\n    this.stars = 100;\n    this.intervalId = 0;\n}\n\n\nStarfield.prototype.initialize = function (div) {\n    let self = this;\n\n    this.containerDiv = div;\n    self.width = window.innerWidth;\n    self.height = window.innerHeight;\n\n    window.onresize = function (event) {\n        self.width = window.innerWidth;\n        self.height = window.innerHeight;\n        self.canvas.width = self.width;\n        self.canvas.height = self.height;\n        self.draw();\n    }\n\n    let canvas = document.createElement('canvas');\n    div.appendChild(canvas);\n    this.canvas = canvas;\n    this.canvas.width = this.width;\n    this.canvas.height = this.height;\n};\n\nStarfield.prototype.start = function () {\n\n    let stars = [];\n    for (let i = 0; i < this.stars; i++) {\n        stars[i] = new Star(Math.random() * this.width, Math.random() * this.height, Math.random() * 3 + 1,\n            (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);\n    }\n    this.stars = stars;\n\n    let self = this;\n    this.intervalId = setInterval(function () {\n        self.update();\n        self.draw();\n    }, 1000 / this.fps);\n};\n\nStarfield.prototype.stop = function () {\n    clearInterval(this.intervalId);\n};\n\nStarfield.prototype.update = function () {\n    let dt = 1 / this.fps;\n\n    for (let i = 0; i < this.stars.length; i++) {\n        let star = this.stars[i];\n        star.y += dt * star.velocity;\n        if (star.y > this.height) {\n            this.stars[i] = new Star(Math.random() * this.width, 0, Math.random() * 3 + 1,\n                (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);\n        }\n    }\n};\n\nStarfield.prototype.draw = function () {\n\n    let ctx = this.canvas.getContext(\"2d\");\n\n    ctx.fillStyle = '#000000';\n    ctx.fillRect(0, 0, this.width, this.height);\n\n    ctx.fillStyle = '#ffffff';\n    for (let i = 0; i < this.stars.length; i++) {\n        let star = this.stars[i];\n        ctx.fillRect(star.x, star.y, star.size, star.size);\n    }\n};\n\nfunction Star(x, y, size, velocity) {\n    this.x = x;\n    this.y = y;\n    this.size = size;\n    this.velocity = velocity;\n}\n\nmodule.exports = Starfield;\n\n//# sourceURL=webpack:///./src/starfield.js?");

/***/ }),

/***/ "./src/start_game.js":
/*!***************************!*\
  !*** ./src/start_game.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction StartGame(game) {\n  \n}\n\nStartGame.prototype.enter = function (game) {\n\n\n};\n\nStartGame.prototype.step = function (game) {\n\n\n};\n\nStartGame.prototype.draw = function (game, ctx) {\n\n    ctx.clearRect(0, 0, game.width, game.height);\n    ctx.font = \"30px Arial\";\n    ctx.fillStyle = \"red\";\n    ctx.textBaseline = \"middle\";\n    ctx.textAlign = \"center\";\n    ctx.fillText(\"Space Invaders\", game.width / 2, game.height / 2 - 40);\n    ctx.font = \"16px Arial\";\n    ctx.fillText(\"Press 'K' to start a game.\", game.width / 2, game.height / 2);\n};\n\n\nmodule.exports = StartGame;\n\n//# sourceURL=webpack:///./src/start_game.js?");

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