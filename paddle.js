class Paddle {
  constructor() {
    this.width = 120;
    this.height = 20;
    this.pos = createVector(width / 2, height - this.height);
    this.step = 7;
    this.moveLeft = false;
    this.moveRight = false;
  }

  show() {
    fill(255, 0, 255);
    noStroke();
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

  move() {
    if (this.moveLeft) {
      this.pos.x -= this.step;
    }
    if (this.moveRight) {
      this.pos.x += this.step;
    }
  }

  cekTepi() {
    if (this.pos.x < 0) {
      this.pos.x = 0;
    }
    if (this.pos.x > width - this.width) {
      this.pos.x = width - this.width;
    }
  }
}