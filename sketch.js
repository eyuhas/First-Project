function setup() {
  noCursor();
  createCanvas(3000, 3000);
  background( 120, 0, 120, 120);
}

function draw() {
  fill( 0, 102, 255, 60);
triangle(sin(mouseX + 10), cos(mouseY), sin(mouseX - 10), cos(mouseY), sin(mouseX) , c0s(mouseY - 10));
}
