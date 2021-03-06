let snake;
let rez = 20;
let food;
let w;
let h;


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  
}
function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
  	snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
  	snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
  	snake.setDir(0, -1);
  } else if (key == ' ') {
  	snake.grow();
  }

}


function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
     foodLocation();
  }
  snake.update();
  snake.show();
  
  
  if (snake.endGame()) {
    var boodschap=document.getElementById("boodschap")
    var typed = new Typed(boodschap, {
      strings: ["W.", "Wil je echt een verschil maken,kom naar TFL. Klik op het logo om in te schrijven."],
      typeSpeed: 30
    });
    // var boodschap=document.getElementById("boodschap")
   document.getElementById("link").style.zIndex = 1;
    // boodschap.style.AnimationPlayState = "running";
    background(255, 0, 0);
    noLoop();
  }
  
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, random(1,2),random(1,2));
}
