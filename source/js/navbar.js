$( () => {

	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('.navbar ul').css('top','80px') : $('.navbar ul').css('top','80px');
	});

	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});

	//Smooth Scrolling Using Navigation Menu
	$('.navbar a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});

	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('.navbar ul').toggleClass('showMenu');
		$('.navbar').toggleClass('open-menu');

		$('.navbar li').on('click', () => {
			$('.navbar ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
			$('.navbar').removeClass('open-menu');
		});
	});

});
