//GAMEOVER
function gameOver() {
  background(200);
  textAlign(CENTER);
  fill(255);
  textSize(50);
  text("Your Score", width / 2, height / 2 - 120);
  textSize(120);
  text(score, width / 2, height / 2);
  textSize(14);
  text("Press SPACEBAR to return", width / 2, height / 2 + 50);
}