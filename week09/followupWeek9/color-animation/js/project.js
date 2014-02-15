$(document).ready(function(){
	// var currentColor = "black";

	$(".slider").slider({min: 0, max: 255, slide: changeColor});

	$("#capturecolor").click(function() {

		$("body").animate({"background-color": $("#colorchoice").css("background-color")});

	});

	function changeColor() {
		var r = $("#slider1").slider("value");
		var g = $("#slider2").slider("value");
		var b = $("#slider3").slider("value");

		$("#colorchoice").css("background-color", "rgb("+r+","+g+","+b+")");

		// currentColor = "rgb("+r+","+g+","+b+")";

		// $("#colorchoice").css("background-color", currentColor);
	}
});

