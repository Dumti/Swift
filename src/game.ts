/// <reference path="../vendor/p5.d.ts"/>

enum GameState {
  TITLESCREEN,
  RUNNING,
  GAMEOVER
};

class SwiftGame {
  state = GameState.TITLESCREEN;
  score = 0;

  width = 600;
  height = 600;

  enemies: Enemy[] = [];

  player = new Player(this);

  setup() {
    createCanvas(this.width, this.height);

    for (var i = 0; i < 200; i++) {
      this.enemies.push(new Enemy(this));
    }

    this.restart();
  }

  restart() {
    this.score = 0;
    this.player.health = 3;
    this.state = GameState.TITLESCREEN;
  }

  render() {
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
  }

  tick() {
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
  }

  renderTitleScreen() {
    background(0);
    textAlign(CENTER);
    fill(255,255,255);
    textSize(66);
    text("Swift",this.width/2,this.height/2)
    textSize(14);
    text("Press SPACEBAR to start", this.width/2, this.height-20);
  }

  renderGame() {
    //background colour
    background(0);

    this.player.render();

    for (const enemy of this.enemies) {
      enemy.render();
    }

    fill(255, 255, 255)
    textSize(18);
    textAlign(LEFT);
    text("Score: " + this.score, 0, 18)

    text("Health: " + this.player.health, 0, 36);

  }

  renderGameOver() {
    background(200);
    textAlign(CENTER);
    fill(255);
    textSize(50);
    text("Your Score", this.width / 2, this.height / 2 - 120);
    textSize(120);
    text("" + this.score, this.width / 2, this.height / 2);
    textSize(14);
    text("Press SPACEBAR to return", this.width / 2, this.height / 2 + 50);
  }

  tickTitleScreen() {
    if (keyIsDown(32)) {
      this.state = GameState.RUNNING;
    }
  }

  tickGame() {
    this.player.tick();

    for (const enemy of this.enemies) {
      enemy.tick();
      if (enemy.collides()) {
        this.player.registerHit();
      }
    }

    this.score += 1; //increases score point by 1 per frame.
  }

  tickGameOver() {
    if (keyIsDown(32)) {
      this.restart();
      this.state = GameState.RUNNING;
    }
  }
}

let game = new SwiftGame();

function setup() {
  game.setup();
}

function draw() {
  game.tick();
  game.render();
}