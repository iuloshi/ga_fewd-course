$(document).ready(function(){
	checkArrows();

	//The most efficient way to do it.
	$(".thumb").click(function(){
		$("#bigimage").hide().attr({
			"src": $(this).attr("src"),
			"title": $(this).attr("title"),
			"alt": $(this).attr("alt")
		}).fadeIn();
	});

	$("#right").click(function(){
		if($("#thumbnails").position().left > -512) {
			$("#thumbnails").animate({left: "-=133"}, 250, checkArrows);
		}
	});

	$("#left").click(function(){
		if($("#thumbnails").position().left < 20) {
			$("#thumbnails").animate({left: "+=133"}, 250, checkArrows);
		}
	});

	function checkArrows(){
		var leftPosition = $("#thumbnails").position().left;

		if(leftPosition == 20) {
			$("#left").hide();
			$("#right").show();
		}
		else if(leftPosition == -512) {
			$("#left").show();
			$("#right").hide();
		}
		else {
			$("#left").show();
			$("#right").show();	
		}
	}

});