$('.start-btn-next, .kids-btn-prev').click(function() {
    $('.parents-page').css('display','block');
});

$('.parents-btn-prev').click(function() {
    $('.parents-page').css('display','none');
});

$('.parents-btn-next').click(function() {
    $('.kids-page').css('display','block');
});

$('.kids-btn-prev').click(function() {
    $('.kids-page').css('display','none');
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

$('.kids-name').click(function() {
    $('.kids-page, .parents-page, .start-page').css('display','none');
});
