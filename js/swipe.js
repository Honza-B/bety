document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;

    isOpen();
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        var el = $('.side-panel');

        if ( xDiff > 0 ) {
            /* left swipe */
            if(el.hasClass('open')) {
                el.removeClass('open');
            }
        } else {
            /* right swipe */
            if(el.hasClass('open')) {
                el.removeClass('open');
            } else {
                el.addClass('open');
            }
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

function isOpen() {
    var el = $('.side-panel');

    if(el.hasClass('open') && xDown > 434) {
        el.removeClass('open');
    }
}
