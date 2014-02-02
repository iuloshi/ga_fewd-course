$(document).ready(function(){
	var total = 0;

	$(".row div").click(function() {
		var myId = $(this).attr("id");

		if(myId == "a10") {
			total = total + 10;
		}
		else if(myId == "a20") {
			total = total + 20;
		}
		else if(myId == "a30") {
			total = total + 30;			
		}
 		else if(myId == "n10") {
			total = total - 10;
		}
		else if(myId == "n20") {
			total = total - 20;
		}
		else if(myId == "n30") {
			total = total - 30;			
		}
		else if(myId == "red") {
			$("#out").css("background-color", "red");
		}
		else if(myId == "blue") {
			$("#out").css("background-color", "blue");
		}
		else if(myId == "out") {
			$("#out").css("background-color", "white");
		}		

		$("#out").html(total);
	});

	// $("#n10").click(function(){
	// 	total = total - 10;
	// 	$("#out").html(total);	
	// });
	// $("#n20").click(function(){
	// 	total = total - 20;
	// 	$("#out").html(total);	
	// });
	// $("#n30").click(function(){
	// 	total = total - 30;
	// 	$("#out").html(total);	
	// });

	// $("#red").click(function(){
	// 	$("#out").css("background-color", "red");
	// });

	// $("#blue").click(function(){
	// 	$("#out").css("background-color", "blue");
	// });

	// $("#out").click(function(){
	// 	$("#out").css("background-color", "white");
	// });

});