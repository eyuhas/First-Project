function setup() {
  createCanvas(3000, 3000, WEBGL);
  background( 120, 0, 120, 120);
}

function draw() {
  fill( 0, 102, 255, 60);
  stroke(255, 255, 255);
triangle(mouseX + 10, mouseY, mouseX - 10, mouseY, mouseX ,mouseY - 10);
}
