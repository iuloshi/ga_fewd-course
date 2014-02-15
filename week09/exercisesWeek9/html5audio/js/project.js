$(document).ready(function(){

	setUp();

	$("body").mousedown(function() {
		var pacman = "<img class=\"pacman\" src=\"img/ghost1.png\">";

		$("#wrapper").append(pacman);

		$(".pacman").animate({
			left: "20%",
			top: "10%"
		}, 2000, "easeOutElastic").animate({
			left: "90%",
			top: "60%"
		}, 2000, "easeOutElastic").animate({
			left: "40%",
			top: "80%"
		}, 2000, "easeOutElastic");
	});

	$("body").mouseenter(function(){
		$("h1").fadeOut(500);
	});
});

function setUp() {
	$("body, html, #wrapper").height($(window).height());
	$("body, html, #wrapper").width($(window).width());
}

$(window).resize(function() {
	setUp();
});