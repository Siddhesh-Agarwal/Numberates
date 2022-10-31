const num = Math.ceil(Math.random() * 100);
moves = 10;

function play() {
    if (moves > 0) {
        check();
    } else {
        reset();
    }
}

function check() {
    const guess = document.getElementById("guess").value;
    const result = document.getElementById("result");
    if (guess == num) {
        result.innerHTML = `You guessed it! <img src="./assets/win.svg">`;
    } else if (guess > num) {
        result.innerHTML = "Too high!";
        Move();
    } else {
        result.innerHTML = "Too low!";
        Move();
    }
}

function Move() {
    moves--;
    document.getElementById("moves").innerHTML = "0" + moves;
    if (moves == 0) {
        document.getElementById("result").innerHTML = `You lose! <img src="./assets/lose.svg">`;
    }
}

function reset() {
    moves = 10;
    document.getElementById("moves").innerHTML = moves;
    document.getElementById("result").innerHTML = "Guess a number!";
    num = Math.ceil(Math.random() * 100);
}