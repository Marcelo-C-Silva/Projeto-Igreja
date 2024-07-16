const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');

let paddleX = 160;
let ballX = 190;
let ballY = 150;
let ballSpeedX = 2;
let ballSpeedY = 4;

function updateGameArea() {
    movePaddle();
    moveBall();
    requestAnimationFrame(updateGameArea);
}

function movePaddle() {
    // Adaptação para toque na tela
    document.addEventListener('touchmove', function(event) {
        event.preventDefault(); // Evita o scroll da página
        let touch = event.touches[0];
        paddleX = touch.clientX - 40; // Ajusta a largura da raquete
        paddle.style.left = paddleX + 'px';
    });
}

function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX > 380 || ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballY > 290) {
        // Verifica colisão com a raquete
        if (ballX > paddleX && ballX < paddleX + 80) {
            ballSpeedY = -ballSpeedY;
        } else {
            // Condição de fim de jogo
            ballX = 190;
            ballY = 150;
            ballSpeedX = 2;
            ballSpeedY = 4;
        }
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

updateGameArea();
