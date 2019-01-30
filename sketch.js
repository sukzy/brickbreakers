let paddle;
let bricks = [];
let ball;

var brickRow = 2;
let col = 0;
let slotVer = 0;
let slotHor = 0;
let brickLength = 30;

function setup() {
	createCanvas(700, 700);
	paddle = new Paddle();
	ball = new Ball();

	for (let i = 0; i < brickLength; i++) {
		if (col < 10) {
			bricks[i] = new Brick(slotHor, slotVer);
			slotHor = slotHor + 70;
		} else if (col == 10) {
			slotVer = slotVer + 20;
			slotHor = 0;
			col = 0;
			bricks[i] = new Brick(slotHor, slotVer);
			slotHor = slotHor + 70;
		} 
		col += 1;
	}
}

function draw() {
	background(0);

	paddle.show();
	paddle.move();
	paddle.cekTepi();

	ball.show();
	ball.update();
	ball.checkEdge();
	if(ball.hitPaddle(paddle)) {
		ball.bounce();
	}

	for (let i = 0; i < bricks.length; i++) {
		bricks[i].show();
	}
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		paddle.moveLeft = true;
	} else if (keyCode == RIGHT_ARROW) {
		paddle.moveRight = true;
	}
}

function keyReleased() {
	paddle.moveLeft = false;
	paddle.moveRight = false;
}