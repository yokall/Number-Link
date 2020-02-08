function Grid() {
  this.grid = [
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x']
  ];

  var gridDesign = [
    ['4', '', '', '3', ''],
    ['x', '', '', '', 'x'],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '3', '', 'x', '']
  ];

  var xOffset = 100;
  var yOffset = 100;

  for (y = 0; y < this.grid.length; y++) {
    for (x = 0; x < this.grid[y].length; x++) {
      var start = 0;
      var end = false;

      if (gridDesign[y][x] != '') {
        if (gridDesign[y][x] == 'x') {
          end = true;
        }
        else {
          start = parseInt(gridDesign[y][x]);
        }
      }
      this.grid[y][x] = new Square(xOffset + (x * 50), yOffset + (y * 50), start, end);
    }
  }

  this.draw = function () {
    for (y = 0; y < this.grid.length; y++) {
      for (x = 0; x < this.grid[y].length; x++) {
        this.grid[y][x].draw();
      }
    }
  }

  this.getMouseSquare = function () {
    for (y = this.grid.length - 1; y >= 0; y--) {
      if (this.grid[y][0].y < mouseY) {
        for (x = this.grid[y].length - 1; x >= 0; x--) {
          if (this.grid[y][x].x < mouseX) {
            var centerPoint = this.grid[y][x].center();

            if (Math.abs(centerPoint.x - mouseX) < 15 &&
              Math.abs(centerPoint.y - mouseY) < 15) {
              return this.grid[y][x];
            }
          }
        }
      }
    }
  }
}