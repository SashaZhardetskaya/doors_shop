var mmenu = 'close'; // пеоеменная для закрытия меню




/* ajax + json */
$(document).ready(function(){ 
	$(".slider").each(function() { // cлайдер с автоматической прокруткой
		var repeats = 5, // кількість повторювань автоматичного прокручування
		interval = 3, // інтервал в секундах
		repeat = true, // чи треба автоматично прокручувати (true/false)
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


/* Слайдер без автоматической прокрутки

$(document).ready(function() {
 $(".slider").each(function () { // обрабатываем каждый слайдер
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
  	console.log($(this));
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 });
});
function sliderJS (obj, sl) { // slider function
 var ul = $(sl).find("ul"); // находим блок
 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
 var step = $(bl).width(); // ширина объекта
 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function() { // slider click navigate
 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
 $(sl).find("span").removeClass("on"); // убираем активный элемент
 $(this).addClass("on"); // делаем активным текущий
 var obj = $(this).attr("rel"); // узнаем его номер
 sliderJS(obj, sl); // слайдим
 return false;
});

*/

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



