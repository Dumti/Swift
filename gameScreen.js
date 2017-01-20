function gameScreen() {
  //background colour
  background(0);

  //spawns enemy into gamescreen

  for (var i = 0; i < enemy.length; i++) {
    fill(random(0, 255), 0, random(0, 255));
    enemy[i].move();
    enemy[i].display()
    enemy[i].turn()
    if (enemy[i].collides()) {
      health += healthDecrease;
    }
  }

  //Score [TEXT]
  fill(255, 255, 255)
  textSize(18);
  textAlign(LEFT);
  text("Score: " + score, 0, 18)

  //Health [TEXT]
  fill(255, 255, 255);
  textSize(18);
  textAlign(LEFT);
  text("Health: " + health, 0, 36);

  Player();
  //ball();

  score += 1; //increases score point by 1 per frame.
}
