class Grid {
  constructor() {
    this._grid = [
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

    for (var y = 0; y < this._grid.length; y++) {
      for (var x = 0; x < this._grid[y].length; x++) {
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
        this._grid[y][x] = new Square(xOffset + (x * 50), yOffset + (y * 50), start, end);
      }
    }
  }

  draw() {
    for (var y = 0; y < this._grid.length; y++) {
      for (var x = 0; x < this._grid[y].length; x++) {
        this._grid[y][x].draw();
      }
    }
  }

  getMouseSquare() {
    for (var y = this._grid.length - 1; y >= 0; y--) {
      if (this._grid[y][0].y < mouseY) {
        for (var x = this._grid[y].length - 1; x >= 0; x--) {
          if (this._grid[y][x].x < mouseX) {
            var centerPoint = this._grid[y][x].center();

            if (Math.abs(centerPoint.x - mouseX) < 15 &&
              Math.abs(centerPoint.y - mouseY) < 15) {
              return this._grid[y][x];
            }
          }
        }
      }
    }
  }
}