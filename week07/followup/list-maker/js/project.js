$(document).ready(function(){

	// $("#clickme").click(function() {
	// 	var newItem = $("#item").val();		
	// 	newItem = "<li>"+newItem+"</li>";
	// 	$("ul").html($("ul").html()+newItem);
	// });

	$("#clickme").click(function() {
		var newItem = $("#item").val();		
		newItem = "<li>"+newItem+"</li>";
		$("ul").prepend(newItem);
		// $("ul").append(newItem);
	});

});