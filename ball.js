class Ball {
  constructor() {
    this.reset();
  }

  reset() {
    this.r = 20;
    this.pos = createVector(width / 2, height / 2);
    this.stepX = 1;
    this.stepY = 2;
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  update() {
    this.pos.x += this.stepX;
    this.pos.y += this.stepY;
  }

  hitPaddle(p) {
    if (this.pos.x > p.pos.x - this.r && this.pos.x < p.pos.x + p.width + this.r) {
      if (this.pos.y < p.pos.y && this.pos.y > p.pos.y - this.r) {
          return true;
        }
      }
    }

    bounce() {
      this.stepY = this.stepY * -1;
    }

    checkEdge() {
      if (this.pos.y > height + this.r) {
        this.reset();
      }
      if (this.pos.x < 0 + this.r / 2 || this.pos.x > width - this.r / 2) {
        this.stepX = this.stepX * -1;
      }
    }
  }