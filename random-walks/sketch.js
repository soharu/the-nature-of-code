class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {

    var x = this.x;
    var y = this.y;
    // var stepSize = 3;

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

var walker = new Walker(50, 50);

function setup() {
  createCanvas(640, 360);
  background('#ccc');
}

function draw() {
  walker.display();
  walker.step();
}
