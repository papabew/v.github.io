$(document).ready(function() {

	//small devices navigation toggle
	var menu = $("#navigation");
	$("#navBtn").click(function(){
		menu.slideToggle();
	});

	//window resize navigation show
	$(window).resize(function(){
		var width = $(document).width();
		if (width >= 768 && menu.is(':hidden')) {
			menu.css('display', '');
		}
	});

	var doc = $(document),
		headerBg = $(".header-bg");
	var home = $("#home").offset().top;
	var about = $("#about").offset().top;
	var skills = $("#skills").offset().top;
	var expi = $("#experience").offset().top;
	var contact = $("#contact").offset().top;

	doc.scroll(function(){
		var currScrollPos = doc.scrollTop();
		
		var navLink = $("a[href^='#']");
		if (currScrollPos >= about && currScrollPos <= about+20) {
			navLink.removeClass("active");
		}
	});

	console.log(doc.scrollTop());

	var navHeight = $("nav").outerHeight();

	$("a[href^='#']").click(function(e){
		var page = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(page).offset().top - navHeight
		}, 500, "linear");

		$(".link").removeClass("active");
		$(this).addClass("active");

		e.preventDefault();
	});



	$('input, textarea').blur(function(){

		console.log($(this).val());

		if ($(this).val())
			$(this).addClass("used");
		else 
			$(this).removeClass("used");
	});



});