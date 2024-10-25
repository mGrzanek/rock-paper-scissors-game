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