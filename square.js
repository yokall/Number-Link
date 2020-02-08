function Square(x, y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 50;

  this.draw = function () {
    if (mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height) {
      fill('red');
    } else {
      noFill();
    }

    rect(this.x, this.y, this.width, this.height);
  }

  this.center = function () {
    return new Point(this.x + (this.width / 2), this.y + (this.height / 2));
  }
}