function Path() {
  var points = [];
  var currentPoint = null;
  var previousPoint = null;
  var maxLength = 100;

  this.length = function () {
    return points.length;
  }

  this.setMaxLength = function (length) {
    maxLength = length;
  }

  this.addPoint = function (point) {
    // cant move diagonally
    if (currentPoint && currentPoint.x != point.x && currentPoint.y != point.y) {
      return;
    }

    if (previousPoint && point.x == previousPoint.x && point.y == previousPoint.y) {
      points.pop();
      currentPoint = points[points.length - 1];
      previousPoint = points[points.length - 2];
    } else {

      // cant move into existing path point
      for (var i = 0; i < points.length; i++) {
        if (points[i].x == point.x && points[i].y == point.y) {
          return;
        }
      }


      // path can be longer than max length
      if (points.length == maxLength) {
        return;
      }

      points.push(point);

      previousPoint = currentPoint;
      currentPoint = point;
    }
  }

  this.draw = function () {
    for (var i = 0; i < points.length; i++) {
      fill('blue');
      ellipse(points[i].x, points[i].y, points[i].diameter, points[i].diameter);
      noFill();
    }
  }
}