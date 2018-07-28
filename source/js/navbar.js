window.onscroll = function() {myFunction()};

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    $('#contents').classList.add("sticky")
  } else {
    $('#contents').classList.remove("sticky");
  }
}
