'use strict';

var yOffset = 0.0;  // 2nd dimension of perlin noise
function setup() {
  // Don't reposition if on mobile (quick and dirty check)
  if (displayHeight > displayWidth || displayHeight < 900) {
    var canvas = createCanvas(displayWidth, 0.08 * displayHeight);
    return;
  }
  var canvas = createCanvas(displayWidth, 0.08 * displayHeight);
  var x = 0;
  var y = 0.8 * displayHeight;
  canvas.position(x, y);
}

function draw() {
  background(255);
  fill(230);
  noStroke();
  beginShape();

  var xOffset = 0;
  // Iterate over horizontal pixels
  for (var x = 0; x <= windowWidth; x += 10) {
    var y = map(noise(xOffset, yOffset), 0, 1, 0, 75);
    // Set the vertex
    vertex(x, y);
    // Increment x
    xOffset += 0.1;
  }
  // Increment y
  yOffset += 0.01;
  vertex(windowWidth, windowHeight);
  vertex(0, + height);
  endShape(CLOSE);
}

function windowResized() {
  setup();
}
