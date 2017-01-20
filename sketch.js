//VARIABLES//

var page = 0;
var score = 0;

var ballx = 300;
var bally = 300;


var health = 3;
var healthDecrease = -1;

var enemy = [];

//--------------------------------------------//


function setup() {
  createCanvas(600, 600);
  //create enemy
  for (var i = 0; i < 200; i++) {
    enemy.push(new Enemy());
  }
  
  //Checking if collision boundary is working
  collideDebug(true,20,255,0,100);
  
  //**COLLISION REQUIREMENT**// //enemy[j] can be found in enemy.js
  /*if(dist(enemy[j].x,enemy[j].y,enemy[j].diamater,Player.x,Player.y, 5) === 0) {
    this.overlap === true;
    print('It works');
    health --;
    if (health < 0) { ///decrease health by 1 whenever collision with enemy occurs.
      print('are you dead');
      gameOver(); // if health = 0, change over to gameOver()
    }
}*/
}

//--------------------------------------//

function draw() {

  if (page === 0) {
    title();
  } else if (page == 1) {
    gameScreen();
  } else if (page == 2) {
    gameOver();
  }
  //print(enemy);
 // for (i = 0; i < 200; i++) {
  //  enemy[i].collision(Player);
 // }

}

//------------------------------------//

//Miscellaneous functions//

//RESET
function restart() {
  score = 0;
  health = 3;
  page = 0;
}

//StartGame
function startGame() {
  page = 1;
}

//Moving around pages
function keyPressed() {
  if (keyCode == 32) {
    if (page === 0) {
      startGame();
    } else if (page == 2)
      restart();
  }
}
