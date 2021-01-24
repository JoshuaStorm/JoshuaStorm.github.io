function setup() {
    const A = 0; const B = 5; const C = 4;
    let canvasDiv = document.getElementById("canvasDiv");
    var canvasWidth = canvasDiv.clientWidth;
    var canvasHeight = displayHeight / 6;

    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("canvasDiv")
    background(232);
    // noFill();
    ITERATIONS = 2000;

    var angle = 0.0;
    var randomWithinRange = (Math.random() * (12 - 3)) + 3;
    var angleIncrement = TWO_PI / randomWithinRange;
    // stroke('rgba(255,220,219,0.6)');
    stroke('rgba(199,199,199,1.0)');
    blendMode(BURN);

    noFill();
    for (var x = 0; x < canvasWidth * 2; x += canvasWidth / ITERATIONS) {
        ellipse(x, canvasHeight*(1 + cos(angle))+Math.random()*A, x*sin(angle)+Math.random()*B, x * sin(angle)+Math.random()*C);
        angle += angleIncrement;
    }

    stroke('rgba(0,0,0,1.0)');
    strokeWeight(8); 
    rect(0, 0, canvasWidth, canvasHeight);
}
