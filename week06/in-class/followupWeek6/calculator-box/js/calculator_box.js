$(document).ready(function(){
	var total = 0;

	$("#a10").click(add10);

	function add10() {
		total = total + 10;
		$("#out").html(total);
	}

	//do this for a20, a30, n10, etc.



	//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with $("selector").css()


});