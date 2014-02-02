$(document).ready(function() {
	$("li:even").css("background-color", "#cccccc");

	$("ul").click(function(){
	  $("li:even").hide();
	  $("li:even").html("New Text!");
	  $("li:even").css("color", "red");
	  $("li:even").fadeIn(2000);
	});
});




// $(document).ready(runTheWorld);


// function runTheWorld() {
// 	$("li:even").css("background-color", "#cccccc");

// 	$("ul").click(function(){
// 	  $("li:even").hide();
// 	  $("li:even").html("New Text!");
// 	  $("li:even").css("color", "red");
// 	  $("li:even").fadeIn(2000);
// 	});
// }