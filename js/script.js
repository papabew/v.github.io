
//$(window).load(function() {
//	$("#overlay").fadeOut(5000);
//});

$(document).ready(function() {
	$("#overlay").fadeOut(200);
    window.scrollTo(0,0);

	//small devices navigation toggle
	var menu = $("#navigation");
	$("#navBtn").click(function() {
		menu.slideToggle();
	});

	//window resize navigation show
	$(window).resize(function() {
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

		

	doc.scroll(function() {
		var currScrollPos = doc.scrollTop();
		pages.each(function() {	
		var self = $(this);

		if (self.offset().top < (currScrollPos + navHeight) + 1
			&& (currScrollPos + navHeight) + 1 < (self.offset().top + self.outerHeight())) {
			
			var target = '.' + self.attr("id") + "-marker";
			links.removeClass("active");
			$(target).addClass("active");

			if(self.attr("id") == "skills")  {
				$(".small-bar-fill").removeClass("zero-width");
			}

		}	

		if (self.offset().top < (currScrollPos + navHeight) + navHeight) {

			var targetPage = "#" + self.attr("id");
			if ($(targetPage).hasClass("hidden")) $(targetPage).removeClass("hidden");
		}
	});

	});

	links.click(function(e) {
		var page = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(page).offset().top - navHeight
		}, 500, "linear");

		links.removeClass("active");
		$(this).addClass("active");
		e.preventDefault();
	});


	$("input, textarea").blur(function() {

		if ($(this).val())
			$(this).addClass("used");
		else 
			$(this).removeClass("used");
	});
    
    $("#submit").submit(function(e) {
        
        var name = $("#name"),
            email = $("#email"),
            subject = $("#subject"),
            message = $("#message");
        
        if(!name.val || !email.val || !subject.val || !message.val) {
            alert("All fields must not empty!");
        } else {
            e.preventDefault();
            $(this).get(0).reset();
            alert("Message sent!");
            
            $.ajax({
                url: "https://formspree.io/papab3w@gmail.com", 
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
            
        }
                
    });




});