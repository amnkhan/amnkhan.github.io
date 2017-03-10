(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

            // Book Carousel 
				    $("#book-carousel").owlCarousel({
				        // Partners Carousel Settings
				        navigation: true,
				        pagination: false,
				        autoPlay: 3000, //Set AutoPlay to 3 seconds
				        navigationText: [
						      "<i class='fa fa-angle-left'></i>",
						      "<i class='fa fa-angle-right'></i>"
					      ],
				        items: 6,
				        itemsDesktop: [1199, 3],
				        itemsDesktopSmall: [979, 3],
				        stopOnHover: true,
				    });

				    // Book Carousel 
				    $("#recent-book-carousel").owlCarousel({
				        // Partners Carousel Settings
				        navigation: false,
				        pagination: false,
				        autoPlay: 3000, //Set AutoPlay to 3 seconds
				        items: 1,
				        itemsDesktop: [1199, 3],
				        itemsDesktopSmall: [979, 3],
				        stopOnHover: true,
				    });




    });


    jQuery(window).load(function(){


    });


}(jQuery));	
