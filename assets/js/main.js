(function ($) {
	"use strict";
$(document).ready(function () {


  // Active Wow Js For Animation
   var wow = new WOW({
       mobile: false
       });
   wow.init();

  // Active Slick Slider
  $('.clients-carousel').slick({
    speed: 1000,
    dots:true
  });

  // Active waterweel Carousel
      var carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3
      });

      $('#prev').bind('click', function () {
        carousel.prev();
        return false
      });

      $('#next').bind('click', function () {
        carousel.next();
        return false;
      });


    // Scroll Events
    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();

        // For fix heder add class
        if (wScroll > 300) {
            $('.header-top-area').addClass('stiky');
        } else {
            $('.header-top-area').removeClass('stiky');
        };

    });


// Active Back to top 
  if ($('#back-to-top').length) {
    var scrollTrigger = window.innerHeight, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }


// Active Counter Up 
  $('.counter-item').counterUp({
      delay: 10,
      time: 1000
  });

  // POP UP VIDEO
    var $magnificPopUp = $('.play-video');
    
    $($magnificPopUp).each(function(){
      var $this = $(this),
        popType = $this.data('popup-type');
      $(this).magnificPopup({
        type: (popType ? popType: 'image'),
         removalDelay: 300,

          // Class that is added to popup wrapper and background
          // make it unique to apply your CSS animations just to this exact popup
          mainClass: 'mfp-fade'
      });
    });

      //one page nav for smoth scroll
   $('.navbar-nav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
    });

// Closes the Responsive Menu on Menu Item Click
 $('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click', function() {
        $('.navbar-toggle:visible').click();
    });

// google map 
      function initialize() {
          var stylez = [
            {
              featureType: "all",
              stylers: [
                { hue: "#333" },
                { saturation: -75 }
              ]
            },
            {
              featureType: "poi",
              elementType: "label",
              stylers: [
                { visibility: "off" }
              ]
            }
          ];

          var latlng = new google.maps.LatLng(23.7805733,90.279238), // Stockholm
          
              mapOptions = {
                  mapTypeControlOptions: {
                      mapTypeIds: [google.maps.MapTypeId.ROADMAP, "Edited"] 
                  },
                  zoom: 8,
                  center: latlng
              },
              
              map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions),
              
              styledMapType = new google.maps.StyledMapType(stylez, {name: "Edited"}),
              
              marker = new google.maps.Marker({
                  position: latlng, 
                  map: map, 
                  animation: google.maps.Animation.DROP,
                  title:"Hello World!"
              }),
              
              infowindow = new google.maps.InfoWindow({
                  content: "<div>Hello</div>"
              });
              
              map.mapTypes.set("Edited", styledMapType);
              map.setMapTypeId('Edited');
          
          function toggleBounce () {
              if (marker.getAnimation() != null) {
                  marker.setAnimation(null);
              } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
              }
          }
          
          // Add click listener to toggle bounce
          google.maps.event.addListener(marker, 'click', function () {
              toggleBounce();
              infowindow.open(map, marker);
              setTimeout(toggleBounce, 1500);
          });
      }

      // Call initialize -- in prod, add this to window.onload or some other DOM ready alternative
      initialize();

      
     /* meanmenu */
    $('#mobile-menu').meanmenu({
          meanMenuContainer: '.mobile-menu',
          meanScreenWidth: "991"
      }); 

  });
         
}(jQuery));	