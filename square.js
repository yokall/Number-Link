function Square(x, y, start, end) {
  this.x = x;
  this.y = y;
  this.startSquare = start;
  this.endSquare = end;

  this.width = 50;
  this.height = 50;

  this.draw = function () {
    if (mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height) {
      fill('red');
    } else {
      fill(18, 17, 17);
    }

    rect(this.x, this.y, this.width, this.height);

    if (this.startSquare > 0) {
      fill(156, 156, 156);
      ellipse(this.x + 25, this.y + 25, 40, 40);
      fill('white');
      textSize(32);
      text(this.startSquare, this.x + 15, this.y + 35);
    }

    if (this.endSquare > 0) {
      fill(156, 156, 156);
      ellipse(this.x + 25, this.y + 25, 40, 40);
      fill('white');
      textSize(32);
      text("X", this.x + 15, this.y + 35);
    }
  }

  this.center = function () {
    return new Point(this.x + (this.width / 2), this.y + (this.height / 2));
  }
}