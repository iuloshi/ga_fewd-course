$(document).ready(function(){

	setUp();

	//Bind a function to some sort of user event
		//Create a var for the character you want to place, this will be your <img> tag
		//Append this var to the page
		//Animate the character once or several times
		//After animating, remove it from the document entirely





	$("body").mouseenter(function(){ //Hide the "Pac Man" sign
		$("h1").fadeOut(500);
	});
});

function setUp() { //Utility defined below to ensure the "playable" area is always 100% of the width and height of the browser
	$("body, html, #wrapper").height($(window).height());
	$("body, html, #wrapper").width($(window).width());
}

$(window).resize(function() {
	setUp();
});