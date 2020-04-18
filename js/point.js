class Point {
  constructor(x, y) {
    this._x = x;
    this._y = y;
    this._diameter = 20;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get diameter() {
    return this._diameter;
  }
}