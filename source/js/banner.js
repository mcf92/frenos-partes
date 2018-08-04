$(document).ready(function(){
    $(window).scroll(function(){
        if ($('.home-services_item').isOnScreen()) {
            $('.service').addClass('slideInUp');
        }
    });
});
