'use strict';

$(document).ready(function () {
  $(window).load(function () {
    $('#loading').fadeOut(500);
    $('.waitload').fadeIn(500);
  });
  $('img.lazy').lazyload({
    effect: 'fadeIn'
  });
});