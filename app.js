$(function () {
    //フロートヘッダーメニュー

var targetHeight = $('.js-float-target').height();
$(window).on('scroll', function() {
    $('.js-float-header').toggleClass('float-active', $(this).scrollTop() > targetHeight);
});

    //ハンバーガーメニュー 
    $('.js-toggle-sp-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
    $('.js-move-link').on('click', function() {
        $('.js-toggle-sp-menu').removeClass('active');
        $('.js-toggle-sp-menu-target').removeClass('active');
    });

    //フェードイン
    $(window).on('load scroll', function() {
        $(".js-show").each(function() {
           var winScroll = $(window).scrollTop();
           var winHeight = $(window).height();
           var scrollPos = winScroll + (winHeight * 0.8);
           if($(this).offset().top < scrollPos) {
              $(this).css({opacity: 1, transform: 'translate(0, 0)'});
           }
        });
     });

});