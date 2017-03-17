// Preloader
$(window).load(function() {
  "use strict";
  $('#loader').fadeOut();
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

// Hero Product Carousel
$('#filer-carousel').owlCarousel({
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
            items:3
        },
        1000:{
            items:8
        }
    }
});

// Mailchimp Subscription
$('#mc-form').ajaxChimp({
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
});

// Contact Form
// Contact Form
$(document).on('submit', '#contactForm', function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    }
    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: dataString,
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
            }
        });
    } else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }
    return false;
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


// WOW
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();
