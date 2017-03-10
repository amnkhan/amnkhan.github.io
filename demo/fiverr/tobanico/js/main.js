(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        // Brands Carousel
		    $("#brands-carousel").owlCarousel({
		        // Partners Carousel Settings
		        navigation: false,
		        pagination: false,
		        autoPlay: 3000, //Set AutoPlay to 3 seconds
		        items: 5,
		        itemsDesktop: [1199, 3],
		        itemsDesktopSmall: [979, 3],
		        stopOnHover: true,
		    });

		    // Offer Carousel
		    $("#offer-carousel").owlCarousel({
		        navigation: true,
		        pagination: false,
		        autoPlay: 4000, //Set AutoPlay to 3 seconds
		        items: 1,
		        itemsDesktop: [1199, 1],
		        itemsDesktopSmall: [979, 1],
		        stopOnHover: true,
		        navigationText: [
						      "<i class='fa fa-angle-left'></i>",
						      "<i class='fa fa-angle-right'></i>"
					      ],
		    });

				// -------------------------------------------------------------
				// Google Map Customization
				// -------------------------------------------------------------

				jQuery(function ($) {
				    
				    'use strict';

				    var map;

				    map = new GMaps({
				        el: '#googleMap',
				        lat: 43.0025047, //Replace Here Location Google Map Lat
				        lng: -81.182661, //Replace Here Location Google Map Lng
				        scrollwheel:false,
				        zoom: 18,
				        zoomControl : true,
				        panControl : true,
				        streetViewControl : true,
				        mapTypeControl: false,
				        overviewMapControl: false,
				        clickable: true
				    });

				    var image = '';
				    map.addMarker({
				        lat: 43.0025047, //Replace Here Location Google Map Lat
				        lng: -81.182661, //Replace Here Location Google Map Lat
				        icon: image,
				        animation: google.maps.Animation.DROP,
				        verticalAlign: 'bottom',
				        horizontalAlign: 'center',
				        backgroundColor: '#1ABB9B',
				    });


				    
				    
				}());






				    });


    jQuery(window).load(function(){


    });


}(jQuery));	
