class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const TOP = 0;
const LEFT = 1;
const BOTTOM = 2;
const RIGHT = 3;
const RESOLUTION_MULTIPLIER = 1;

class Square {
    constructor(topLeft, sideLength) {
        this.topLeft = topLeft;
        this.sideLength = sideLength;
    }

    calculateRandomPoint(disallowedSide=-1) {
        var side = Math.floor(Math.random() * 4);
        while (side === disallowedSide) side = Math.floor(Math.random() * 4);
        var x = 0;
        var y = 0;
        switch (side) {
            case TOP:
                x = this.topLeft.x + Math.floor(Math.random() * this.sideLength);
                y = this.topLeft.y;
                break;
            case LEFT:
                x = this.topLeft.x;
                y = this.topLeft.y + Math.floor(Math.random() * this.sideLength);
                break;
            case BOTTOM:
                x = this.topLeft.x + Math.floor(Math.random() * this.sideLength);
                y = this.topLeft.y + this.sideLength;
                break;
            case RIGHT:
                x = this.topLeft.x + this.sideLength;
                y = this.topLeft.y + Math.floor(Math.random() * this.sideLength);
                break;
        }
        return {
            point: new Point(x, y), 
            side: side
        };
    }
}

function drawSquare(sqr, iterations) {
    blendMode(BURN);
    stroke('rgba(199,199,199,1.0)');
    for (var i = 0; i < iterations; i++) {
        var pointAndSide1 = sqr.calculateRandomPoint();
        var pointAndSide2 = sqr.calculateRandomPoint(pointAndSide1.side);
    
        var p1 = pointAndSide1.point;
        var p2 = pointAndSide2.point;
    
        line(p1.x, p1.y, p2.x, p2.y);
    }
}

function drawPointFromTo(sqr1, sqr2) {
    blendMode(BURN);

    stroke('rgba(199,10,10,0.23)');
    var pointAndSide1 = sqr1.calculateRandomPoint();
    var pointAndSide2 = sqr2.calculateRandomPoint(pointAndSide1.side);

    var p1 = pointAndSide1.point;
    var p2 = pointAndSide2.point;
    line(p1.x, p1.y, p2.x, p2.y);

}

function setup() {
    var canvasWidth = RESOLUTION_MULTIPLIER * displayWidth / 4;
    var canvasHeight = RESOLUTION_MULTIPLIER * displayHeight / 6;

    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("canvasDiv")
    background(232);
    // noFill();
    LEFT_X = canvasWidth / 4;
    CENTER_Y = (canvasWidth / 4) - (canvasHeight / 2);
    BUFFER = canvasWidth / 16;
    SIZE = canvasWidth / 4;
    ITERATIONS = 600;

    var point1 = new Point(BUFFER, CENTER_Y);
    var sqr1 = new Square(point1, SIZE);
    drawSquare(sqr1, ITERATIONS);
    var point2 = new Point(SIZE + 2*BUFFER, CENTER_Y);
    var sqr2 = new Square(point2, SIZE);
    drawSquare(sqr2, ITERATIONS);
    var point3 = new Point(2*SIZE + 3*BUFFER, CENTER_Y);
    var sqr3 = new Square(point3, SIZE);
    drawSquare(sqr3, ITERATIONS);

    drawPointFromTo(sqr1, sqr2);
    drawPointFromTo(sqr1, sqr3);
    drawPointFromTo(sqr2, sqr3);
    drawPointFromTo(sqr3, sqr2);
    drawPointFromTo(sqr3, sqr3);
    drawPointFromTo(sqr3, sqr3);
    drawPointFromTo(sqr3, sqr3);
    drawPointFromTo(sqr3, sqr3);

    stroke('rgba(100,100,100,1.0)');
    strokeWeight(4);
    var frameWidth = 2;
    rect(frameWidth, frameWidth, canvasWidth-(2*frameWidth+1), canvasHeight-(2*frameWidth+1));

    stroke('rgba(199,199,199,1.0)');
    strokeWeight(4); 
    rect(0, 0, canvasWidth-1, canvasHeight-1);
}
