$(document).ready(function(){
  var pathname = window.location.pathname
  if (pathname !== '/planes.html' && pathname !== '/products.html') {
  $("#contact-form").on('submit', function(e){
      e.preventDefault();
      var form = $(this);

      form.parsley().validate();

      if (form.parsley().isValid()) {
        console.log('show success')
        e.preventDefault();
        $(this).parsley().reset();
        if ( $(this).parsley().isValid() ) {
          console.log('submit Form Valid')
          var data = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            serviceSelected: $('.customSelect select option:selected').html(),
          };
           $.ajax({
             url: 'https://api.frenosypartesapp.com/FP-Income-WEB/incomeRest/sendMarketingSideContactNotifacion',
             data: data,
             type: 'POST',
             success:function(data){
               $(".form-success").show(); //=== Show Success Message==
             },
             error:function(data) {
               $(".form-error").show().fadeOut(20000); //===Show Error Message====
             }
           });
         }
      }
    });
  }
});
