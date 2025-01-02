$(document).ready(function() {
  var navbarToggle = $('#navbar-toggle');
  var navbarMenu = $('#navbar-menu');

  navbarToggle.click(function() {
    navbarMenu.slideToggle();
  });
});
