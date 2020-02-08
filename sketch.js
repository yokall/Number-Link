var grid;
var paths = [];
var currentPath;

function setup() {
  createCanvas(450, 450);

  grid = new Grid();
  currentPath = new Path();
}

function mouseDragged() {
  var currentSquare = grid.getMouseSquare();

  if (currentSquare) {
    if ((currentPath.length() == 0 && currentSquare.startSquare > 0) || currentPath.length() > 0) {
      currentPath.addPoint(currentSquare.center());
    }
  }
}

function mouseClicked() {
  if (currentPath.length > 0) {
    paths.push(currentPath);
    currentPath = new Path();
  }
}

function draw() {
  background(46, 45, 43);

  fill(156, 156, 156);
  textSize(32);
  text('Paths: ' + paths.length, 50, 75);

  grid.draw();

  for (let i = 0; i < paths.length; i++) {
    paths[i].draw();
  }

  currentPath.draw();
}