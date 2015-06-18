( function( $ ) {

	/*$window = $(window);
	$htmlbody = $('html,body');
	$slide = $('#slide-1');
	$slide2 = $('#slide-2');*/
	$body = $('.start-bg');
	$preload = $('#preload');

	//FadeIn all sections
	$preload.imagesLoaded( function() {
		setTimeout(function() {

			adjustWindow();

			$body.css('display','none');

		}, 800);
	});

	function adjustWindow(){

		var s = skrollr.init();
        skrollr.menu.init(s);
	}

} )( jQuery );
