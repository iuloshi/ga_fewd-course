$(document).ready(function(){
	$(".thumb").click(function(){
		// $("#bigimage").attr("src", $(this).attr("src"));
		// $("#bigimage").attr("title", $(this).attr("title"));
		// $("#bigimage").attr("alt", $(this).attr("alt"));
		
		$("#bigimage").hide().attr({
			"src": $(this).attr("src"), 
			"title": $(this).attr("title"),
			"alt": $(this).attr("alt")
		}).fadeIn();
	});

	$("#right").click(function(){
		$("#thumbnails").animate({"left": "-=133"}, 500);
	});

	$("#left").click(function(){
		$("#thumbnails").animate({"left": "+=133"}, 500);
	});
});