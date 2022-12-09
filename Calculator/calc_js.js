function input(val) {
	document.getElementById('screen1').value += val;
	return val;
}

function calc() {
	var x = document.getElementById('screen1').value;
	var y = eval(x);
	document.getElementById('screen1').value=y;
	return y;
}

function allclear() {
	document.getElementById('screen1').value = '';
}