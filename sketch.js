function setup() {
  createCanvas(3000, 3000);
  background( 255, 255, 255);
}

function draw() {
  fill( 0, 102, 255, 60);
triangle(mouseX, mouseY, 50, 70, 60, 70);
}
