const playerName = prompt('Wpisz swoję imię: ');
let computerResult = 0;
let playerResult = 0;

printResult(computerResult, playerResult, playerName);

function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }

    printMessage(`Nie znam ruchu o id ${argMoveId}`);
    return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage(`Zagrałem ${computerMove}, a Ty ${playerMove}.`);
        if (argComputerMove === 'kamień' && argPlayerMove === "nożyce") {
            printMessage("Tym razem przegrywasz :(")
            computerResult++;
        } else if (argComputerMove === 'kamień' && argPlayerMove === "kamień") {
            printMessage("Remis!");
        } else if (argComputerMove === "kamień" && argPlayerMove === "papier") {
            printMessage("Ty wygrywasz!");
            playerResult++;
        } else if (argComputerMove === 'papier' && argPlayerMove === "kamień") {
            printMessage("Tym razem przegrywasz :(");
            computerResult++;
        } else if (argComputerMove === "papier" && argPlayerMove === "papier") {
            printMessage("Remis!");
        } else if (argComputerMove === "papier" && argPlayerMove === "nożyce") {
            printMessage("Ty wygrywasz!");
            playerResult++;
        } else if (argComputerMove === "nożyce" && argPlayerMove === "kamień") {
            printMessage("Ty wygrywasz!");
            playerResult++;
        } else if (argComputerMove === "nożyce" && argPlayerMove === "nożyce") {
            printMessage("Remis!");
        } else if(argComputerMove === "nożyce" && argPlayerMove === "papier") {
            printMessage("Tym razem przegrywasz :(");
            computerResult++;
        } else {
            printMessage("Upsss... Something went wrong. Try again.");
        }
    }

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


