$(document).ready(() => {
  $(window).load(() => {
    $('#loading').fadeOut(500);
    $('.waitload').fadeIn(500);
  })
  $('img.lazy').lazyload({
    effect : 'fadeIn'
  });
});
