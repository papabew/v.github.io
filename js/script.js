$(document).ready(function() {

	$(".overlay").css("display", "none");
	window.onbeforeunload = function(){
		window.scrollTo(0,0);
	};

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
		headerBg = $(".header-bg"),
		pages = $(".pages"),
		navHeight = $("nav").height(),
		links = $("nav ul li a"),
		currScrollPos = doc.scrollTop();

		

	doc.scroll(function(){
		var currScrollPos = doc.scrollTop();
		pages.each(function() {	
		var self = $(this);

		if (self.offset().top < (currScrollPos + navHeight) + 1
			&& (currScrollPos + navHeight) + 1 < (self.offset().top + self.outerHeight())) {
			
			var target = '.' + self.attr("id") + "-marker";
			links.removeClass("active");
			$(target).addClass("active");

			if(self.attr("id") == "skills"){
				$(".small-bar-fill").removeClass("zero-width");
			}

		}	

		if (self.offset().top < (currScrollPos + navHeight) + navHeight) {

			var targetPage = "#" + self.attr("id");
			if ($(targetPage).hasClass("hidden")) $(targetPage).removeClass("hidden");
		}
	});

	});

	links.click(function(e){
		var page = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(page).offset().top - navHeight
		}, 500, "linear");

		links.removeClass("active");
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