const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const printResult = function(pointsOne, pointsTwo, playerName) {
	let div = document.createElement('div');
	div.innerHTML = `Tommy ${pointsOne} : ${pointsTwo} ${playerName}`;
	document.getElementById('result').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';
}

const getMoveName = function(argMoveId){
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
