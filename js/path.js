class Path {
  constructor() {
    this._points = [];
    this._currentPoint = null;
    this._previousPoint = null;
    this._maxLength = 100;
  }

  get length() {
    return this._points.length;
  }

  set maxLength(length) {
    this._maxLength = length;
  }

  get lastPoint() {
    return this._points[this._points.length - 1];
  }

  addPoint(point) {
    // cant move diagonally
    if (this._currentPoint && this._currentPoint.x != point.x && this._currentPoint.y != point.y) {
      return;
    }

    if (this._previousPoint && point.x == this._previousPoint.x && point.y == this._previousPoint.y) {
      this._points.pop();
      this._currentPoint = this._points[this._points.length - 1];
      this._previousPoint = this._points[this._points.length - 2];
    } else {

      // cant move into existing path point
      for (var i = 0; i < this._points.length; i++) {
        if (this._points[i].x == point.x && this._points[i].y == point.y) {
          return;
        }
      }


      // path can be longer than max length
      if (this._points.length == this._maxLength) {
        return;
      }

      this._points.push(point);

      this._previousPoint = this._currentPoint;
      this._currentPoint = point;
    }
  }

  draw() {
    for (var i = 0; i < this._points.length; i++) {
      fill('blue');
      ellipse(this._points[i].x, this._points[i].y, this._points[i].diameter, this._points[i].diameter);
      noFill();
    }
  }
}