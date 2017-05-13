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

// Responsive Menu
$("ul.nav.navbar-nav li a").click(function() {
    $(".navbar-collapse").removeClass("in");
});

// jQuery Smooth Scroll
$('.page-scroll').on('click', function(event) {
    var $anchor = $(this),
        headerH = '55';
    $('html , body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
    }, 1200, 'easeInOutExpo');

    event.preventDefault();
});


// jQuery ScrollSpy
$('body').scrollspy({
    target: '.navbar-collapse',
    offset: 70
});


  //FancyBox
  $(".fancybox").on("click", function () {
      $.fancybox({
          href: this.href,
          type: $(this).data("type")
      });
      return false;
  }); // on
  $(".various").fancybox({
      maxWidth    : 1000,
      maxHeight   : 600,
      fitToView   : true,
      width       : '100%',
      height      : '100%',
      autoSize    : true,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
  });
  
// WOW
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();



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