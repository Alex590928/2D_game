var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var posX = 20;
var speedX = 5;
var posY = 20;
var speedY = 7;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = ((canvas.width - paddleWidth) / 2);

var rightPressed = false;
var leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39)
        rightPressed = true;
    if (e.keyCode == 37)
        leftPressed = true;
}

function keyUpHandler(e) {
    if (e.keyCode == 39)
        rightPressed = false;
    if (e.keyCode == 37)
        leftPressed = false;
}

if (rightPressed)
    paddleX += 5;
else 
    paddleX -= 5;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleWidth);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    if (posY + speedY > canvas.height)
        speedY = -7;
    if (posX + speedX > canvas.width)
        speedX = -5;
    if (posY + speedY < 0)
        speedY = 7;
    if (posX + speedX < 0)
        speedX = 5;

    if (rightPressed && paddleX < canvas.width - paddleWidth)
        paddleX += 10;
    if (leftPressed && paddleX > 0)
        paddleX -= 10;

    
    ctx.beginPath();
    ctx.arc(posX, posY, ballRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    drawPaddle();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    posX += speedX;
    posY += speedY;
}

setInterval(draw, 1000/30);