$(document).ready(function(){
    $('.slider').slick({

      prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/rightarrow.png"></button>',
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $(function(){
      $("a[href^='#']").click(function(){
              var _href = $(this).attr("href");
              $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
              return false;
      });
  });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 700) {
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
  });

});