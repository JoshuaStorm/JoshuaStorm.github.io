var canvasWidth;
var canvasHeight;
var randomWithinRange;
var angleIncrement;
var startX;

function setup() {
    let canvasDiv = document.getElementById("canvasDiv");
    canvasWidth = canvasDiv.clientWidth;
    canvasHeight = canvasDiv.clientWidth // displayHeight / 6;

    randomWithinRange = Math.random();
    angleIncrement = TWO_PI / randomWithinRange;
    startX = -canvasWidth  * 4.33 * Math.random();
    var canvas = createCanvas(canvasWidth, canvasHeight);
    console.log(startX)
    canvas.parent("canvasDiv")
    background(232);
    noFill();

    stroke('rgba(0,0,0,1.0)');
    strokeWeight(8); 
    rect(0, 0, canvasWidth, canvasHeight);

}

const MODULUS = 1000;
var i = 0;
var A; var B; var C;
A = Math.random() * 2.1; B = Math.random() * 0.8; C = Math.random() * 0.2;
var incr = 8.123*Math.random() + 5.0;
console.log(incr)
function draw() {
    if (i >= MODULUS*100) return;

    var colorAdjust = Math.floor(i / MODULUS);
    var greyLevel =  Math.abs(70 - 1*colorAdjust) % 256;
    // var alpha = 0.2*(MODULUS*MODULUS - iterations*iterations) / (MODULUS*MODULUS)
    var alpha = 0.2;
    var greyColor = 'rgba(' + greyLevel + ',' + greyLevel  + ',' + greyLevel + ',' + alpha + ')';
    i += incr;
    strokeWeight(0.5); 
    stroke(greyColor);
    blendMode(BURN);

    noFill();
    angle = 0.0;
    for (var x = startX; x < canvasWidth; x += canvasWidth / i) {
        var x1 = x;
        // sorry I didn't make this readable.
        rect(x1*(1+sin(angle)*sin(angle)*sin(angle)*sin(angle))+A, x1*canvasWidth*(1.0 + cos(angle))+A, -1*sin(angle)*sin(angle)+B, x1 * sin(angle)+B+C);
        angle += angleIncrement;
    }
}
