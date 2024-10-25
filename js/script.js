let playerName = prompt('Wpisz swoję imię: ');
let computerResult = 0;
let playerResult = 0;

playerName = nameCheck(playerName, "Ty");

printResult(computerResult, playerResult, playerName);

function playGame(playerInput) {

    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
    printResult(computerResult, playerResult, playerName);

}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});


