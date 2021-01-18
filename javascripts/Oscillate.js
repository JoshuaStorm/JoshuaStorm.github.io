function setup() {
    var canvasWidth = displayWidth / 4;
    var canvasHeight = displayHeight / 6;

    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("canvasDiv")
    background(232);
    // noFill();
    ITERATIONS = 1000;

    var angle = 0.0;
    var randomWithinRange = Math.random() * (150 - 9) + 9;
    var angleIncrement = TWO_PI / randomWithinRange;
    // stroke('rgba(255,220,219,0.6)');
    stroke('rgba(199,199,199,1.0)');
    blendMode(BURN);

    noFill();
    for (var x = canvasWidth / 8; x < canvasWidth * 2; x += canvasWidth / ITERATIONS) {
        bezier(x, -canvasHeight * 2, x * sin(angle), canvasHeight*2, x * sin(angle), canvasHeight*1.5, x, canvasHeight*2);
        angle += angleIncrement;
    }

    blendMode(DARKEST);
    stroke('rgba(0,0,0,1.0)');
    strokeWeight(8); 
    rect(0, 0, canvasWidth, canvasHeight);
}
