var sketchSize = {
    w: 640,
    h: 480
};

class Walker {
    constructor(size) {
        this.size = size;
        this.x = size.w / 2;
        this.y = size.h / 2;
    }

    display() {
        stroke('rgba(100%, 0%, 0%, 0.2)');
        point(this.x, this.y);
    }

    step() {
        var x = this.x;
        var y = this.y;

        while (x == this.x && y == this.y) {
            var v = random(1);
            if (0 <= v && v < 0.2) {
                y = max(this.y - 1, 0);   // up
            } else if (0.2 <= v && v < 0.4) {
                y = min(this.y + 1, this.size.h); // down
            } else if (0.4 <= v && v < 0.6) {
                x = max(this.x - 1, 0);   // left
            } else {    // 0.6 <= v < 1
                x = min(this.x + 1, this.size.w); // right
            }
        }

        this.x = x;
        this.y = y;
    }
}

var walker = new Walker(sketchSize);

function setup() {
    var canvas = createCanvas(sketchSize.w, sketchSize.h);
    canvas.parent('container');
    background('#ccc');
}

function draw() {
    walker.display();
    walker.step();
}
