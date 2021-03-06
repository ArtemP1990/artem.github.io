$(document).ready(function(){
    $(function(){
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });

    new WOW().init();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
});

$(document).ready(function(){

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close');
    
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});