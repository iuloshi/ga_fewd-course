var hometown;
var partner;
var numKids;
var jobTitle;

document.getElementById("clickme").onclick = tellFortune; 

function tellFortune() {
	hometown = document.getElementById("hometown").value;
	partner = document.getElementById("partner").value;
	numKids = document.getElementById("numKids").value;
	jobTitle = document.getElementById("jobTitle").value;

	var message = "You will marry "+ partner +", have "+ numKids +" children, and work as a "+ jobTitle +" in "+ hometown + ".";

	document.getElementById("wrapper").innerHTML = message;
}