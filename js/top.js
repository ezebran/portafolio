$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	

	// var ubi = getElementById("ubi");
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn(),
				$('#ubi').addClass("fixed");
			} else {
				$('#back-top').fadeOut();
				$('#ubi').removeClass("fixed");
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});