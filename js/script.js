function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    printMessage(`Zagrałem ${computerMove}, a Ty ${playerMove}`);

    if (argComputerMove === 'kamień' && argPlayerMove === "nożyce") {
        printMessage("Tym razem przegrywasz :(")
    } else if (argComputerMove === 'kamień' && argPlayerMove === "kamień") {
        printMessage("Remis!");
    } else if (argComputerMove === "kamień" && argPlayerMove === "papier") {
        printMessage("Ty wygrywasz!");
    } else if (argComputerMove === 'papier' && argPlayerMove === "kamień") {
        printMessage("Tym razem przegrywasz :(");
    } else if (argComputerMove === "papier" && argPlayerMove === "papier") {
        printMessage("Remis!");
    } else if (argComputerMove === "papier" && argPlayerMove === "nożyce") {
        printMessage("Ty wygrywasz!");
    } else if (argComputerMove === "nożyce" && argPlayerMove === "kamień") {
        printMessage("Ty wygrywasz!");
    } else if (argComputerMove === "nożyce" && argPlayerMove === "nożyce") {
        printMessage("Remis!");
    } else if(argComputerMove === "nożyce" && argPlayerMove === "papier") {
        printMessage("Tym razem przegrywasz :(");
    } else {
        printMessage("Upsss... Something went wrong. Try again.");
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');
let playerMove = getMoveName(playerInput);

console.log(`Wylosowana liczba to ${randomNumber}`);
console.log(`Gracz wpisał ${playerInput}`);

displayResult(computerMove, playerMove);



