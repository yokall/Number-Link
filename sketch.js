var grid;
var path;

function setup() {
  createCanvas(450, 450);

  grid = new Grid();
  path = new Path();
}

function mouseDragged() {
  var currentPoint = grid.getMousePoint();

  if (currentPoint) {
    path.addPoint(currentPoint);
  }
}

function draw() {
  background(220);

  grid.draw();
  path.draw();
}