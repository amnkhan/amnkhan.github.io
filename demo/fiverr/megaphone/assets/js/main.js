// Preloader
$(window).load(function() {
  "use strict";
  $('#loader').fadeOut();
});

// Hero Product Carousel
$('#screenshotCarousel').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 3000,
    items: 6,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

// Back Top Link
var offset = 200;
var duration = 500;
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
    });
    $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
});