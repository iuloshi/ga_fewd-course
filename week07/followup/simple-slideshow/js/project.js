$(document).ready(function(){

	$("nav a").click(function() {
		$(".slide").removeClass("current");
		$("nav a").removeClass("current");

		$("#slide"+$(this).html()).addClass("current");
		$(this).addClass("current");
	});

});
