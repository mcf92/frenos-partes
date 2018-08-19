import './source/js/jquery';
import './node_modules/bootstrap/dist/js/bootstrap.min.js'
import './node_modules/parsleyjs/dist/parsley.min.js';
import './node_modules/custom-select/build/custom-select.min.js'
import './node_modules/owl.carousel/dist/owl.carousel.min.js';
import 'is-in-viewport'
import './source/js/navbar';
import './source/js/banner';
import './source/js/inViewPort'
import './source/js/contactForm'

customSelect('select');

function onScriptLoad() {
  var htmlEl = document.querySelector('.g-recaptcha');

  var captchaOptions = {
      sitekey: '6LeJuWoUAAAAANzwPz0OJMwhHmayniOubGH4Oq-H',
      size: 'invisible',
      callback: function (token) {
              $('#contact-form').submit();
              console.log('test:   ',token);
          }
  };

  var recaptchaId = window.grecaptcha.render(htmlEl, captchaOptions, false);

  $('#theSubmitBtn').click(function(e){
      e.preventDefault();

      if(grecaptcha.getResponse() != ''){
          grecaptcha.reset();
      }
      grecaptcha.execute();
  });
}


$(window).on('load', function() {
  onScriptLoad();
 });
