function projectParallax(){
    var scrolled = $(window).scrollTop();
    if(scrolled < $('#myCarousel').offset().top + $(window).height()) {
        $('#myCarousel').css('top', (0+(scrolled * 0.3)) + 'px');
    }
}
    

$(window).scroll(function(){

    var windowScroll = $(this).scrollTop();

    projectParallax();
    
    if ($('.featurette:first').offset().top - $(window).height() * (1/1.1618) < windowScroll)  {
        $('.featurette:first').addClass('is-showing');
    }

    if ($('.featurette:eq(1)').offset().top - $(window).height() * (1/1.1618) < windowScroll)  {
        $('.featurette:eq(1)').addClass('is-showing');
    }

    if ($('.featurette:eq(2)').offset().top - $(window).height() * (1/1.1618) < windowScroll)  {
        $('.featurette:eq(2)').addClass('is-showing');
    }

    if ($('.featurette:eq(3)').offset().top - $(window).height() * (1/1.1618) < windowScroll)  {
        $('.featurette:eq(3)').addClass('is-showing');
    }

    if ($('.featurette:eq(4)').offset().top - $(window).height() * (1/1.1618) < windowScroll)  {
        $('.featurette:eq(4)').addClass('is-showing');
    }
})