jQuery(document).on('ready', function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /*WoW js Active
    =================*/
    new WOW().init({
        mobile: false
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="icofont icofont-swoosh-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /* Gallery Slider Active
    =============================*/
    $('.home-screen-slide-item').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        center: true,
        navText: ['<i class="icofont icofont-arrow-left"></i>', '<i class="icofont icofont-arrow-right"></i>'],
        items: 1
    });
    /* screen-slide
    ==================*/
    $('.screen-slide').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        center: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 5
            }
        }
    });
    $('.testimonial').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000
    });
    /* Logo-Slider
    ==================*/
    $('.sponsor').owlCarousel({
        loop: true,
        margin: 60,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        center: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 3,
                margin: 0,
            },
            768: {
                items: 5,
                margin: 0,
            },
            1200: {
                items: 5
            }
        }
    });
    /* Gallery Slider Active
    =============================*/

    $('.single-price').on('mouseenter', function () {
        $('.single-price').removeClass('active');
        $(this).addClass('active');
    });
    $('.single-price').on('mouseleave', function () {
        $('.single-price').removeClass('active');
        $('.single-price.center').addClass('active');
    });

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    /*--------------------
    MAGNIFIC POPUP JS
    ----------------------*/
    var magnifPopup = function () {
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 500,
            mainClass: 'mfp-with-fade',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'fade', // CSS transition easing function


            }
        });
    };
    // Call the functions 
    magnifPopup();
}(jQuery));
/* Preloader Js
===================*/
jQuery(window).on("load", function () {
    $('.preloader').fadeOut(500);
});