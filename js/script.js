{
    let playerName = prompt('Wpisz swoję imię: ');
    let computerResult = 0;
    let playerResult = 0;

    if(!playerName) {
        playerName = "Ty";      
    }
x
    printResult(computerResult, playerResult, playerName);

    const playGame = function(playerInput) {

        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(playerInput);

        const displayResult = function(argComputerMove, argPlayerMove) {
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
}

