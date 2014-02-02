$(document).ready(function(){
	var total = 0;

	$(".row:nth-child(1) div, .row:nth-child(3) div").click(function() {
		total = total + parseInt($(this).html());
		$("#out").html(total);
	});

	$(".row:nth-child(2) div").click(function() {
		var myId = $(this).attr("id");

		if(myId == "red") {
			$("#out").css("background-color", "red");
		}
		else if(myId == "blue") {
			$("#out").css("background-color", "blue");
		}
		else if(myId == "out") {
			$("#out").css("background-color", "white");
		}		
	});

});