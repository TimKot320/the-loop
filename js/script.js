$(document).ready(function(){
	$('.header__slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1, 
		infinite: true, 
		initialSlide: 2, 
		autoplay: false,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
	})
});