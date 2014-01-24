var age;
var maxAge;
var drink;
var numberPerDay;

document.getElementById("clickme").onclick = calculateSupply;

function calculateSupply() {
	age = document.getElementById("age").value;
	maxAge = document.getElementById("maxAge").value;
	drink = document.getElementById("item").value;
	numberPerDay = document.getElementById("numPerDay").value;

	var totalNeeded = (numberPerDay * 365) * (maxAge - age);

	var message = "At the age of "+age+", you will need "+totalNeeded+" "+drink+" to last you to the ripe old age of "+maxAge+".";

	document.getElementById("solution").innerHTML = message;
}