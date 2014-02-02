$(document).ready(function(){
	$(".thumb").click(function() { 
		var url = $(this).attr("src");
		$("#bigimage").attr("src", url);
	});
}); 