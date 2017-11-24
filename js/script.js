$(document).ready(function() {
  $('.header-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $(".header-slider__nav_next"),
   prevArrow: $(".header-slider__nav_prev"),
   autoplay: true,
   autoplaySpeed: 5000,
  });

  $('.toggler-icon').on('click', function() {
    $('.nav-bar').slideToggle('0.5s');
  });

  $('.our-services__slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   vertical: true,
   verticalSwiping: true,
   dots: true,
   dotsClass: 'slick-dots__our-services',
   autoplay: true,
   autoplaySpeed: 5000,
  });

  var products = ['all', 'print-design', 'animation', 'art', 'web-design', 'photography', 'video'];

  $('.works-categories__category_all').addClass('works-categories__category_active');

  products.forEach(function(item) {
    $(`.works-categories__category_${item}`).click(function(){
      $('.works-categories__category').removeClass('works-categories__category_active');
      $(this).addClass('works-categories__category_active');
      $('.work__all').addClass('work-hidden');
      $(`.work__${item}`).removeClass('work-hidden');
    });
  });

  $('.study-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   dots: true,
   dotsClass: 'slick-dots__study-slider',
   // autoplay: true,
   // autoplaySpeed: 5000,
  });
});
