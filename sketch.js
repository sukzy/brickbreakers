let paddle;
let bricks = [];
var brickRow = 2;

function setup() {
	createCanvas(700, 700);
	paddle = new Paddle();

	// let slotHor = 0;
	// let slotVer = 0;
	// for (let i = 0; i < brickRow; i++) {
	// 	for (let j = 0; j < 20; j++) {
	// 		bricks[j] = new Brick(slotHor, slotVer);
	// 		slotHor = slotHor + 70;
	// 	}
	// 	slotVer = slotVer + 20;
	// }
	bricks[0] = new Brick(0, 0);
	bricks[1] = new Brick(70, 0);
	bricks[2] = new Brick(140, 0);
	bricks[3] = new Brick(210, 0);
	bricks[4] = new Brick(280, 0);
	bricks[5] = new Brick(350, 0);
	bricks[6] = new Brick(420, 0);
	bricks[7] = new Brick(490, 0);
	bricks[8] = new Brick(560, 0);
	bricks[9] = new Brick(630, 0);
	bricks[10] = new Brick(0, 20);
	bricks[11] = new Brick(70, 20);
	bricks[12] = new Brick(140, 20);
	bricks[13] = new Brick(210, 20);
	bricks[14] = new Brick(280, 20);
	bricks[15] = new Brick(350, 20);
	bricks[16] = new Brick(420, 20);
	bricks[17] = new Brick(490, 20);
	bricks[18] = new Brick(560, 20);
	bricks[19] = new Brick(630, 20);
}

function draw() {
	background(0);

	paddle.show();
	paddle.move();
	paddle.cekTepi();

	// for (let i = 0; i < brickRow; i++) {
	// 	for (let j = 0; j < 20; j++) {
	// 		bricks[j].show();
	// 	}
	// }
	bricks[0].show();
	bricks[1].show();
	bricks[2].show();
	bricks[3].show();
	bricks[4].show();
	bricks[5].show();
	bricks[6].show();
	bricks[7].show();
	bricks[8].show();
	bricks[9].show();
	bricks[10].show();
	bricks[11].show();
	bricks[12].show();
	bricks[13].show();
	bricks[14].show();
	bricks[15].show();
	bricks[16].show();
	bricks[17].show();
	bricks[18].show();
	bricks[19].show();
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