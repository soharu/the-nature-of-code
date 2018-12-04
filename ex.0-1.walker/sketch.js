class Walker {
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
            var choice = floor(random(0, 6));
            if (choice == 0 || choice == 1) {
                x = min(this.x + 1, 640); // right
            } else if (choice == 2) {
                x = max(this.x - 1, 0);   // left
            } else if (choice == 3 || choice == 4) {
                y = min(this.y + 1, 360); // down
            } else if (choice == 5) {
                y = max(this.y - 1, 0);   // up
            }
        }

        this.x = x;
        this.y = y;
    }
}

var walker = new Walker(320, 180);

function setup() {
    createCanvas(640, 360);
    background('#ccc');
}

function draw() {
    walker.display();
    walker.step();
}

new p5(sketch, 'container');
