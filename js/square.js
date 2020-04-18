class Square {
  constructor(x, y, start, end) {
    this._x = x;
    this._y = y;
    this._startSquare = start;
    this._endSquare = end;

    this._width = 50;
    this._height = 50;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get startSquare() {
    return this._startSquare;
  }

  get endSquare() {
    return this._endSquare;
  }

  draw() {
    if (mouseX > this._x &&
      mouseX < this._x + this._width &&
      mouseY > this._y &&
      mouseY < this._y + this._height) {
      fill('red');
    } else {
      fill(18, 17, 17);
    }

    rect(this._x, this._y, this._width, this._height);

    if (this._startSquare > 0) {
      fill(156, 156, 156);
      ellipse(this._x + 25, this._y + 25, 40, 40);
      fill('white');
      textSize(32);
      text(this._startSquare, this._x + 15, this._y + 35);
    }

    if (this._endSquare > 0) {
      fill(156, 156, 156);
      ellipse(this._x + 25, this._y + 25, 40, 40);
      fill('white');
      textSize(32);
      text("X", this._x + 15, this._y + 35);
    }
  }

  center() {
    return new Point(this._x + (this._width / 2), this._y + (this._height / 2));
  }
}