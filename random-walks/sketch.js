class Walker4D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    stroke('rgba(100%, 0%, 0%, 0.2)');
    point(this.x, this.y);
  }

  step() {

    var x = this.x;
    var y = this.y;

    while (x == this.x && y == this.y) {
      var choice = floor(random(0, 4));
      if (choice == 0) {
        x = min(this.x + 1, 640); // right
      } else if (choice == 1) {
        x = max(this.x - 1, 0);   // left
      } else if (choice == 2) {
        y = min(this.y + 1, 360); // down
      } else {
        y = max(this.y - 1, 0);   // up
      }
    }

    this.x = x;
    this.y = y;
  }
}

class Walker9D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    stroke('rgba(0%, 0%, 100%, 0.2)');
    point(this.x, this.y);
  }

  step() {

    var x = this.x;
    var y = this.y;

    while (x == this.x && y == this.y) {
      var stepX = floor(random(0, 3)) - 1;
      var stepY = floor(random(0, 3)) - 1;
      x = min(this.x + stepX, 640);
      y = min(this.y + stepY, 360);
    }

    this.x = x;
    this.y = y;
  }
}

var walker1 = new Walker4D(320, 180);
var walker2 = new Walker9D(320, 180);

function setup() {
  createCanvas(640, 360);
  background('#ccc');
}

function draw() {
  walker1.display();
  walker1.step();
  walker2.display();
  walker2.step();
}
