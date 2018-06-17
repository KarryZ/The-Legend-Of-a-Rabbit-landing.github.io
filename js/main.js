//fadein start page
$(document).ready(function () {
	$('body').css('display', 'none');
	$('body').fadeIn(600);
})

// sticky header
$(window).scroll(function () {
	if ($(window).scrollTop() > 100) {
		$('header').addClass('sticky');
	} else {
		$('header').removeClass('sticky');
	}
});

// mobile navigation
$('.mobile-toggle').click(function () {
	$('.mobile-toggle').toggleClass('active');
	$('header nav').toggleClass('active');
});
$('header li a').click(function () {
	$('.mobile-toggle').removeClass('active');
	$('header nav').removeClass('active');
});

// navigation scroll
$('a').click(function (event) {
	var id = $(this).attr("href");
	var offset = 60;
	var target = $(id).offset().top - offset;
	$('html, body').animate({
		scrollTop: target
	}, 500);
	event.preventDefault();
});

// on top button
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('.go-top').fadeIn(200);
	} else {
		$('.go-top').fadeOut(200);
	}
});
