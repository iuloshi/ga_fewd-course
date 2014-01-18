var count = 0;


document.getElementById("clickme").onclick = countNumbers; 

function countNumbers() {
	count++;

document.getElementById("clickme").innerHTML = "You clicked "+count+" times!";

if(count == 6) {
	document.getElementById("clickme").style.backgroundColor = "red";
} 

if(count == 20) {
	document.getElementById("clickme").style.backgroundColor = "blue";
} 

}