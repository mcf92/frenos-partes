import './jquery';

var Isotope = require('isotope-layout');

// init Isotope
var iso = new Isotope( '.grid', {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    category: '[data-category]'
  },
});

// bind filter on select change
$('.custom-select-option').on( 'click', function() {
  iso.arrange({
    // item element provided as argument
    filter: $(this).attr("data-value")
  });
});

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  var qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  iso.arrange({
    // item element provided as argument
    filter: function() {
      return qsRegex ? $(this).text().match( qsRegex ) : true;
    }
  });
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}
