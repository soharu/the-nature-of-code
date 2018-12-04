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
        var directions = [
            "right", "right",
            "left",
            "down", "down",
            "up"
        ];
        var x = this.x;
        var y = this.y;
        while (x == this.x && y == this.y) {
            var dir = random(directions);
            if (dir == "right") {
                x = min(this.x + 1, 640); // right
            } else if (dir == "left") {
                x = max(this.x - 1, 0);   // left
            } else if (dir == "down") {
                y = min(this.y + 1, 360); // down
            } else if (dir == "up") {
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

// https://p5js.org/examples/instance-mode-instance-container.html
new p5(sketch, 'container');
