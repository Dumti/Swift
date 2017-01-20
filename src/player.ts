class Player {
  x = 300;
  y = 300;

  health = 3;
  healthDecrease = -1;

  constructor(public state: SwiftGame) {}

  render() {
    fill(255, 255, 255);
    ellipse(this.x, this.y, 5, 5);
  }

  tick() {
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
    } else if (this.x < 3) {
      this.x = 3;
    } else if (this.y > this.state.height - 3) {
      this.y = this.state.height - 3;
    } else if (this.y < 3) {
      this.y = 3;
    }
  }

  registerHit() {
    if (--this.health <= 0) {
      this.state.state = GameState.GAMEOVER;
    }
  }
}