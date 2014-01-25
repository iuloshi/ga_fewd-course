var count = 0;

document.getElementById("clickme").onclick = countNumbers;

function countNumbers() {
	count = count + 1;
	// count++;

	document.getElementById("clickme").innerHTML = count+" click!<br>Ah ah ah!";

	//Add conditionals
	
}