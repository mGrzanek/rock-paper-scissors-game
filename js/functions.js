function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(pointsOne, pointsTwo, playerName) {
	let div = document.createElement('div');
	div.innerHTML = `Tommy ${pointsOne} : ${pointsTwo} ${playerName}`;
	document.getElementById('result').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';
}

function nameCheck(name, newValue) {
    if(!name) {
        return newValue;      
    } else {
        return name;
    }
}

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