var startTempType = 0; //Fahrenheit = 0 (default), Celsius = 1

//Everytime user changes selection in dropdown, store startTempType
document.getElementById("dropdown").onchange = saveTempType;
	function saveTempType(){
		startTempType = document.getElementById("dropdown").selectedIndex;
	//	console.log(startTempType);
	}

document.getElementById("clickme").onclick = convertIt;
	function convertIt(){
		var degrees = document.getElementById("degrees").value;
		if (startTempType == 0) {
			var conversion = (degrees - 32) * 5/9; //F to C
			document.getElementById("result").innerHTML = conversion +"&#186;C";
		}
		else {
			var conversion = degrees * 1.8 + 32; //C to F
			document.getElementById("result").innerHTML = conversion +"&#186;F";
		}
	}




// function convertIt(){
// 	var degrees = document.getElementById("degrees").value;
// 	var conversion = degrees * 1.8 + 32;
// 	document.getElementById("result").innerHTML = conversion;
// }


// -----------------

// var hometown;
// var partner;
// var numKids;
// var jobTitle;

// document.getElementById("clickme").onclick = tellFortune; 

// function tellFortune() {
// 	hometown = document.getElementById("hometown").value;
// 	partner = document.getElementById("partner").value;
// 	numKids = document.getElementById("numKids").value;
// 	jobTitle = document.getElementById("jobTitle").value;

// 	var message = "You will marry "+ partner +", have "+ numKids +" children, and work as a "+ jobTitle +" in "+ hometown + ".";

// 	document.getElementById("wrapper").innerHTML = message;
// }