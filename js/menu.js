$('.start-btn-next, .kids-btn-prev').click(function() {
    $('.menu-page').css('display','none');
    $('.parents-page').css('display','block');
});

$('.parents-btn-prev').click(function() {
    $('.parents-page').css('display','none');
    $('.start-page').css('display','block');
});

$('.parents-btn-next, .side-panel-menu').click(function() {
    $('.menu-page').css('display','none');
    $('.kids-page').css('display','block');
});

$('.kids-name').click(function() {
    $('.side-panel').removeClass('open');
    $('.menu-page').delay(300).css('display','none');
});

$('.kid-add-name').click(function() {
    $(this).css({
        'width' : '195px',
        'background-position' : '169px 50%',
        'padding-left' : '54px'
    });
    $('.kid-add-title').css({
        'width' : '0',
        'height' : '0'
    });
    $('.kids-age').css({
        'height' : '32px'
    });
});

$('.logout-onclick').click(function() {
    $('.loged-panel').css('display','block');
});

$('.side-panel-cancel').click(function() {
    $('.loged-panel').css('display','none');
});
