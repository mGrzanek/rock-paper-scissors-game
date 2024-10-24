function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(arg1, arg2, playerName) {
	let div = document.createElement('div');
	div.innerHTML = `Tommy ${arg1} : ${arg2} ${playerName}`;
	document.getElementById('result').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';
}