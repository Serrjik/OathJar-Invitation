$(document).ready(function(){

	$('.about__toggle').click(function(event){
		event.preventDefault();

		$('.about-content__box').hide();
		var href = $(this).attr('href'); // #whyuse
		$(href).fadeIn();

	});

	var windowHeight = $(window).height();

	// Следим за скроллом, и показываем / скрываем кнопку
	$(window).scroll(function(){
		// console.log( $(this).scrollTop() ); // количество пикселей от верхней границы окна

		if ( $(this).scrollTop() > windowHeight ) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}

	});

	// При клике на кнопку делаем прокрутку на верх страницы
	$('#scrollToTop').click(function(event){
		event.preventDefault();
		$('html').animate({scrollTop: 0}, 800);
	});

});
