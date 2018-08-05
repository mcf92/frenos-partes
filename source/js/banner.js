$(document).ready(function(){
    $(window).scroll(function(){
        if ($('.home-services_item').isOnScreen()) {
          $('.service').addClass('slideInUp');
        }

        if($('.correctivo').isOnScreen()) {
          $('.card.animated').addClass('slideInUp');
        }
    });

    $('.owl-carousel').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      loop:true,
      margin:10,
      responsive:{
        0:{
          items:1
        }
      },
      stagePadding:30,
      smartSpeed:450
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })

});
