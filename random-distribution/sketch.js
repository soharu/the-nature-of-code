var randomCounts = new Array(20).fill(0);
var drawCount = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background('#ccc');

  if (drawCount < 5000) {
    var index = floor(random(0, randomCounts.length));
    randomCounts[index]++;
    drawCount++;
  }

  stroke(0);
  fill(175);
  var w = width / randomCounts.length;
  for (const [index, value] of randomCounts.entries()) {
    rect(index * w, height - value, w - 1, value);
  }

  textSize(12);
  fill(0);
  text('Count: ' + drawCount, 10, 20);
}
