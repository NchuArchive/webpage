'use strict';

$(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 186) {
      $('#scrollMenu').fadeIn(100);
    } else {
      $('#scrollMenu').fadeOut(100);
    }
  });
});