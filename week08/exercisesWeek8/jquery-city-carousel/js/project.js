$(document).ready(function(){
	$(".thumb").click(function(){
		// $("#bigimage").attr("src", $(this).attr("src")); //change link source attribute of large image to be that of the link source attribute of clicked thumbnail
		// $("#bigimage").attr("title", $(this).attr("title")); 
		// $("#bigimage").attr("alt", $(this).attr("alt")); 

		//or declare all attribute values at once:
		$("#bigimage").attr({
			"src": $(this).attr("src"), 
			"title": $(this).attr("title"), 
			"alt": $(this).attr("alt") 
		}).fadeIn();
	});

	$("#right").click(function(){
		$("#thumbnails").animate({"left": "-=113"}, 500);
	});

	$("#left").click(function(){
		$("#thumbnails").animate({"left": "+=153"}, 500);
	});


});