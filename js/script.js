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
   autoplay: true,
   autoplaySpeed: 5000,
  });

  var a = 0;
  $(window).scroll(function() {
    var oTop = $('#section-statistic').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.statisctic-info__amount').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
        }
        });
      });
      a = 1;
    }
  });

  $('.pricing:nth-child(2)').addClass('pricing-hover');
  $('.pricing').on('mousemove', function() {
    $('.pricing').removeClass('pricing-hover');
    $(this).addClass('pricing-hover');
  });

  $('a[href^="#"]').on('click',function (e) {
	  e.preventDefault();

	  var target = this.hash;
	  var $target = $(target);

	  $('html, body').stop().animate({
	     'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	      window.location.hash = target;
	  });
	});

  AOS.init({
    duration: 1500,
    easing: 'ease-in-out-back',
    once: true,
    disable: window.innerWidth < 991
  });
});
