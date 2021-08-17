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
    //  Первый слайдер
$(document).ready(function(){
    $('.promo__slider').slick({
        speed: 1200,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
           
            {
              breakpoint: 480,
              settings: {
                autoplay: false,
              }
            }
          ]
    });
});

    // Липкая шапка
var options = {
    offset: 500
  }

var header = new Headhesive('.promo__header', options);

    // Второй слайдер  

$(document).ready(function(){
    $('.partners__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev" alt="arrow"><img src="icons/rightarrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next" alt="arrow"><img src="icons/leftarrow.png"></button>',
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
});
