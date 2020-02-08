var grid;
var paths = [];
var currentPath;

function setup() {
  createCanvas(450, 450);

  grid = new Grid();
  currentPath = new Path();
}

function mouseDragged() {
  var currentPoint = grid.getMousePoint();

  if (currentPoint) {
    currentPath.addPoint(currentPoint);
  }
}

function mouseClicked() {
  paths.push(currentPath);
  currentPath = new Path();
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