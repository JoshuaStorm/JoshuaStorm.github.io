'use strict';

var t;

function setup() {
    createCanvas(windowWidth, windowHeight*0.35);
    stroke(0, 10);
    noFill();
    t = 0;
}

function draw() {
    var x1 = width * noise(t + windowWidth*0.78) //+ windowWidth*0.1;
    var x2 = width * noise(t + windowWidth*0.87) //+ windowWidth*0.1;
    var x3 = width * noise(t + windowWidth*0.83) //+ windowWidth*0.1;
    var x4 = width * noise(t + windowWidth*0.80) //+ windowWidth*0.1;
    var y1 = height * noise(t + windowHeight*0.33)// - windowHeight*0.2;
    var y2 = height * noise(t + windowHeight*0.37)// - windowHeight*0.2;
    var y3 = height * noise(t + windowHeight*0.31)// - windowHeight*0.2;
    var y4 = height * noise(t + windowHeight*0.29)// - windowHeight*0.2;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.005;
}

function windowResized() {
    setup();
}
