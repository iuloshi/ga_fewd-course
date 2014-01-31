$(document).ready(function(){
	var total = 0;

	$("#a10").click(function(){
		total = total +10;
		$("#out").html(total);
		// console.log(total);

		//add 10 to the total
		//update #out with the new total using the $("selector").html() 
	});

	//do this for a20, a30, n10, etc.
	$("#a20").click(function(){
		total = total +20;
		$("#out").html(total);
	});
	$("#a30").click(function(){
		total = total +30;
		$("#out").html(total);
	});
	$("#n10").click(function(){
		total = total -10;
		$("#out").html(total);
	});
	$("#n20").click(function(){
		total = total -20;
		$("#out").html(total);
	});
	$("#n30").click(function(){
		total = total -30;
		$("#out").html(total);
	});


	//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with $("selector").css()
	$("#red").click(function(){
		$("body").css("background-color", "red");
	});
	$("#blue").click(function(){
		$("body").css("background-color", "blue");
	});
	$("#out").click(function(){
		$("body").css("background-color", "purple");
	});
});