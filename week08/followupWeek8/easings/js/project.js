$(document).ready(function(){

	$(".box").click(function(){
		$(this).animate({
			"top": "80%"
		}, 1000, "easeOutBounce");
	});

});