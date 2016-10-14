
function setup() {
  createCanvas(3000, 3000);
  background( 120, 0, 120, 120);
}

function draw() {
  if (keyCode == LEFT_ARROW) {
    fill(0,0, 0);}
    else if (keyCode == RIGHT_ARROW){
      fill(255, 255, 255);}
  if (keyIsPressed){
    fill(255, 0, 0);
  }
  else{
  fill( 0, 102, 255, 60);}
triangle(mouseX + 10, mouseY, mouseX - 10, mouseY, mouseX , mouseY - 10);
}
