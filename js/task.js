var mmenu = 'close'; // to close menu




$(document).ready(function(){ 
	$(".slider").each(function() { // slider with automatic counter
		var repeats = 5, // numbers of counts
		interval = 3, // in sec
		repeat = true, // automatic counter (true/false)
		slider = $(this),
		repeatCount = 0,
		elements = $(slider).find("li").length;

	$(slider)
		// .append("<div class='nav'></div>")
		.find("li").each(function() {
			$(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
			$(this).attr("data-slide", $(this).index());
		})

		.end()
		.find("span").first().addClass("on"); 

		// add timeout
		if (repeat) {
			repeat = setInterval(function() {
				if (repeatCount >= repeats - 1) {
					window.clearInterval(repeat);
				}
				var index = $(slider).find('.on').data("slide"),
				nextIndex = index + 1 < elements ? index + 1 : 0;

				sliderJS(nextIndex, slider);
				repeatCount += 1;
			}, interval * 1000);
		}
	});
});

function sliderJS(index, slider) { // slide
	var ul = $(slider).find("ul"),
	bl = $(slider).find("li[data-slide=" + index + "]"),
	step = $(bl).width();

	$(slider)
	.find("span").removeClass("on")
	.end()
	.find("span[data-slide=" + index + "]").addClass("on");

	$(ul).animate({marginLeft: "-" + step * index}, 500);}

	$(document).on("click", ".slider .nav span", function(e) { // slider click navigate
		e.preventDefault();
		var slider = $(this).closest(".slider"),
		index = $(this).data("slide");
		sliderJS(index, slider);
	});


/* ANCHORS	*/

$(document).ready(function(){  //anchors
$('.animated-button a').click(function(){
	var project = $('.projects').offset().top;
	$('body').animate({scrollTop:project},880);
});
$('.about-home-button a').click(function(){
	var team = $('.team').offset().top;
	$('body').animate({scrollTop:team},880);
});

});


$(document).ready(function(){
    $('.menu-burger').on('click', showMmenu);
});


/* NENU */

function showMmenu(){
	if (mmenu=='close') { 
	$('.menu').css({
		'display': 'block'
	});
	mmenu='open';
	$('.burger-icon').fadeOut(800);
	$('.close-icon').fadeIn(800);
	}
	else{ 
	$('.menu').css('display','none');
	mmenu = 'close';
	$('.burger-icon').fadeIn(800);
	$('.close-icon').fadeOut(800);
	}
}



