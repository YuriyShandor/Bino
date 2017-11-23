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
});
