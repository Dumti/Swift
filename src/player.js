//Player
function Player() {

  //ball = function() {

      fill(255, 255, 255);
      ellipse(ballx, bally, 5, 5);

      //Allows to control the ball by arrow keys
      if (keyIsDown(LEFT_ARROW))
        ballx -= 3;

      if (keyIsDown(RIGHT_ARROW))
        ballx += 3;

      if (keyIsDown(UP_ARROW))
        bally -= 3;

      if (keyIsDown(DOWN_ARROW))
        bally += 3;


    //}
    //Preventing the ballf rom moving beyond the canvas range
  if (ballx > width - 3) {
    ballx = width - 3;
  } else if (ballx < 3) {
    ballx = 3;
  } else if (bally > height - 3) {
    bally = height - 3;
  } else if (bally < 3) {
    bally = 3;
  }

  if (health <= 0) {
    gameOver();
  }
}