"use strict";
var Enemy = (function () {
    function Enemy(state) {
        this.state = state;
        this.x = random(this.state.width);
        this.y = random(this.state.height);
        this.diameter = random(6, 10);
        this.xspeed = random(-2, 2);
        this.yspeed = random(-2, 2);
        this.direction = 1;
        this.collisionLastTick = false;
    }
    Enemy.prototype.collides = function () {
        var collision = collideCircleCircle(this.x, this.y, this.diameter, this.state.player.x, this.state.player.y, 5);
        if (!this.collisionLastTick && collision) {
            this.collisionLastTick = true;
            return true;
        }
        this.collisionLastTick = collision;
        return false;
    };
    Enemy.prototype.render = function () {
        fill(random(0, 255), 0, random(0, 255));
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    Enemy.prototype.tick = function () {
        this.x += this.xspeed * this.direction;
        this.y += this.yspeed * this.direction;
        if (this.x < 0) {
            this.x = 0;
            this.direction = -this.direction;
        }
        else if (this.x > this.state.width) {
            this.x = this.state.width;
            this.direction = -this.direction;
        }
        else if (this.y < 0) {
            this.y = 0;
            this.direction = -this.direction;
        }
        else if (this.y > this.state.height) {
            this.y = this.state.height;
            this.direction = -this.direction;
        }
    };
    return Enemy;
}());
"use strict";
var Player = (function () {
    function Player(state) {
        this.state = state;
        this.x = 300;
        this.y = 300;
        this.health = 3;
        this.healthDecrease = -1;
    }
    Player.prototype.render = function () {
        fill(255, 255, 255);
        ellipse(this.x, this.y, 5, 5);
    };
    Player.prototype.tick = function () {
        if (keyIsDown(LEFT_ARROW))
            this.x -= 3;
        if (keyIsDown(RIGHT_ARROW))
            this.x += 3;
        if (keyIsDown(UP_ARROW))
            this.y -= 3;
        if (keyIsDown(DOWN_ARROW))
            this.y += 3;
        if (this.x > this.state.width - 3) {
            this.x = this.state.width - 3;
        }
        else if (this.x < 3) {
            this.x = 3;
        }
        else if (this.y > this.state.height - 3) {
            this.y = this.state.height - 3;
        }
        else if (this.y < 3) {
            this.y = 3;
        }
    };
    Player.prototype.registerHit = function () {
        if (--this.health <= 0) {
            this.state.state = GameState.GAMEOVER;
        }
    };
    return Player;
}());
/// <reference path="../vendor/p5.d.ts"/>
"use strict";
var GameState;
/// <reference path="../vendor/p5.d.ts"/>
(function (GameState) {
    GameState[GameState["TITLESCREEN"] = 0] = "TITLESCREEN";
    GameState[GameState["RUNNING"] = 1] = "RUNNING";
    GameState[GameState["GAMEOVER"] = 2] = "GAMEOVER";
})(GameState || (GameState = {}));
;
var SwiftGame = (function () {
    function SwiftGame() {
        this.state = GameState.TITLESCREEN;
        this.score = 0;
        this.width = 600;
        this.height = 600;
        this.enemies = [];
        this.player = new Player(this);
    }
    SwiftGame.prototype.setup = function () {
        createCanvas(this.width, this.height);
        for (var i = 0; i < 200; i++) {
            this.enemies.push(new Enemy(this));
        }
        this.restart();
    };
    SwiftGame.prototype.restart = function () {
        this.score = 0;
        this.player.health = 3;
        this.state = GameState.TITLESCREEN;
    };
    SwiftGame.prototype.render = function () {
        switch (this.state) {
            case GameState.TITLESCREEN:
                this.renderTitleScreen();
                break;
            case GameState.RUNNING:
                this.renderGame();
                break;
            case GameState.GAMEOVER:
                this.renderGameOver();
                break;
        }
    };
    SwiftGame.prototype.tick = function () {
        switch (this.state) {
            case GameState.TITLESCREEN:
                this.tickTitleScreen();
                break;
            case GameState.RUNNING:
                this.tickGame();
                break;
            case GameState.GAMEOVER:
                this.tickGameOver();
                break;
        }
    };
    SwiftGame.prototype.renderTitleScreen = function () {
        background(0);
        textAlign(CENTER);
        fill(255, 255, 255);
        textSize(66);
        text("Swift", this.width / 2, this.height / 2);
        textSize(14);
        text("Press SPACEBAR to start", this.width / 2, this.height - 20);
    };
    SwiftGame.prototype.renderGame = function () {
        //background colour
        background(0);
        this.player.render();
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemy = _a[_i];
            enemy.render();
        }
        fill(255, 255, 255);
        textSize(18);
        textAlign(LEFT);
        text("Score: " + this.score, 0, 18);
        text("Health: " + this.player.health, 0, 36);
    };
    SwiftGame.prototype.renderGameOver = function () {
        background(200);
        textAlign(CENTER);
        fill(255);
        textSize(50);
        text("Your Score", this.width / 2, this.height / 2 - 120);
        textSize(120);
        text("" + this.score, this.width / 2, this.height / 2);
        textSize(14);
        text("Press SPACEBAR to return", this.width / 2, this.height / 2 + 50);
    };
    SwiftGame.prototype.tickTitleScreen = function () {
        if (keyIsDown(32)) {
            this.state = GameState.RUNNING;
        }
    };
    SwiftGame.prototype.tickGame = function () {
        this.player.tick();
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemy = _a[_i];
            enemy.tick();
            if (enemy.collides()) {
                this.player.registerHit();
            }
        }
        this.score += 1; //increases score point by 1 per frame.
    };
    SwiftGame.prototype.tickGameOver = function () {
        if (keyIsDown(32)) {
            this.restart();
            this.state = GameState.RUNNING;
        }
    };
    return SwiftGame;
}());
var game = new SwiftGame();
function setup() {
    game.setup();
}
function draw() {
    game.tick();
    game.render();
}
