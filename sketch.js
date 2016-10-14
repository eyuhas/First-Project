function setup() {
  createCanvas(3000, 3000);
  background( 120, 0, 120, 120);
}

function draw() {
  if (mouseIsPressed){
    fill(0)
  }
  else{
  fill( 0, 102, 255, 60);}
triangle(mouseX + 10, mouseY, mouseX - 10, mouseY, mouseX , mouseY - 10);
}
