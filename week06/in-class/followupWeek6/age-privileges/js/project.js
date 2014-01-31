//Create two variables for age and message
var age = 0;
var message = "";

document.getElementById("age").onchange = checkAge;

function checkAge() {
	age = document.getElementById("age").value;

	if (age >= 35) { //Check if the person is 35 - Can run for president.
		message = "You can run for President!";
	} 
	else if (age >= 25) { //Check if the person is 25 - Can run for Senate and rent a car.
		message = "You can rent a car and run for the Senate!";
	} 
	else if (age >= 21) { //Check if the person is 21 - Can drink alcohol.
		message = "You can destroy your liver!";
	}
	else if (age >= 19) { //Check if the person is 19 - Can drink alcohol in Canada.
		message = "You can destroy your liver, eh!";
	}
	else if (age >= 18) { //Check if the person is 18 - Can vote.
		message = "You can vote!";
	}
	else {
		message = "Say \"Hi\" to your mother for me!";
	}

	console.log(message);

	//Write the message to the paragraph on the page.
	document.getElementById("target").innerHTML = message;
}