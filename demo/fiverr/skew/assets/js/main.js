(function ($) {
    "use strict";

      $(".hero-slider").owlCarousel({
 
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navigationText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
        transitionStyle : "fade"
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
        
    });

    // $(".testimonial-carousel").owlCarousel({
 
    //     navigation : true, // Show next and prev buttons
    //     slideSpeed : 300,
    //     paginationSpeed : 400,
    //     singleItem:true
    
    //     // "singleItem:true" is a shortcut for:
    //     // items : 1, 
    //     // itemsDesktop : false,
    //     // itemsDesktopSmall : false,
    //     // itemsTablet: false,
    //     // itemsMobile : false
        
    // });

} )(jQuery);