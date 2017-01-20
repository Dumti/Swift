 class Enemy {
  private x: number;
  private y: number;
  private diameter: number;
  private xspeed: number;
  private yspeed: number;
  private direction: number;
  private collisionLastTick: boolean;

  constructor(private state: SwiftGame) {
    this.x = random(this.state.width);
    this.y = random(this.state.height);
    this.diameter = random(6, 10);
    this.xspeed = random(-2, 2);
    this.yspeed = random(-2, 2);
    this.direction = 1;
    this.collisionLastTick = false;
  }

  collides() {
    let collision = collideCircleCircle(this.x, this.y, this.diameter, this.state.player.x, this.state.player.y, 5);
    if (!this.collisionLastTick && collision) {
      this.collisionLastTick = true;
      return true;
    }
    this.collisionLastTick = collision;
    return false;
  }

  render() {
    fill(random(0, 255), 0, random(0, 255));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  tick() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;

    if (this.x < 0) {
      this.x = 0;
      this.direction = -this.direction;
    } else if (this.x > this.state.width) {
      this.x = this.state.width;
      this.direction = -this.direction;
    } else if (this.y < 0) {
      this.y = 0;
      this.direction = -this.direction;
    } else if (this.y > this.state.height) {
      this.y = this.state.height;
      this.direction = -this.direction;
    }
  }
}
