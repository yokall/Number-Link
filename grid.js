function Grid() {
  this.grid = [
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x']
  ];

  var xOffset = 100;
  var yOffset = 100;

  for (y = 0; y < this.grid.length; y++) {
    for (x = 0; x < this.grid[y].length; x++) {
      this.grid[y][x] = new Square(xOffset + (x * 50), yOffset + (y * 50));
    }
  }

  this.draw = function () {
    for (y = 0; y < this.grid.length; y++) {
      for (x = 0; x < this.grid[y].length; x++) {
        this.grid[y][x].draw();
      }
    }
  }

  this.getMousePoint = function () {
    for (y = this.grid.length - 1; y >= 0; y--) {
      if (this.grid[y][0].y < mouseY) {
        for (x = this.grid[y].length - 1; x >= 0; x--) {
          if (this.grid[y][x].x < mouseX) {
            var centerPoint = this.grid[y][x].center();

            if (Math.abs(centerPoint.x - mouseX) < 15 &&
              Math.abs(centerPoint.y - mouseY) < 15) {
              return centerPoint;
            }
          }
        }
      }
    }
  }
}