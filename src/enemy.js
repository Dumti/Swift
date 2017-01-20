//enemy
function Enemy() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(6, 10);
  this.xspeed = random(-2, 2);
  this.yspeed = random(-2, 2);
  this.direction = 1;
  this.collisionLastTick = false;
}

Enemy.prototype.collides = function() {
  let collision = collideCircleCircle(this.x, this.y, this.diameter, ballx, bally, 5);
  if (!this.collisionLastTick && collision) {
    this.collisionLastTick = true;
    return true;
  }
  this.collisionLastTick = collision;
  return false;
}

    


//Enemy.prototype.collision = function collision(pX, pY, pD, sX, sY, sD) {
  //console.log('hello');
  // change the condition to see if it's collided
  
  //print(enemy.length);
  //  for (j = 0; j < enemy.length; j++) {
      //print(enemy[j].x);
      //print(enemy[j].y);
  //  if (dist(enemy.x, Player.x, enemy.y, Player.y) === 0) {
     // print('enemy')
//    return true;
//  } else {
    //console.log(false);
//    return false;
//  }
    //}
  

//}

//Enemy.prototype.overlap = function overlap(Player) {
 // console.log('testtest')
  //check if enemy is hitting ball
 // this.hit = this.collision(Player.x, Player.y, 5, enemy[i], enemy[j], this.diameter); 

//  if (this.overlap) {
 //   console.log('blah');
//    health = health + healthDecrease;
  //  if (health < 0) { //decrease health by 1 whenever collision with enemy occurs.
  //    gameOver(); // if health = 0, change over to gameOver()
  //  }
  //}
//};

Enemy.prototype.move = function move() {
  this.x += this.xspeed * this.direction;
  this.y += this.yspeed * this.direction;
};

Enemy.prototype.display = function display() {
  ellipse(this.x, this.y, this.diameter, this.diameter);
};

//Bounce when it hits the canvas edge
Enemy.prototype.turn = function turn() {
  if (this.x < 0) {
    this.x = 0;
    this.direction = -this.direction;
  } else if (this.x > width) {
    this.x = width;
    this.direction = -this.direction;
  } else if (this.y < 0) {
    this.y = 0;
    this.direction = -this.direction;
  } else if (this.y > height) {
    this.y = height;
    this.direction = -this.direction;
  }
};

Enemy.prototype.display = function display() {
  ellipse(this.x, this.y, this.diameter, this.diameter);
};

