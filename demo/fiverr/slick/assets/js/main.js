// Hero Product Carousel
$('.hero-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    items: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});