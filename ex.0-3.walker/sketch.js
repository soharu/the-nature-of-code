const sketchSize = {
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

    newDirections() {
        let dis = {
            x: this.x - mouseX,
            y: this.y - mouseY
        };

        if (abs(dis.x) < abs(dis.y)) {
            if (dis.y < 0) {
                return ["bottom", "top", "left", "right"];
            } else {
                return ["top", "left", "right", "bottom"];
            }
        } else {
            if (dis.x < 0) {
                return ["right", "bottom", "top", "left"];
            } else {
                return ["left", "right", "bottom", "top"];
            }
        }
    }

    newPosition(dir) {
        if (dir == "right") {
            return { x: min(this.x + 1, this.size.w), y: this.y };
        } else if (dir == "left") {
            return { x: max(0, this.x - 1), y: this.y };
        } else if (dir == "bottom") {
            return { x: this.x, y: min(this.size.h, this.y + 1) };
        } else if (dir == "top") {
            return { x: this.x, y: max(0, this.y - 1) };
        }
    }

    step() {
        const v = random(1);
        const range = [0, 0.5, 0.5 + 0.5 / 3, 0.5 + (0.5 * 2 / 3), 1];
        const dirs = this.newDirections();
        let pos = { x: this.x, y: this.y };
        if (range[0] <= v && v < range[1]) {
            pos = this.newPosition(dirs[0]);
        } else if (range[1] <= v && v < range[2]) {
            pos = this.newPosition(dirs[1]);
        } else if (range[2] <= v && v < range[3]) {
            pos = this.newPosition(dirs[2]);
        } else if (range[3] <= v && v < range[4]) {
            pos = this.newPosition(dirs[3]);
        }
        this.x = pos.x;
        this.y = pos.y;
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
