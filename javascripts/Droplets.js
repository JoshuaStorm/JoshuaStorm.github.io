var canvasWidth;
var canvasHeight;

function setup() {
    const A = 0; const B = 5; const C = 4;
    let canvasDiv = document.getElementById("canvasDiv");
    canvasWidth = canvasDiv.clientWidth;
    canvasHeight = displayHeight / 6;

    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("canvasDiv")
    background(232);
    // noFill();
    ITERATIONS = 2000;

    // stroke('rgba(255,220,219,0.6)');
    stroke('rgba(199,199,199,1.0)');
    blendMode(BURN);



    stroke('rgba(0,0,0,1.0)');
    strokeWeight(8); 
    noFill();
    rect(0, 0, canvasWidth, canvasHeight);
}

var NOISE_RADIUS = 2.0;
var MAX_RADIUS = 1000.0;
var counter = 0.0;


function draw() {
    strokeWeight(1); 

    // stroke('rgba(199,199,199,1.0)');
    // stroke('rgba(50,50,50,2.0)');
    stroke('rgba(199,199,199,0.2)');


    if (counter > 3000) {
        quadrantDraw();
        // return;
    }
    blendMode(BURN);
    noFill();


    var centerX = canvasWidth / 2.0;
    var centerY = canvasHeight / 2.0;

    var radius = centerY + MAX_RADIUS * sin(counter + Math.random());
    ellipse(centerX, centerY, radius + NOISE_RADIUS*Math.random(), radius + NOISE_RADIUS*Math.random());

    counter++;
}

function quadrantDraw() {
    noFill();
    stroke('rgba(199,199,199,0.16)');
    // stroke('rgba(0,0,0,1.0)');
    strokeWeight(1.0)

    var centerLeftX = canvasWidth / 4.0;
    var centerRightX = canvasWidth - (canvasWidth / 4.0);
    var centerDownY = canvasHeight / 4.0;
    var centerUpY = canvasHeight - (canvasHeight / 4.0);
    var radius = counter / 10.0 + (MAX_RADIUS / 4.0) * sin(counter + Math.random());

    ellipse(centerLeftX, centerDownY, radius + NOISE_RADIUS*Math.random(), radius + NOISE_RADIUS*Math.random());
    ellipse(centerRightX, centerDownY, radius + NOISE_RADIUS*Math.random(), radius + NOISE_RADIUS*Math.random());
    ellipse(centerLeftX, centerUpY, radius + NOISE_RADIUS*Math.random(), radius + NOISE_RADIUS*Math.random());
    ellipse(centerRightX, centerUpY, radius + NOISE_RADIUS*Math.random(), radius + NOISE_RADIUS*Math.random());
    counter++;
}