( function( $ ) {

	$window = $(window);
	$htmlbody = $('html,body');
	$slide = $('#slide-1');
	$slide2 = $('#slide-2');
	$body = $('body');
	$preload = $('#preload');

	//FadeIn all sections
	$preload.imagesLoaded( function() {
		setTimeout(function() {

			adjustWindow();

			$body.removeClass('loading').addClass('loaded');

		}, 800);
	});

	function adjustWindow(){

		var s = skrollr.init({
			forceHeight: false,
			render: function(data) {
				//Log the current scroll position.
				//console.log(data.curTop);
				//$('#info').text(data.curTop);
			}
		});

		// get window size
	    winW = $window.width();
	    winH = $window.height();

	    slideH = winH;

	    if(slideH <= 550) {
			slideH = 550;
		}

	    $slide.height(17500);
	    $slide2.height(20700);

	    s.refresh($('.homeSlide'));

	}

} )( jQuery );
