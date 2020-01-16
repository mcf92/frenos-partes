import './source/js/jquery';
import AOS from './node_modules/aos/dist/aos.js';
import './node_modules/bootstrap/dist/js/bootstrap.min.js'
import './node_modules/parsleyjs/dist/parsley.min.js';
import './node_modules/custom-select/build/custom-select.min.js'
import './node_modules/owl.carousel/dist/owl.carousel.min.js';
import 'is-in-viewport'
import './source/js/navbar';
import './source/js/banner';
import './source/js/contactForm'
import './source/js/smoothScroll';

AOS.init();

var pathname = window.location.pathname;
customSelect('select');
$('body').css('overflow','hidden');

function onScriptLoad() {
  var pathname = window.location.pathname
  if (pathname !== '/planes.html' && pathname !== '/products.html') {
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
}

$(window).on('load', function() {
  AOS.refresh();
  onScriptLoad();
  setTimeout(function(){
    $('.spinner_container').fadeOut();
    $('.spinner').fadeOut();
    $('body').css('overflow','auto');
  }, 1000);
  $('#btnPreventive').click(e => {AOS.refresh()});
  $('#btnCorrective').click(e => {AOS.refresh()});
 });
