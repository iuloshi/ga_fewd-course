
$(document).ready(function() {

	$("form").submit(function(evt) { 
		evt.preventDefault();

		//BSOD when input is wrong
		if($("#name").val() == "" || $("#password").val() == "" || $("input[name='mood']").val() == "" || $("input[name='vehicle']").val() == "") {
			$("body").animate({"background-color": "blue"}).html("Blue Screen of Death").css({"color": "white", "font-family": "Courier", "font-size": "200px"});
		}


		// if($("#name").val() == "" ) {
		// 	$("#name").css("border-color", "red");
		// 	alert("Name is a required field!");
		// }

		// $(".name").html($("#name").val());
		// $(".password").html($("#password").val());

		// $(".mood").html($("input[name='mood']:checked").val()); //Radio Button

		// $("input[name='vehicle']:checked").each(function() {
  //     		$(".vehicle").append($(this).val()+' ');
  //   	});

		// $(".message").html($("#message").val());
		// $(".degree").html($("#degree").val());
	});

	$("a").click(function(evt) {
		evt.preventDefault();
		alert("Are you sure you want to leave me?");
	});

});