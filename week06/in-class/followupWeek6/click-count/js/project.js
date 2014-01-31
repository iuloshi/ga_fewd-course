var count = 0;
var newColor = "";

document.getElementById("clickme").onclick = countNumbers;

function countNumbers() {
	count = count + 1;
	// count++;

	if (count == 1) {
		document.getElementById("clickme").innerHTML = count+" click!<br>Ah ah ah!";
	}
	else {
		document.getElementById("clickme").innerHTML = count+" clicks!<br>Ah ah ah!";		
	}

 	if(count == 10) {
 		newColor = "red";
 	}
 	else if (count == 20) {
 		newColor = "#1102ab";
 	}
 	else if (count > 10 && count < 20) {
 		newColor = "rgb(2, 103, 22)"; 		
 	}
 	else if (count < 10 || (count % 2) == 0) {
 		newColor = "yellow"; 		 		
 	}
 	else {
 		newColor = "black"; 		
 	}
	
	document.getElementsByTagName("body")[0].style.backgroundColor = newColor;
}