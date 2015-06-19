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

		}, 2000);
	});

	function adjustWindow(){

		var s = skrollr.init({
            render: function(data) {
                if(data.curTop > 15000) {
                    $('.koule').addClass('close');
                }
            }
        });
        skrollr.menu.init(s);
	}

} )( jQuery );

$('.dialog-close').click(function() {
    $('.dialog').addClass('close');
});

$('.hvezda').click(function() {
    $('.tmave').addClass('close');
});
