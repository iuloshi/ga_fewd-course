var numKids  = 0;
var partner  = "";
var hometown = "";
var jobTitle = "";

document.getElementById("clickme").onclick = getFortune;

function getFortune() {
	numKids  = document.getElementById("numKids").value;
	partner  = document.getElementById("partner").value;
	hometown = document.getElementById("hometown").value;
	jobTitle = document.getElementById("jobTitle").value;

	var future = "<h1>You will be a " + jobTitle + " in " + hometown + ", and married to " + partner + " " + " with " + numKids + " kids.</h1>";

	document.getElementById("wrapper").innerHTML = future;
}