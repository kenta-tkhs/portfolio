$(function(){
    var $win = $(window), 
        $hero = $('.hero'),
        $header = $('.header'),
        heroHeight = $hero.outerHeight();
        fixedClass = 'fixed';
        blockClass = 'block';

        $win.on('load scroll',function(){
            var value = $(this).scrollTop();
            if ($win.width() > 0) {

                if (value > heroHeight) {
                    $header.addClass(fixedClass);
                } else {
                    $header.removeClass(fixedClass);
                }
            }
        });
});

$(function(){
    var pagetop = $('#page_top');
    pagetop.hide();
  
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dots: true,
    arrows: false,
});

$('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
});


