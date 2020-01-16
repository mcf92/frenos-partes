$(document).ready(function(){
  var pathname = window.location.pathname
  if (pathname !== '/aboutUs.html' && pathname !== '/platform.html' && pathname !== '/planes.html' && pathname !== '/products.html') {
    $('.owl-carousel_maintenance').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive:{
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        600 : {
            items:1
        },
        // breakpoint from 768 up
        1000 : {
            items:1
        }
      }
    });

    var owlBanner = $('.owl-carousel_maintenance');
    owlBanner.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owlBanner.trigger('next.owl.carousel');
    })

    $('.home-services_owl-carousel').owlCarousel({
      loop: false,
      margin: 0,
      stagePadding: 0,
      responsiveClass: true,
      responsive:{
        // breakpoint from 0 up
        0 : {
            items:2
        },
        // breakpoint from 480 up
        600 : {
            items:3
        },
        // breakpoint from 768 up
        1000 : {
            items:4
        }
      },
      smartSpeed:450
    });

    var owl = $('.home-services_owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.home-services_next-btn').click(function() {
        owl.trigger('next.owl.carousel');
    })
  }
});
