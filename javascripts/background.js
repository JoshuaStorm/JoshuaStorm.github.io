'use strict';

var yOffset = 0.0;  // 2nd dimension of perlin noise
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight / 10 );
  var x = (windowWidth - width) / 2;
  var y = 9 * windowHeight / 10 ;
  canvas.position(x, y);
}

function draw() {
  background(255);
  fill(244);
  // We are going to draw a polygon out of the wave points
  noStroke();
  beginShape();

  var xOffset = 0;
  // Iterate over horizontal pixels
  for (var x = 0; x <= windowWidth; x += 10) {
    // Calculate a y value according to noise, map to
    var y = map(noise(xOffset, yOffset), 0, 1, 0, 75);
    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xOffset += 0.1;
  }
  // increment y dimension for noise
  yOffset += 0.01;
  vertex(windowWidth, windowHeight);
  vertex(0, + height);
  endShape(CLOSE);
}
